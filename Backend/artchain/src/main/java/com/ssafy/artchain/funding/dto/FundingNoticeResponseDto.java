package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingNotice;
import lombok.Getter;

@Getter
public class FundingNoticeResponseDto {

    private Long id;
    private Long fundingId;
    private String title;
    private String content;

    public FundingNoticeResponseDto(FundingNotice fundingNotice) {
        this.id = fundingNotice.getId();
        this.fundingId = fundingNotice.getFunding().getId();
        this.title = fundingNotice.getTitle();
        this.content = fundingNotice.getContent();
    }
}
