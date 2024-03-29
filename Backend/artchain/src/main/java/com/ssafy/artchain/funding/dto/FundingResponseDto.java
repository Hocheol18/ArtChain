package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

@Getter
public class FundingResponseDto {

    private Long id;
    private Long entId;
    private String entName;
    private String name;
    private String poster;
    private String category;
    private String descriptionImg;
    private LocalDate recruitStart;
    private LocalDate recruitEnd;
    private LocalDate settlement;
    private Long goalCoinCount;
    private Long nowCoinCount;
    private String contractAddress;
    private Long totalBudget;
    private int unitPrice;
    private int bep;
    private FundingProgressStatus progressStatus;
    private Boolean isAllow;
    private List<FundingNoticeResponseDto> noticeList;
    private List<FundingScheduleResponseDto> scheduleList;
    private List<FundingExpectedReturnResponseDto> expectedReturnList;
    private List<FundingSaleResponseDto> saleList;
    private List<FundingCostResponseDto> costList;
    private Long investorNum; // 투자자 수(모집 중 ~ 정산 완료)

    public FundingResponseDto(Funding funding, Long investorNum, String entName) {
        this.id = funding.getId();
        this.entId = funding.getEntId();
        this.entName = entName;
        this.name = funding.getName();
        this.poster = funding.getPoster();
        this.category = funding.getCategory();
        this.descriptionImg = funding.getDescriptionImg();
        this.recruitStart = funding.getRecruitStart();
        this.recruitEnd = funding.getRecruitEnd();
        this.settlement = funding.getSettlement();
        this.goalCoinCount = funding.getGoalCoinCount();
        this.nowCoinCount = funding.getNowCoinCount();
        this.contractAddress = funding.getContractAddress();
        this.totalBudget = funding.getTotalBudget();
        this.unitPrice = funding.getUnitPrice();
        this.bep = funding.getBep();
        this.progressStatus = funding.getProgressStatus();
        this.isAllow = funding.getIsAllow();
        this.noticeList = funding.getNoticeList().stream().map(fundingNotice -> new FundingNoticeResponseDto(fundingNotice, entName))
                .toList();
        this.scheduleList = funding.getScheduleList().stream().map(FundingScheduleResponseDto::new)
                .toList();
        this.expectedReturnList = funding.getExpectedReturnList().stream().map(FundingExpectedReturnResponseDto::new)
                .toList();
        this.saleList = funding.getSaleList().stream().map(FundingSaleResponseDto::new)
                .toList();
        this.costList = funding.getCostList().stream().map(FundingCostResponseDto::new)
                .toList();
        this.investorNum = investorNum;
    }
}
