package com.ssafy.artchain.market.service;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import com.ssafy.artchain.market.dto.*;
import com.ssafy.artchain.market.entity.Market;
import com.ssafy.artchain.market.repository.MarketRepository;
import com.ssafy.artchain.marketlog.entity.MarketFlag;
import com.ssafy.artchain.marketlog.entity.MarketLog;
import com.ssafy.artchain.marketlog.repository.MarketLogRepository;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import com.ssafy.artchain.pieceowner.entity.PieceOwner;
import com.ssafy.artchain.pieceowner.repository.PieceOwnerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class MarketServiceImpl implements MarketService {

    private final MarketRepository marketRepository;
    private final FundingRepository fundingRepository;
    private final MemberRepository memberRepository;
    private final PieceOwnerRepository pieceOwnerRepository;
    private final MarketLogRepository marketLogRepository;
    private final String ROLE_USER = "ROLE_USER";

    @Override
    public List<MarketMainResponseDto> getMarketMain(String status, String category, Pageable pageable) {
        String UPPER_STATUS = "ALL";
        String UPPER_CATEGORY = "ALL";
        List<FundingProgressStatus> statusList;

        if (status.toUpperCase(Locale.ROOT).equals(UPPER_STATUS) || Stream.of(FundingProgressStatus.values())
                .noneMatch(ps -> ps.name().equals(status))) {
            statusList = List.of(FundingProgressStatus.PENDING_SETTLEMENT, FundingProgressStatus.SETTLED);
        } else {
            statusList = List.of(FundingProgressStatus.valueOf(status.toUpperCase()));
        }
        Page<Funding> fundingPage;
        if (category.toUpperCase(Locale.ROOT).equals(UPPER_CATEGORY)) {
            fundingPage = fundingRepository.findAllByProgressStatusIn(statusList, pageable);
        } else {
            fundingPage = fundingRepository.findAllByProgressStatusInAndCategory(statusList, category, pageable);
        }
        return fundingPage.getContent()
                .stream()
                .map(MarketMainResponseDto::new)
                .toList();
    }

    @Override
    public List<MarketSellResponseDto> getMarketSellList(Long fundingId, String sortFlag, Pageable pageable) {
        Page<Market> marketPage;
//      현재 판매중인 놈만 보이도록하기 위한 코드
        String LISTED = "LISTED";
        if (sortFlag.equals("최신순")) {
            marketPage = marketRepository.findAllByFundingIdAndStatusOrderByCreatedAtDesc(fundingId, LISTED, pageable);
        } else if (sortFlag.equals("높은가격순")) {
            marketPage = marketRepository.findAllByFundingIdAndStatusOrderByCoinPerPieceDesc(fundingId, LISTED, pageable);
        } else if (sortFlag.equals("낮은가격순")) {
            marketPage = marketRepository.findAllByFundingIdAndStatusOrderByCoinPerPiece(fundingId, LISTED, pageable);
        } else {
            marketPage = marketRepository.findAllByFundingIdAndStatus(fundingId, LISTED, pageable);
        }

        Funding funding = fundingRepository.findById(fundingId)
                .orElse(null);
        if (funding == null) {
            return null;
        }

        List<MarketSellResponseDto> marketSellResponseDtoList = marketPage.getContent()
                .stream()
                .map(item -> new MarketSellResponseDto(item, funding))
                .toList();

//        판매자 ID로 member 객체를 찾고, 그 안에 있는 지갑 주소를 넣어준다.
        for (MarketSellResponseDto dto : marketSellResponseDtoList) {
            Member member = memberRepository.findById(dto.getSellerId())
                    .orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
            dto.setSellerAddress(member.getWalletAddress());
        }

        return marketSellResponseDtoList;
    }

    @Override
    public List<MarketPieceTradeHistoryResponseDto> getMarketPieceTradeHistoryList(Long fundingId, Pageable pageable) {
        Page<Market> marketPage = marketRepository.findAllByFundingId(fundingId, pageable);

        List<MarketPieceTradeHistoryResponseDto> marketPieceTradeHistoryResponseDtoList = marketPage.getContent()
                .stream()
                .map(MarketPieceTradeHistoryResponseDto::new)
                .toList();

//        판매자를 찾아 판매자 주소를 Dto에 넣어준다

        for (MarketPieceTradeHistoryResponseDto dto : marketPieceTradeHistoryResponseDtoList) {
            Member seller = memberRepository.findById(dto.getSellerId()).orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
            dto.setSellerAddress(seller.getWalletAddress());
//            구매자가 있다면 구매자 주소도 넣어준다.
            if (dto.getBuyerId() != null) {
                Member buyer = memberRepository.findById(dto.getBuyerId()).orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
                dto.setBuyerAddress(buyer.getWalletAddress());
            }
        }
        return marketPieceTradeHistoryResponseDtoList;
    }

    @Override
    public MarketDetailResponseDto getMarketDetail(Long marketId) {
        MarketDetailResponseDto dto = marketRepository.findMarketDetailByMarketId(marketId);
        return dto;
    }

    @Override
    public List<MarketRegistFundingNameResponseDto> getMarketRegistForm(Long memberId) {
//        정산 대기 중인 놈들만 조각 거래 가능함
        String PENDING_SETTLEMENT = "PENDING_SETTLEMENT";
        FundingProgressStatus state = FundingProgressStatus.valueOf(PENDING_SETTLEMENT);
        List<MarketRegistFundingNameResponseDto> fundingNameList = pieceOwnerRepository.findMarketRegistFundingNameResponseDto(memberId, state);
        return fundingNameList;
    }

    @Override
    @Transactional
    public void createMarketRegist(CustomUserDetails member, MarketRegistRequestDto dto) {
        Market market = Market.builder()
                .fundingId(dto.getFundingId())
                .contractAddress(dto.getContractAddress())
                .pieceCount(dto.getPieceCount())
                .totalCoin(dto.getTotalCoin())
                .coinPerPiece(dto.getCoinPerPiece())
                .transactionHash(dto.getTransactionHash())
                .transactionTime(null)
                .sellerId(member.getId())
                .buyerId(null)
                .status("LISTED")
                .build();

        PieceOwner sellerPieceInfo = pieceOwnerRepository
                .findPieceOwnerByMemberIdAndFundingId(market.getSellerId(), market.getFundingId());
        if (sellerPieceInfo == null || (sellerPieceInfo.getPieceCount() < market.getPieceCount())) {
            return;
        } else {
            sellerPieceInfo.updatePieceCount(sellerPieceInfo.getPieceCount() - market.getPieceCount());
        }
        marketRepository.save(market);

        Member memberEntity = memberRepository.findById(member.getId())
                .orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
        MarketLog marketLog = MarketLog.builder()
                .market(market)
                .member(memberEntity)
                .transactionHash(dto.getTransactionHash())
                .marketFlag(MarketFlag.판매)
                .build();

        marketLogRepository.save(marketLog);
    }

    @Override
    @Transactional
    public int buyMarketItem(String transactionHash, Long marketId, CustomUserDetails member) {
        Member buyer = memberRepository.findById(member.getId())
                .orElse(null);
        if (buyer == null || member.getAuthorities().stream().noneMatch(au -> au.getAuthority().equals(ROLE_USER))) {
            return -3;
        }

        Market market = marketRepository.findById(marketId)
                .orElse(null);
        if (market == null) {
            return -2;
        }
        if (!market.getStatus().equals("LISTED")) {
            return -1;
        }
        if (new BigDecimal(market.getTotalCoin()).compareTo(buyer.getWalletBalance()) > 0) {
            return 0;
        }

        // 구매자 지갑 잔액 차감
        buyer.updateWalletBalance(buyer.getWalletBalance().subtract(new BigDecimal(market.getTotalCoin())));

        // 판매자 지갑 잔액 증가
        memberRepository.findById(market.getSellerId())
                .ifPresent(seller -> seller.updateWalletBalance(seller.getWalletBalance().add(new BigDecimal(market.getTotalCoin()))));

        // 구매자 기록 및 상태 변경
        market.updateBuyerAndStatus(member.getId(), "SOLD");

        // 판매 조각에 대해 조각 코인 소유자 이전
        PieceOwner buyerPieceInfo = pieceOwnerRepository
                .findPieceOwnerByMemberIdAndFundingId(member.getId(), market.getFundingId());
        if (buyerPieceInfo == null) {
            pieceOwnerRepository.save(PieceOwner.builder()
                    .memberId(member.getId())
                    .fundingId(market.getFundingId())
                    .pieceCount(market.getPieceCount())
                    .build());
        } else {
            buyerPieceInfo.updatePieceCount(buyerPieceInfo.getPieceCount() + market.getPieceCount());
        }

        MarketLog marketLog = MarketLog.builder()
                .market(market)
                .member(buyer)
                .transactionHash(transactionHash)
                .marketFlag(MarketFlag.구매)
                .build();

        marketLogRepository.save(marketLog);

        return 1;
    }

    //    테스트가 더 필요하긴 함
    @Override
    public List<MarketGraphResponseDto> getGraphList(Long fundingId) {

        LocalDateTime now = LocalDateTime.now();
        LocalDate endDate = now.toLocalDate(); // 시간 정보 제외
        LocalDate startDate = endDate.minusWeeks(1);

        List<MarketGraphResponseDto> responseDtos = marketRepository.findAvgCoinPerPiecePerDay(fundingId, startDate.atStartOfDay(), endDate.atTime(23, 59, 59));
        Map<LocalDate, MarketGraphResponseDto> dtoMap = new HashMap<>();

        // 조회된 데이터를 Map에 날짜별로 저장합니다.
        for (MarketGraphResponseDto dto : responseDtos) {
            dtoMap.put(dto.getDate(), dto); // LocalDate로 변환하여 저장
        }

        List<MarketGraphResponseDto> result = new ArrayList<>();
        long daysBetween = ChronoUnit.DAYS.between(startDate, endDate);

        // 시작일부터 종료일까지 모든 날짜를 순회합니다.
        for (long i = 0; i <= daysBetween; i++) {
            LocalDate currentDate = startDate.plusDays(i);

            // 해당 날짜에 데이터가 있는지 확인합니다.
            if (dtoMap.containsKey(currentDate)) {
                // 데이터가 있으면 결과 리스트에 추가합니다.
                result.add(dtoMap.get(currentDate));
            } else {
                // 데이터가 없는 경우 null 값을 가진 DTO를 생성하여 결과 리스트에 추가합니다.
                result.add(new MarketGraphResponseDto(Date.valueOf(currentDate), 0.00));
            }
        }

        return result;


    }
}
