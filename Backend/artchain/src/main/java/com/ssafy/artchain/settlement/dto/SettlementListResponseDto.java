package com.ssafy.artchain.settlement.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class SettlementListResponseDto {
    private final List<SettlementListItemDto> settlementList;

    public SettlementListResponseDto(List<SettlementListItemDto> settlementList) {
        this.settlementList = settlementList;
    }
}
