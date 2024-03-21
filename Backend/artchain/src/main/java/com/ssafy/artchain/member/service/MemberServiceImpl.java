package com.ssafy.artchain.member.service;

import com.ssafy.artchain.jwt.JwtUtil;
import com.ssafy.artchain.jwt.entity.RefreshToken;
import com.ssafy.artchain.jwt.repository.RefreshRepository;
import com.ssafy.artchain.member.dto.request.CompanyMemberRegistRequestDto;
import com.ssafy.artchain.member.dto.request.MemberRegistRequestDto;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
// @Transactional 어노 테이션이 없는 메소드는 읽기 전용
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService {

    private final JwtUtil jwtUtil;
    private final MemberRepository memberRepository;
    private final RefreshRepository refreshRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public String refreshToken(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        //get refresh token
        String refresh = null;
        Cookie[] cookies = httpServletRequest.getCookies();
        for (Cookie cookie : cookies) {

            if (cookie.getName().equals("refresh")) {

                refresh = cookie.getValue();
            }
        }

        if (refresh == null) {
            return "null";
        }
        //expired check
        try {
            jwtUtil.isExpired(refresh);
        } catch (ExpiredJwtException e) {
            return "expired";
        }

        // 토큰이 refresh인지 확인 (발급시 페이로드에 명시)
        String category = jwtUtil.getCategory(refresh);

        if (!category.equals("refresh")) {
            return "invalid";
        }
        //DB에 저장되어 있는지 확인
        Boolean isExist = refreshRepository.existsByRefresh(refresh);
        if (!isExist) {

            //response body
            return "not in DB";
        }

        String memberId = jwtUtil.getMemberId(refresh);
        String authority = jwtUtil.getAuthority(refresh);

        //make new JWT
        String newAccess = jwtUtil.createJwt("access", memberId, authority, 600000L);
        String newRefresh = jwtUtil.createJwt("refresh", memberId, authority, 86400000L);

        //Refresh 토큰 저장 DB에 기존의 Refresh 토큰 삭제 후 새 Refresh 토큰 저장
        refreshRepository.deleteByRefresh(refresh);
        addRefreshEntity(memberId, newRefresh, 86400000L);

        //response
        httpServletResponse.setHeader("access", newAccess);
        httpServletResponse.addCookie(createCookie("refresh", newRefresh));
        return "access";
    }

    @Transactional
    @Override
    public void companyJoin(CompanyMemberRegistRequestDto companyDto) {
        Member member = Member.builder()
                .memberId(companyDto.getMemberId())
                .password(bCryptPasswordEncoder.encode(companyDto.getPassword()))
                .name(companyDto.getName())
                .bankAccount(companyDto.getBankAccount())
                .bankName(companyDto.getBankName())
                .email(companyDto.getEmail())
                .tel(companyDto.getTel())
                .businessRegistrationNumber(companyDto.getBusinessRegistrationNumber())
                .authority("ROLE_COMPANY")
                .isDeleted(false)
                .build();

        memberRepository.save(member);
    }

    @Transactional
    @Override
    public void memberJoin(MemberRegistRequestDto memberDto) {
        Member member = Member.builder()
                .memberId(memberDto.getMemberId())
                .password(bCryptPasswordEncoder.encode(memberDto.getPassword()))
                .name(memberDto.getName())
                .bankAccount(memberDto.getBankAccount())
                .bankName(memberDto.getBankName())
                .email(memberDto.getEmail())
                .authority("ROLE_USER")
                .isDeleted(false)
                .build();

        memberRepository.save(member);

    }

    private void addRefreshEntity(String memberId, String refresh, Long expiredMs) {

        Date date = new Date(System.currentTimeMillis() + expiredMs);

        RefreshToken refreshEntity = RefreshToken.builder()
                .memberId(memberId)
                .refresh(refresh)
                .expiration(date.toString())
                .build();
        refreshRepository.save(refreshEntity);
    }

    private Cookie createCookie(String key, String value) {

        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(24*60*60);
//    https에서만 쓰게 할 수 있는 코드, localhost환경에서 개발 중이므로 주석
//    cookie.setSecure(true);
//    cookie.setPath("/");
//    자바스크립트 접근 불가능
        cookie.setHttpOnly(true);
        return cookie;
    }
}
