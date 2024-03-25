package com.ssafy.artchain.market.dto;

import com.ssafy.artchain.market.entity.Market;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MarketPieceTradeHistoryResponseDto {
    private Long id;
    private Long fundingId;
    private String pieceName;
    private Long pieceCount;
    private Long totalCoin;
    private BigDecimal coinPerPiece;
    private String sellerAddress;
    private String buyerAddress;
    private String status;

}
