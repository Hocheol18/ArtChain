package com.ssafy.artchain.funding.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class FundingListResponseDto {

    private Long totalCount;
    private final List<FundingListItemDto> fundingList;

    public FundingListResponseDto(Long totalCount, List<FundingListItemDto> fundingList) {
        this.totalCount = totalCount;
        this.fundingList = fundingList;
    }
}
