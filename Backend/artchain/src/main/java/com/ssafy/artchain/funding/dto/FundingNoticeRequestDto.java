package com.ssafy.artchain.funding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingNoticeRequestDto {

    private String title;

    private String content;
}
