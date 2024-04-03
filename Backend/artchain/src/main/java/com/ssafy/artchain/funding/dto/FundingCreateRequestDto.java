package com.ssafy.artchain.funding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingCreateRequestDto {

    private Long entId;

    private String name;

    private String poster;

    private String category;

    private String descriptionImg;

    private LocalDate recruitStart;

    private LocalDate recruitEnd;

    private LocalDate settlement;

    private Long goalCoinCount;

    private String contractAddress;

    private Long totalBudget;

    private int unitPrice;

    private int bep;

    private List<FundingScheduleCreateDto> scheduleList;

    private List<FundingExpectedReturnCreateDto> expectedReturnList;

    private List<FundingSaleCreateDto> saleList;

    private List<FundingCostCreateDto> costList;

}
