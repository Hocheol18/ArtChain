package com.ssafy.artchain.market.service;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import com.ssafy.artchain.market.dto.MarketResponseDto;
import com.ssafy.artchain.market.repository.MarketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class MarketServiceImpl implements MarketService {

    private final MarketRepository marketRepository;
    private final FundingRepository fundingRepository;

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
}
