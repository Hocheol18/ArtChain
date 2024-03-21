package com.ssafy.artchain.member.controller;

import com.ssafy.artchain.jwt.JwtUtil;
import com.ssafy.artchain.member.dto.request.CompanyMemberRegistRequestDto;
import com.ssafy.artchain.member.dto.request.MemberRegistRequestDto;
import com.ssafy.artchain.member.response.DefaultResponse;
import com.ssafy.artchain.member.service.MemberServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.polaris.book.response.StatusCode.*;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final JwtUtil jwtUtil;
    private final MemberServiceImpl memberService;


    @PostMapping("/companyJoin")
    public ResponseEntity<?> companyJoin(CompanyMemberRegistRequestDto companyDto) {
        memberService.companyJoin(companyDto);
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_NEW_COMPANY_USER, 200);
    }

    @PostMapping("/memberJoin")
    public ResponseEntity<?> memberJoin(MemberRegistRequestDto memberDto) {
        memberService.memberJoin(memberDto);
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_NEW_NORMAL_USER, 200);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshAccessToken(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        String refresh = memberService.refreshToken(httpServletRequest, httpServletResponse);

        if(refresh.equals("access")){
            return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_NEW_ACCESS_TOKEN, refresh);
//            새로운 엑세스
        } else {
            return DefaultResponse.toResponseEntity(HttpStatus.OK, FAIL_NEW_ACCESS_TOKEN, refresh);
        }
    }

}
