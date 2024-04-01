package com.ssafy.artchain.sse.dto;

import java.util.List;

/**
 * @param fundingRecruitResultList 모집 완료에 따른 SSE 반환에 사용되는 리스트.
 */
public record SseFundingRecruitEndResultListDto(List<SseFundingRecruitEndResultListItemDto> fundingRecruitResultList) {
}
