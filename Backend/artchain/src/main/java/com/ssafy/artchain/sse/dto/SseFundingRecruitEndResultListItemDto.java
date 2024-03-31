package com.ssafy.artchain.sse.dto;

import lombok.Getter;

@Getter
public class SseFundingRecruitEndResultListItemDto {
    // 펀딩의 컨트랙트 주소와 성공 실패 여부가 필요.
    private Boolean isRecruitSuccess;
    private String fundingContractAddress;

    public SseFundingRecruitEndResultListItemDto(Boolean isRecruitSuccess, String fundingContractAddress) {
        this.isRecruitSuccess = isRecruitSuccess;
        this.fundingContractAddress = fundingContractAddress;
    }
}
