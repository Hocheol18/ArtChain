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
public class MarketDetailResponseDto {
  private Long id;
  private Long fundingId;
  private String fundingName;
  private String status;
  private String contractAddress;
  private String pieceName;
  private Long pieceCount;
  private Long totalCoin;
  private BigDecimal coinPerPiece;
  private String sellerAddress;
  private String buyerAddress;
  private String companyName;

  public MarketDetailResponseDto(Market market) {
    this.id = market.getId();
    this.fundingId = market.getFundingId();
    this.status = market.getStatus();
    this.contractAddress = market.getContractAddress();
    this.pieceName = market.getPieceName();
    this.pieceCount = market.getPieceCount();
    this.totalCoin = market.getTotalCoin();
    this.coinPerPiece = market.getCoinPerPiece();
    this.sellerAddress = null;
    this.buyerAddress = null;
    this.status = market.getStatus();
  }
}
