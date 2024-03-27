package com.ssafy.artchain.market.dto;

import com.ssafy.artchain.funding.entity.Funding;
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
    //        모집 완료 된 작품의 모집 완료까지 모인 코인 숫자
    private Long nowCoinCount;
    private LocalDate settlement;

    public MarketMainResponseDto(Funding funding) {
        this.id = funding.getId();
        this.name = funding.getName();
        this.poster = funding.getPoster();
        this.category = funding.getCategory();
//        모집 완료 된 작품의 모집 완료까지 모인 코인 숫자
        this.nowCoinCount = funding.getNowCoinCount();
        this.settlement = funding.getSettlement();
    }


}
