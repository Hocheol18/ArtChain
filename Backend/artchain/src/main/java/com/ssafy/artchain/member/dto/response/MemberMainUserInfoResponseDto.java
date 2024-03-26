package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.member.entity.Member;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MemberMainUserInfoResponseDto {
    private String name;
    private BigDecimal walletBalance;

    public MemberMainUserInfoResponseDto(Member member){
        this.name = member.getName();
        this.walletBalance = member.getWalletBalance();
    }
}
