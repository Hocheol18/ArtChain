package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.market.entity.Market;
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
  private Long id;
  private Long pieceCount;
  private Long coinCount;
  private String tradeFlag;
  private LocalDateTime createdAt;

  public MemberMyTradeResponseDto(InvestmentLog i) {
    this.transactionType = "투자";
    this.id = i.getId();
    this.pieceCount = i.getPieceCount();
    this.coinCount = i.getCoinCount();
    this.tradeFlag = "투자";
    this.createdAt = i.getCreatedAt();
  }

  public MemberMyTradeResponseDto(Market m, Long memberId) {
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

}
