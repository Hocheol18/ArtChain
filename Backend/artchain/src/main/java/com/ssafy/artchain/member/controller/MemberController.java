package com.ssafy.artchain.member.controller;

import com.ssafy.artchain.jwt.JwtUtil;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.dto.request.CompanyMemberRegistRequestDto;
import com.ssafy.artchain.member.dto.request.MemberRegistRequestDto;
import com.ssafy.artchain.member.dto.response.MemberComMypageResponseDto;
import com.ssafy.artchain.member.dto.response.MemberMainUserInfoResponseDto;
import com.ssafy.artchain.member.dto.response.MemberPermissionResponseDto;
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


import java.util.List;

import static com.ssafy.polaris.book.response.StatusCode.*;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final JwtUtil jwtUtil;
    private final MemberServiceImpl memberService;

    @GetMapping("/getLoginUserInfo")
    public ResponseEntity<DefaultResponse<MemberMainUserInfoResponseDto>> getMainLoginUserInfo(@AuthenticationPrincipal CustomUserDetails member) {
        MemberMainUserInfoResponseDto dto = memberService.getMainLoginUserInfo(member);

        return DefaultResponse.toResponseEntity(HttpStatus.OK,SUCCESS_USER_MAIN_VIEW, dto);
    }

    @GetMapping("/checkId")
    public ResponseEntity<DefaultResponse<Object>> getCheckId(@RequestParam String checkId) {
        boolean isExists = memberService.isExistsMemberId(checkId);
        if (isExists) {
            // 이미 존재하는 아이디인 경우
            return DefaultResponse.emptyResponse(HttpStatus.OK, FAIL_ALREADY_EXIST_MEMBERID);
        } else {
            // 사용 가능한 아이디인 경우
            return DefaultResponse.emptyResponse(HttpStatus.OK, SUCCESS_USER_MEMBERID_CHECK);
        }
    }

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

    @GetMapping("/permission")
    public ResponseEntity<DefaultResponse<List<MemberPermissionResponseDto>>> getComPermissionList(){
        List<MemberPermissionResponseDto> memberPermissionResponseDtoList = memberService.getComPermissionList();
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_PERMISSION_COMPANYS_VIEW, memberPermissionResponseDtoList);
    }

    @PutMapping("/permission")
    public ResponseEntity<DefaultResponse<Object>> putPermission(@RequestParam Long memberId){
        memberService.putPermission(memberId);
        return DefaultResponse.emptyResponse(HttpStatus.OK, SUCCESS_PERMISSION_COMPANY_PUT);
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
