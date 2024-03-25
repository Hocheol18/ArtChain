package com.ssafy.artchain.market.service;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import com.ssafy.artchain.market.dto.MarketSellResponseDto;
import com.ssafy.artchain.market.entity.Market;
import com.ssafy.artchain.market.repository.MarketRepository;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
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

    @Override
    public List<MarketMainResponseDto> getMarketMain(String status, String category, Pageable pageable) {
        System.out.println("서비스단 도착");
        String UPPER_STATUS = "ALL";
        String UPPER_CATEGORY = "ALL";
        List<FundingProgressStatus> statusList;

        if (status.toUpperCase(Locale.ROOT).equals(UPPER_STATUS) || Stream.of(FundingProgressStatus.values())
                .noneMatch(ps -> ps.name().equals(status))) {
            statusList = List.of(FundingProgressStatus.RECRUITMENT_STATUS,
                    FundingProgressStatus.PENDING_SETTLEMENT, FundingProgressStatus.SETTLED,
                    FundingProgressStatus.RECRUITMENT_FAILED);
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
        if(sortFlag.equals("최신순")) {
            marketPage = marketRepository.findAllByFundingIdOrderByCreatedAtDesc(fundingId, pageable);
        }
        else if(sortFlag.equals("높은가격순")) {
            marketPage = marketRepository.findAllByFundingIdOrderByCoinPerPieceDesc(fundingId, pageable);
        }
        else if(sortFlag.equals("낮은가격순")){
            marketPage = marketRepository.findAllByFundingIdOrderByCoinPerPieceAsc(fundingId, pageable);
        }
        else {
            marketPage = marketRepository.findAllByFundingId(fundingId, pageable);
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
        return null;
    }
}
