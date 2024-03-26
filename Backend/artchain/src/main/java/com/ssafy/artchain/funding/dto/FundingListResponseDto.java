package com.ssafy.artchain.funding.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class FundingListResponseDto {

    private final List<FundingListItemDto> fundingList;

    public FundingListResponseDto(List<FundingListItemDto> fundingList) {
        this.fundingList = fundingList;
    }
}
