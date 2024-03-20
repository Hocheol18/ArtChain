package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import java.math.BigDecimal;
import lombok.Getter;

@Getter
public class FundingResponseDto {

    private Long id;
    private Long entId;
    private String name;
    private String poster;
    private String description;
    private String investmentStructure;
    private BigDecimal estimatedReturn;
    private String riskNotice;
    private Long goalCoinCount;
    private String contractAddress;
    private String attachment;
    private String category;
    private Boolean isAllow;
    private FundingProgressStatus progressStatus;

    public FundingResponseDto(Funding funding) {
        this.id = funding.getId();
        this.entId = funding.getEntId();
        this.name = funding.getName();
        this.poster = funding.getPoster();
        this.description = funding.getDescription();
        this.investmentStructure = funding.getInvestmentStructure();
        this.estimatedReturn = funding.getEstimatedReturn();
        this.riskNotice = funding.getRiskNotice();
        this.goalCoinCount = funding.getGoalCoinCount();
        this.contractAddress = funding.getContractAddress();
        this.attachment = funding.getAttachment();
        this.category = funding.getCategory();
        this.isAllow = funding.getIsAllow();
        this.progressStatus = funding.getProgressStatus();
    }
}
