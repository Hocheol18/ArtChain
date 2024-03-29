package com.ssafy.artchain.settlement.dto;

import com.ssafy.artchain.settlement.entity.Settlement;
import com.ssafy.artchain.settlement.entity.SettlementStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SettlementResponseDto {
    private Long id;
    private Long entId;
    private String entName;
    private Long fundingId;
    private String fundingTitle;
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
