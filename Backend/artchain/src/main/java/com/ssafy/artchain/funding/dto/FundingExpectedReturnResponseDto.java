package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingExpectedReturn;
import lombok.Getter;

@Getter
public class FundingExpectedReturnResponseDto {
    Long id;
    Long fundingId;
    int spectatorNum;
    int expectedReturn;

    public FundingExpectedReturnResponseDto(FundingExpectedReturn fundingExpectedReturn) {
        this.id = fundingExpectedReturn.getId();
        this.fundingId = fundingExpectedReturn.getFunding().getId();
        this.spectatorNum = fundingExpectedReturn.getSpectatorNum();
        this.expectedReturn = fundingExpectedReturn.getExpectedReturn();
    }
}
