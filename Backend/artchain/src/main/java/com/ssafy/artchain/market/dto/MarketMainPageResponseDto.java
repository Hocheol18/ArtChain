package com.ssafy.artchain.market.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MarketMainPageResponseDto {
    private Long fundingId;
    private String fundingName;
    private String fundingPoster;
    private Long marketCount;
}
