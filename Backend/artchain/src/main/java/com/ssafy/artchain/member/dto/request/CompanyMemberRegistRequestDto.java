package com.ssafy.artchain.member.dto.request;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class CompanyMemberRegistRequestDto {
    private String memberId;
    private String password;
    private String name;
    private String bankAccount;
    private String bankName;
    private String email;
    private String tel;
    private String businessRegistrationNumber;

}
