package com.ssafy.artchain.sse.dto;

/**
 * @param isRecruitSuccess       펀딩의 성공 실패 여부.
 * @param fundingContractAddress 펀딩의 컨트랙트 주소.
 */
public record SseFundingRecruitEndResultListItemDto(Boolean isRecruitSuccess, String fundingContractAddress) {
}
