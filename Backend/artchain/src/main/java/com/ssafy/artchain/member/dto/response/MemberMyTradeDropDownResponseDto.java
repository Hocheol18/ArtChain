package com.ssafy.artchain.member.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MemberMyTradeDropDownResponseDto {
    private Long fundingId;
    private String fundingName;
    private String poster;
}
