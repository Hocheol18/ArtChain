package com.ssafy.artchain.member.dto.request;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberRegistRequestDto {
    private String memberId;
    private String password;
    private String name;
    private String bankAccount;
    private String bankName;
    private String email;
}
