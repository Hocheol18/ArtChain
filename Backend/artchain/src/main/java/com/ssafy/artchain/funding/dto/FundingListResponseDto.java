package com.ssafy.artchain.funding.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class FundingListResponseDto {

    private final List<FundingResponseDto> fundingList;

    public FundingListResponseDto(List<FundingResponseDto> fundingList) {
        this.fundingList = fundingList;
    }
}
