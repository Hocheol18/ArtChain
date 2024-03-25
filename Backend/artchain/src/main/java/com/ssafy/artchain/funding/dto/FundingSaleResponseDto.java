package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingSale;
import lombok.Getter;

@Getter
public class FundingSaleResponseDto {
    Long id;
    Long fundingId;
    String mainVariety;
    String subVariety;
    int percentage;

    public FundingSaleResponseDto(FundingSale fundingSale) {
        this.id = fundingSale.getId();
        this.fundingId = fundingSale.getFunding().getId();
        this.mainVariety = fundingSale.getMainVariety();
        this.subVariety = fundingSale.getSubVariety();
        this.percentage = fundingSale.getPercentage();
    }
}
