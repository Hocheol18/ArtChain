package com.ssafy.artchain.settlement.dto;

import com.ssafy.artchain.settlement.entity.SettlementStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SettlementListItemDto {
    private Long id;
    private String entName;
    private String fundingTitle;
    private Long settlementPrice;
    private SettlementStatus status;
}
