package com.ssafy.artchain.market.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MarketRegistFundingNameResponseDto {
    private Long id;
    private String name;
    private Long pieceCount;
}
