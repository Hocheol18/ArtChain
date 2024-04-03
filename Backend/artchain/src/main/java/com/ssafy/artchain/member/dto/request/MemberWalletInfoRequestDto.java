package com.ssafy.artchain.member.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MemberWalletInfoRequestDto {
    private String walletAddress;
    private String walletPassword;
}
