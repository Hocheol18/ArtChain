package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingCost;
import lombok.Getter;

@Getter
public class FundingCostResponseDto {
    private Long id;
    private Long fundingId;
    private String mainVariety;
    private String subVariety;

    public FundingCostResponseDto(FundingCost fundingCost) {
        this.id = fundingCost.getId();
        this.fundingId = fundingCost.getFunding().getId();
        this.mainVariety = fundingCost.getMainVariety();
        this.subVariety = fundingCost.getSubVariety();
    }
}
