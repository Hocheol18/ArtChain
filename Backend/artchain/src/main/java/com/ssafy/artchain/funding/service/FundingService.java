package com.ssafy.artchain.funding.service;

import com.ssafy.artchain.funding.dto.FundingCreateRequestDto;

public interface FundingService {
    public int createFunding(FundingCreateRequestDto data);
}
