package com.ssafy.artchain.market.service;

import com.ssafy.artchain.connectentity.repository.InvestmentLogRepository;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import com.ssafy.artchain.market.dto.MarketSellResponseDto;
import com.ssafy.artchain.market.entity.Market;
import com.ssafy.artchain.market.repository.MarketRepository;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import com.ssafy.artchain.pieceowner.repository.PieceOwnerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ssafy.artchain.market.dto.*;

import java.util.List;
import java.util.Locale;
import java.util.NoSuchElementException;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class MarketServiceImpl implements MarketService {

    private final MarketRepository marketRepository;
    private final FundingRepository fundingRepository;
    private final MemberRepository memberRepository;
    private final InvestmentLogRepository investmentLogRepository;
    private final PieceOwnerRepository pieceOwnerRepository;

    @Override
    public List<MarketMainResponseDto> getMarketMain(String status, String category, Pageable pageable) {
        System.out.println("서비스단 도착");
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
        if(category.toUpperCase(Locale.ROOT).equals(UPPER_CATEGORY)) {
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
        if(sortFlag.equals("최신순")) {
            marketPage = marketRepository.findAllByFundingIdAndStatusOrderByCreatedAtDesc(fundingId, LISTED, pageable);
        }
        else if(sortFlag.equals("높은가격순")) {
            marketPage = marketRepository.findAllByFundingIdAndStatusOrderByCoinPerPieceAsc(fundingId, LISTED, pageable);
        }
        else if(sortFlag.equals("낮은가격순")){
            marketPage = marketRepository.findAllByFundingIdAndStatusOrderByCoinPerPieceDesc(fundingId, LISTED, pageable);
        }
        else {
            marketPage = marketRepository.findAllByFundingIdAndStatus(fundingId, LISTED, pageable);
        }

        List<MarketSellResponseDto> marketSellResponseDtoList = marketPage.getContent()
                .stream()
                .map(MarketSellResponseDto::new)
                .toList();

//        판매자 ID로 member 객체를 찾고, 그 안에 있는 지갑 주소를 넣어준다.
        for (MarketSellResponseDto dto: marketSellResponseDtoList) {
            Member member = memberRepository.findById(dto.getSellerId()).orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
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

        for (MarketPieceTradeHistoryResponseDto dto: marketPieceTradeHistoryResponseDtoList) {
            Member seller = memberRepository.findById(dto.getSellerId()).orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
            dto.setSellerAddress(seller.getWalletAddress());
//            구매자가 있다면 구매자 주소도 넣어준다.
            if(dto.getBuyerId() != null){
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
        List<MarketRegistFundingNameResponseDto> fundingNameList = investmentLogRepository.findFundingNamesByMemberId(memberId, state);
        return fundingNameList;
    }

    @Override
    public void createMarketRegist(CustomUserDetails member, MarketRegistRequestDto dto) {
        Market market = Market.builder()
                .fundingId(dto.getFundingId())
                .contractAddress(dto.getContractAddress())
                .pieceCount(dto.getPieceCount())
                .totalCoin(dto.getTotalCoin())
                .coinPerPiece(dto.getCoinPerPiece())
                .transactionHash(null)
                .transactionTime(null)
                .sellerId(member.getId())
                .buyerId(null)
                .status("LISTED")
                .build();

        marketRepository.save(market);
    }
}
