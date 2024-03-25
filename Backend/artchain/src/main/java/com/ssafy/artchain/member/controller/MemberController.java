package com.ssafy.artchain.member.controller;

import com.ssafy.artchain.jwt.JwtUtil;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.dto.request.CompanyMemberRegistRequestDto;
import com.ssafy.artchain.member.dto.request.MemberRegistRequestDto;
import com.ssafy.artchain.member.dto.response.MemberComMypageResponseDto;
import com.ssafy.artchain.member.dto.response.MemberUserMypageResponseListDto;
import com.ssafy.artchain.member.defaultResponse.DefaultResponse;
import com.ssafy.artchain.member.service.MemberServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import static com.ssafy.polaris.book.response.StatusCode.*;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final JwtUtil jwtUtil;
    private final MemberServiceImpl memberService;

    @GetMapping("/getLoginUserInfo")
    public String getUser(@AuthenticationPrincipal CustomUserDetails member) {
        System.out.println(member.getUsername());
        System.out.println(member.getNickname());

        return member.getNickname();
    }

//    @GetMapping("/individual")
//    public ResponseEntity<DefaultResponse<MemberUserResponseDto>> getUserInfo(@AuthenticationPrincipal CustomUserDetails member) {
//        MemberUserResponseDto memberUserResponseDto = memberService.getUserInfo(member);
//        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_USER_VIEW, memberUserResponseDto);
//    }

    @GetMapping("/individual")
    public ResponseEntity<DefaultResponse<MemberUserMypageResponseListDto>> getUserMypage(@AuthenticationPrincipal CustomUserDetails member) {
        MemberUserMypageResponseListDto dto = memberService.getUserMypage(member);
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_USER_VIEW, dto);
    }

    @GetMapping("/enterprise")
    public ResponseEntity<DefaultResponse<MemberComMypageResponseDto>> getComMypage(@AuthenticationPrincipal CustomUserDetails company) {
        MemberComMypageResponseDto dto = memberService.getComMypage(company);
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_COMPANY_VIEW, dto);
    }


    @PostMapping("/enterprise/join")
    public ResponseEntity<?> companyJoin(@RequestBody @Validated CompanyMemberRegistRequestDto companyDto) {
        memberService.companyJoin(companyDto);
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_NEW_COMPANY_USER, 200);
    }

    @PostMapping("/individual/join")
    public ResponseEntity<?> memberJoin(@RequestBody @Validated MemberRegistRequestDto memberDto) {
        memberService.memberJoin(memberDto);
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_NEW_NORMAL_USER, 200);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshAccessToken(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        String refresh = memberService.refreshToken(httpServletRequest, httpServletResponse);

        if(refresh.equals("Authorization")){
            return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_NEW_ACCESS_TOKEN, refresh);
//            새로운 엑세스
        } else {
            return DefaultResponse.toResponseEntity(HttpStatus.OK, FAIL_NEW_ACCESS_TOKEN, refresh);
        }
    }

}
