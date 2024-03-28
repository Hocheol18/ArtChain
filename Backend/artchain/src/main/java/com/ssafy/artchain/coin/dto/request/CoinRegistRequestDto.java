package com.ssafy.artchain.coin.dto.request;

import com.ssafy.artchain.coin.entity.InoutFlag;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class CoinRegistRequestDto {

    private BigDecimal coinAmount;
    private String transactionHash;
    private InoutFlag inoutFlag;
    private Long currencyFlow;

}
