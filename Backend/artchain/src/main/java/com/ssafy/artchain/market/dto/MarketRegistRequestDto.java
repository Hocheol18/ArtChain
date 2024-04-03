package com.ssafy.artchain.market.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MarketRegistRequestDto {
    private Long fundingId;
    private String transactionHash;
    private String contractAddress;
    private Long pieceCount;
    private Long totalCoin;
    private BigDecimal coinPerPiece;
}
