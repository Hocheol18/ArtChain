package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingCost;
import lombok.Getter;

@Getter
public class FundingCostResponseDto {
    Long id;
    Long fundingId;
    String mainVariety;
    String subVariety;

    public FundingCostResponseDto(FundingCost fundingCost) {
        this.id = fundingCost.getId();
        this.fundingId = fundingCost.getFunding().getId();
        this.mainVariety = fundingCost.getMainVariety();
        this.subVariety = fundingCost.getSubVariety();
    }
}
