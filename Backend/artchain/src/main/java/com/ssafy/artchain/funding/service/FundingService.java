package com.ssafy.artchain.funding.service;

import com.ssafy.artchain.funding.dto.*;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FundingService {

    int createFunding(FundingCreateRequestDto data);

    FundingResponseDto getFunding(Long fundingId);

    List<FundingResponseDto> getFundingListByCategoryAndStatus(String category, String status, String allowStat, Pageable pageable);

    int allowFunding(Long fundingId);

    int createNotice(Long fundingId, FundingNoticeRequestDto dto);

    FundingNoticeResponseDto getFundingNotice(Long fundingId, Long fundingNoticeId);

    int updateFundingNotice(Long fundingId, Long fundingNoticeId, FundingNoticeRequestDto dto);

    int deleteFundingNotice(Long fundingId, Long fundingNoticeId);

    Long createInvestmentLog(Long fundingId, InvestmentRequestDto dto);

    int updateFundingProgressStatus(Long fundingId, String progressStatus);
}
