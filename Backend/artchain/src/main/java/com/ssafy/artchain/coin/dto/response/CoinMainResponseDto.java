package com.ssafy.artchain.coin.dto.response;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class CoinMainResponseDto {
    private String walletAddress;
    private BigDecimal walletBalance;
}
