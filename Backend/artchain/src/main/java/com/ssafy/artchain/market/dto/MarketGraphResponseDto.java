package com.ssafy.artchain.market.dto;

import lombok.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MarketGraphResponseDto {
    private LocalDate date;
    private BigDecimal avgCoinPerPiece;

    // double 값을 받아 BigDecimal로 설정하는 생성자
    public MarketGraphResponseDto(Date date, double avgCoinPerPiece) {
        this.date = date.toLocalDate();
        this.avgCoinPerPiece = BigDecimal.valueOf(avgCoinPerPiece).setScale(2, RoundingMode.HALF_UP); // 소수점 둘째 자리 반올림
    }
}
