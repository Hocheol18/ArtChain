package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class FundingListItemDto {
    private Long id;
    private Long entId;
    private String name;
    private String poster;
    private Long goalCoinCount;
    private Long nowCoinCount;
    private String contractAddress;
    private String category;
    private Boolean isAllow;
    private FundingProgressStatus progressStatus;
    private LocalDate recruitEnd;
    private LocalDate recruitStart;
    private LocalDate settlement;
    private Long investorNum;
    private Integer finalReturnRate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public FundingListItemDto(Funding funding, Long investorNum, Integer finalReturnRate) {
        this.id = funding.getId();
        this.entId = funding.getEntId();
        this.name = funding.getName();
        this.poster = funding.getPoster();
        this.goalCoinCount = funding.getGoalCoinCount();
        this.nowCoinCount = funding.getNowCoinCount();
        this.contractAddress = funding.getContractAddress();
        this.category = funding.getCategory();
        this.isAllow = funding.getIsAllow();
        this.progressStatus = funding.getProgressStatus();
        this.recruitEnd = funding.getRecruitEnd();
        this.recruitStart = funding.getRecruitStart();
        this.settlement = funding.getSettlement();
        this.investorNum = investorNum;
        this.finalReturnRate = finalReturnRate;
        this.createdAt = funding.getCreatedAt();
        this.updatedAt = funding.getUpdatedAt();
    }
}
