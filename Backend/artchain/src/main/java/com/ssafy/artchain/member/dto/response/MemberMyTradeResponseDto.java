package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.market.entity.Market;
import com.ssafy.artchain.marketlog.entity.MarketFlag;
import com.ssafy.artchain.marketlog.entity.MarketLog;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MemberMyTradeResponseDto {
  private String transactionType;
  private String transactionHash;
  private Long id;
  private Long pieceCount;
  private Long coinCount;
  private String tradeFlag;
  private LocalDateTime createdAt;

  public MemberMyTradeResponseDto(InvestmentLog i) {
    this.transactionHash = i.getTransactionHash();
    this.transactionType = "투자";
    this.id = i.getId();
    this.pieceCount = i.getPieceCount();
    this.coinCount = i.getCoinCount();
    this.tradeFlag = "투자";
    this.createdAt = i.getCreatedAt();
  }

  public MemberMyTradeResponseDto(MarketLog ml) {
    this.transactionHash = ml.getTransactionHash();
    this.transactionType = "마켓";
    this.id = ml.getId();
    this.pieceCount = ml.getMarket().getPieceCount();
    this.coinCount = ml.getMarket().getTotalCoin();
    if (ml.getMarketFlag().equals(MarketFlag.판매)) {
      this.tradeFlag = "판매";
    } else if(ml.getMarketFlag().equals(MarketFlag.구매)){
      this.tradeFlag = "구매";
    }
    else {
      this.tradeFlag = "취소";
    }
    this.createdAt = ml.getCreatedAt();
  }

  public MemberMyTradeResponseDto(Market m, Long memberId) {
    this.transactionHash = m.getTransactionHash();
    this.transactionType = "마켓";
    this.id = m.getId();
    this.pieceCount = m.getPieceCount();
    this.coinCount = m.getTotalCoin();
    if (m.getSellerId().equals(memberId)) {
      this.tradeFlag = "판매";
    } else {
      this.tradeFlag = "구매";
    }
    this.createdAt = m.getCreatedAt();
  }

  public MemberMyTradeResponseDto(Market m, MarketLog ml) {
    this.transactionHash = ml.getTransactionHash();
    this.transactionType = "마켓";
    this.id = m.getId();
    this.pieceCount = m.getPieceCount();
    this.coinCount = m.getTotalCoin();
    if (ml.getMarketFlag().equals(MarketFlag.판매)) {
      this.tradeFlag = "판매";
    } else if(ml.getMarketFlag().equals(MarketFlag.구매)){
      this.tradeFlag = "구매";
    }
    else {
      this.tradeFlag = "취소";
    }
    this.createdAt = m.getCreatedAt();
  }

}
