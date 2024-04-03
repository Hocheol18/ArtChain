package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingNotice;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class FundingNoticeResponseDto {

    private Long id;
    private Long fundingId;
    private String title;
    private String content;
    private String entName;
    private LocalDateTime createdAt;

    public FundingNoticeResponseDto(FundingNotice fundingNotice, String entName) {
        this.id = fundingNotice.getId();
        this.fundingId = fundingNotice.getFunding().getId();
        this.title = fundingNotice.getTitle();
        this.content = fundingNotice.getContent();
        this.entName = entName;
        this.createdAt = fundingNotice.getCreatedAt();
    }
}
