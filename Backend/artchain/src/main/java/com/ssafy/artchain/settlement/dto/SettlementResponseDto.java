package com.ssafy.artchain.settlement.dto;

import com.ssafy.artchain.settlement.entity.Settlement;
import com.ssafy.artchain.settlement.entity.SettlementStatus;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class SettlementResponseDto {
    private Long id;
    private Long entId;
    private Long fundingId;
    private Long settlementPrice;
    private Integer returnRate;
    private LocalDate depositeDate;
    private String settlementFile;
    private SettlementStatus status;

    public SettlementResponseDto(Settlement settlement) {
        this.id = settlement.getId();
        this.entId = settlement.getEntId();
        this.fundingId = settlement.getFundingId();
        this.settlementPrice = settlement.getSettlementPrice();
        this.returnRate = settlement.getReturnRate();
        this.depositeDate = settlement.getDepositeDate();
        this.settlementFile = settlement.getSettlementFile();
        this.status = settlement.getStatus();
    }
}
