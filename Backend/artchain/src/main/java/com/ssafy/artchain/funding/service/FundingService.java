package com.ssafy.artchain.funding.service;

import com.ssafy.artchain.funding.dto.FundingCreateRequestDto;
import com.ssafy.artchain.funding.dto.FundingNoticeRequestDto;
import com.ssafy.artchain.funding.dto.FundingNoticeResponseDto;
import com.ssafy.artchain.funding.dto.FundingResponseDto;
import com.ssafy.artchain.funding.dto.InvestmentRequestDto;
import com.ssafy.artchain.funding.entity.Funding;
import java.util.List;

public interface FundingService {

    int createFunding(FundingCreateRequestDto data);

    FundingResponseDto getFunding(Long fundingId);

    List<Funding> getFundingListByCategoryAndStatus(String category, String status);

    int allowFunding(Long fundingId);

    int createNotice(Long fundingId, FundingNoticeRequestDto dto);

    FundingNoticeResponseDto getFundingNotice(Long fundingId, Long fundingNoticeId);

    int updateFundingNotice(Long fundingId, Long fundingNoticeId, FundingNoticeRequestDto dto);

    int deleteFundingNotice(Long fundingId, Long fundingNoticeId);

    Long createInvestmentLog(Long fundingId, InvestmentRequestDto dto);
}
