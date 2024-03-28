package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.entity.Permission;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberPermissionResponseDto {
    private Long id;
    private String name;
    private String businessRegistrationNumber;
    private LocalDateTime createdAt;
    private Permission permission;

    public MemberPermissionResponseDto(Member member){
        this.id = member.getId();
        this.name = member.getName();
        this.businessRegistrationNumber = member.getBusinessRegistrationNumber();
        this.createdAt = member.getCreatedAt();
        this.permission = member.getPermission();
    }
}
