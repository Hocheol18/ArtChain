package com.ssafy.artchain.settlement.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class SettlementRequestDto {
    private Long fundingId;
    private Long settlementPrice;
    private Integer returnRate;
    private LocalDate depositDate;
    private String settlementFile;
}
