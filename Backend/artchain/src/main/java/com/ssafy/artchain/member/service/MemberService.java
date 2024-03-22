package com.ssafy.artchain.member.service;

import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.dto.request.CompanyMemberRegistRequestDto;
import com.ssafy.artchain.member.dto.request.MemberRegistRequestDto;
import com.ssafy.artchain.member.dto.response.MemberUserMypageResponseDto;
import com.ssafy.artchain.member.dto.response.MemberUserMypageResponseListDto;
import com.ssafy.artchain.member.dto.response.MemberUserResponseDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.List;

public interface MemberService {
    String refreshToken(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse);
    void companyJoin(CompanyMemberRegistRequestDto companyDto);
    void memberJoin(MemberRegistRequestDto memberDto);
    MemberUserResponseDto getUserInfo(CustomUserDetails customMember);
    MemberUserMypageResponseListDto getUserMypage(CustomUserDetails customMember);
}
