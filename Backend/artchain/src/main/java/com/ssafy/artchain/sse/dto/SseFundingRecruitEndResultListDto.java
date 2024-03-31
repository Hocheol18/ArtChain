package com.ssafy.artchain.sse.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class SseFundingRecruitEndResultListDto {
    private final List<SseFundingRecruitEndResultListItemDto> fundingRecruitResultList;

    public SseFundingRecruitEndResultListDto(List<SseFundingRecruitEndResultListItemDto> fundingRecruitResultList) {
        this.fundingRecruitResultList = fundingRecruitResultList;
    }
}
