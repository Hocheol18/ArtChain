package com.ssafy.artchain.funding.service;

import com.ssafy.artchain.funding.dto.*;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FundingService {

    Long createFunding(FundingCreateRequestDto data, CustomUserDetails member);

    FundingResponseDto getFunding(Long fundingId);

    List<FundingListItemDto> getFundingListByCategoryAndStatus(String category, String status, String allowStat, Pageable pageable);

    int allowFunding(Long fundingId, CustomUserDetails member);

    int createNotice(Long fundingId, FundingNoticeRequestDto dto, CustomUserDetails member);

    FundingNoticeResponseDto getFundingNotice(Long fundingId, Long fundingNoticeId);

    int updateFundingNotice(Long fundingId, Long fundingNoticeId, FundingNoticeRequestDto dto, CustomUserDetails member);

    int deleteFundingNotice(Long fundingId, Long fundingNoticeId, CustomUserDetails member);

    Long createInvestmentLog(Long fundingId, InvestmentRequestDto dto, CustomUserDetails member);

    int updateFundingProgressStatus(Long fundingId, String progressStatus, CustomUserDetails member);
}
