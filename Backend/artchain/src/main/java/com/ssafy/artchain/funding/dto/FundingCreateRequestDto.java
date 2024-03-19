package com.ssafy.artchain.funding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingCreateRequestDto {
    private Long entId;

    private String name;

    private String poster;

    private String description;

    private String investmentStructure;

    private BigDecimal estimatedReturn;

    private String riskNotice;

    private Long goalCoinCount;

    private String contractAddress;

    // TODO: AWS S3로 첨부 파일 저장하기
    private String attachment;

    private String category;
}
