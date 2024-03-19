package com.ssafy.artchain.funding.service;

import com.ssafy.artchain.funding.dto.FundingCreateRequestDto;
import com.ssafy.artchain.funding.dto.FundingResponseDto;
import com.ssafy.artchain.funding.entity.Funding;
import java.util.List;

public interface FundingService {

    int createFunding(FundingCreateRequestDto data);

    FundingResponseDto getFunding(Long fundingId);

    List<Funding> getFundingListByCategoryAndStatus(String category, String status);

    int allowFunding(Long fundingId);
}
