package com.ssafy.artchain.funding.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvestmentRequestDto {

    private String transactionHash;

    private LocalDateTime transactionTime;

    private Long coinCount;

    private Long pieceCount;
}
