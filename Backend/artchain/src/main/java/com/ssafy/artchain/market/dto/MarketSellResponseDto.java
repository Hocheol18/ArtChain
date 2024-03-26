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
public class MarketSellResponseDto {
    private Long id;
    private Long fundingId;
    private Long pieceCount;
    private Long totalCoin;
    private BigDecimal coinPerPiece;
    private Long sellerId;
    private String sellerAddress;

    private String status;

    public MarketSellResponseDto(Market market) {
        this.id = market.getId();
        this.fundingId = market.getFundingId();
        this.pieceCount = market.getPieceCount();
        this.totalCoin = market.getTotalCoin();
        this.coinPerPiece = market.getCoinPerPiece();
        this.sellerId = market.getSellerId();
        this.sellerAddress = null;
        this.status = market.getStatus();
    }

}