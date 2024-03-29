package com.ssafy.artchain.sse.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class SseFundingRecruitEndResultListDto {
    private final List<SseFundingRecruitEndResultListItemtDto> fundingRecruitResultList;

    public SseFundingRecruitEndResultListDto(List<SseFundingRecruitEndResultListItemtDto> fundingRecruitResultList) {
        this.fundingRecruitResultList = fundingRecruitResultList;
    }
}
