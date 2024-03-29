package com.ssafy.artchain.member.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
// 기업 id,name과 관련된 펀딩 정보를 담아서 클라이언트에게 보내는 Dto
public class MemberComMypageResponseDto {
    private MemberComMypageDto memberComMypageDto;
    List<FundingComShareDto> fundingComShareList;
}
