package com.ssafy.artchain.market.dto;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MarketMainResponseDto {
    private Long id;
    private String name;
    private String poster;
    private String category;
    private FundingProgressStatus status;
    private Long nowCoinCount;
    private LocalDate settlement;

    public MarketMainResponseDto(Funding funding) {
        this.id = funding.getId();
        this.name = funding.getName();
        this.poster = funding.getPoster();
        this.category = funding.getCategory();
        this.status = funding.getProgressStatus();
        this.nowCoinCount = funding.getNowCoinCount();
        this.settlement = funding.getSettlement();
    }


}
