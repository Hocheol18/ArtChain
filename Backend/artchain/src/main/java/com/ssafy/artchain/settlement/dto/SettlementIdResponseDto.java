package com.ssafy.artchain.settlement.dto;

import lombok.Getter;

@Getter
public class SettlementIdResponseDto {
    private Long id;

    public SettlementIdResponseDto(Long id) {
        this.id = id;
    }
}
