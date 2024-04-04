package com.ssafy.artchain.funding.dto;

import lombok.Getter;

@Getter
public class InvestmentIdResponseDto {

    private Long id;

    public InvestmentIdResponseDto(Long id) {
        this.id = id;
    }

}
