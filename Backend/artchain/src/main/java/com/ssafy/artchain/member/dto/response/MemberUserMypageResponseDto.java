package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberUserMypageResponseDto {
    private Long id;
    private String name;
    private String walletAddress;
    private BigDecimal walletBalance;
    private FundingProgressStatus progressStatus;
    private Long progressCount;
}
