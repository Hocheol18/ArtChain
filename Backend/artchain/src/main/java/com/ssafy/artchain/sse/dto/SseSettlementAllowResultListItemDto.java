package com.ssafy.artchain.sse.dto;

import java.math.BigDecimal;

/**
 * @param pieceOwnerWalletAddress 정산을 받을 조각 코인 소유자의 지갑 주소.
 * @param settlementCoinCount     소유한 조각 코인 보유량에 수익률을 적용한 정산 받을 코인량.
 * @param pieceCount 조각 보유량
 */
public record SseSettlementAllowResultListItemDto(String pieceOwnerWalletAddress, BigDecimal settlementCoinCount, Long pieceCount) {
}
