package com.ssafy.artchain.funding.dto;

import lombok.Getter;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Getter
public class FundingMainPageItemDto {
    private final Long id;
    private final String poster;
    private final String fundingTitle;
    private final Long goalCoinCount;
    private final Long nowCoinCount;
    private final BigDecimal percentage;

    public FundingMainPageItemDto(Long id, String poster, String fundingTitle, Long goalCoinCount, Long nowCoinCount) {
        this.id = id;
        this.poster = poster;
        this.fundingTitle = fundingTitle;
        this.goalCoinCount = goalCoinCount;
        this.nowCoinCount = nowCoinCount;
        if (!goalCoinCount.equals(0L)) {
            this.percentage = new BigDecimal(nowCoinCount)
                    .multiply(new BigDecimal(100))
                    .divide(new BigDecimal(goalCoinCount), 2, RoundingMode.HALF_UP);
        } else {
            this.percentage = BigDecimal.ZERO;
        }
    }
}
