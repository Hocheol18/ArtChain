package com.ssafy.artchain.coin.dto.response;

import com.ssafy.artchain.coin.entity.Coin;
import com.ssafy.artchain.coin.entity.InoutFlag;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class CoinHistoryResponseDto {

    private BigDecimal coinAmount;
    private LocalDateTime processAt;
    private Long currencyFlow;

    public CoinHistoryResponseDto(Coin coin) {
        this.coinAmount = coin.getCoinAmount();
        this.processAt = coin.getProcessAt();
        this.currencyFlow = coin.getCurrencyFlow();
    }

}
