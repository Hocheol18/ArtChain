package com.ssafy.artchain.market.dto;

import com.ssafy.artchain.market.entity.Market;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class MarketResponseDto {
    private Long id;
    private Long fundingId;
    private String contractAddress;
    private String pieceName;
    private Long pieceCount;
    private Long totalCoin;
    private BigDecimal coinPerPiece;
    private String transactionHash;
    private LocalDateTime transactionTime;
    private Long sellerId;
    private Long buyerId;
    private String status;


    public MarketResponseDto(Market market) {
        this.id = market.getId();
        this.fundingId = market.getFundingId();
        this.contractAddress = market.getContractAddress();
        this.pieceName = market.getPieceName();
        this.pieceCount = market.getPieceCount();
        this.totalCoin = market.getTotalCoin();
        this.coinPerPiece = market.getCoinPerPiece();
        this.transactionHash = market.getTransactionHash();
        this.transactionTime = market.getTransactionTime();
        this.sellerId = market.getSellerId();
        this.buyerId = market.getBuyerId();
        this.status = market.getStatus();
    }

}
