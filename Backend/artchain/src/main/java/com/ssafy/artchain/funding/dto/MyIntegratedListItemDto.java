package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MyIntegratedListItemDto {
    private Long fundingId; // 펀딩 식별자
    private FundingProgressStatus fundingProgressStatus; // 펀딩 진행 상태
    private String fundingTitle; // 펀딩 작품명
    private String fundingPoster; // 펀딩 작품의 포스터
    private Long pieceCount; // 보유 또는 구매했던 조각의 수
    private BigDecimal pieceUnitPrice; // 1조각 평단가
    private BigDecimal shareholdingRatio; // 지분율
    private LocalDate settlementDate; // 정산완료일 또는 정산예정일
    private BigDecimal settlementCoin; // 정산 후 받은 코인
    private Integer returnRate; // 최종 수익률
}
