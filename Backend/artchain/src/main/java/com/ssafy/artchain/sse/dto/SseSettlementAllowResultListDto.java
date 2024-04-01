package com.ssafy.artchain.sse.dto;

import java.util.List;

/**
 * @param fundingContractAddress    정산 신청이 승인된 펀딩의 컨트랙트 주소.
 * @param settlementAllowResultList 정산 신청이 승인된 펀딩에 대해 조각 코인을 소유한 회원의 정보 리스트.
 */
public record SseSettlementAllowResultListDto(String fundingContractAddress,
                                              List<SseSettlementAllowResultListItemDto> settlementAllowResultList) {
}
