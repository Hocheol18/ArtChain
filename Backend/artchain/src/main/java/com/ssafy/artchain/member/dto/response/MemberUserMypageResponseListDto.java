package com.ssafy.artchain.member.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberUserMypageResponseListDto {
    private List<MemberUserMypageResponseDto> memberUserMypageResponseDtoList;
    private int totalInvestmentCount;
}
