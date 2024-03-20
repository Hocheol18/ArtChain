package com.ssafy.artchain.member.service;

import com.ssafy.artchain.member.dto.request.CompanyMemberRegistRequestDto;
import com.ssafy.artchain.member.dto.request.MemberRegistRequestDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface MemberService {
    String refreshToken(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse);
    void companyJoin(CompanyMemberRegistRequestDto companyDto);
    void memberJoin(MemberRegistRequestDto memberDto);
}
