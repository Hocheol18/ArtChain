package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.member.entity.Member;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberUserResponseDto {
    private Long id;
    private String name;
    private String walletAddress;
    private BigDecimal walletBalance;
    private String bankName;
    private String bankAccount;

    public MemberUserResponseDto(Member member) {
        this.id = member.getId();
        this.name = member.getName();
        this.walletAddress = member.getWalletAddress();
        this.walletBalance = member.getWalletBalance();
        this.bankName = member.getBankName();
        this.bankAccount = member.getBankAccount();
    }

}
