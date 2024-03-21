package com.ssafy.artchain.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.artchain.jwt.entity.RefreshToken;
import com.ssafy.artchain.jwt.repository.RefreshRepository;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;

@RequiredArgsConstructor
public class LoginFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final RefreshRepository refreshRepository;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        System.out.println("로그인 실행");
        try {
            // HttpServletRequest에서 JSON 본문을 읽고 파싱
            Map<String, String> requestMap = new ObjectMapper().readValue(request.getInputStream(), Map.class);

            String username = requestMap.get("username");
            String password = requestMap.get("password");

            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);

            // 인증 매니저에게 토큰을 전달하여 사용자 인증 시도
            return authenticationManager.authenticate(authToken);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) {
        System.out.println("일반 로그인 성공");
        //UserDetailsS
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();

        String memberId = customUserDetails.getUsername();
//        String username = authentication.getName();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
        GrantedAuthority auth = iterator.next();
        String authority = auth.getAuthority();

        //토큰 생성
        String access = jwtUtil.createJwt("access", memberId, authority, 600000L);
        String refresh = jwtUtil.createJwt("refresh", memberId, authority, 86400000L);
        //Refresh 토큰 저장
        addRefreshEntity(memberId, refresh, 86400000L);
        //응답 설정
        response.setHeader("access", access);
        response.addCookie(createCookie("refresh", refresh));
        response.setStatus(HttpStatus.OK.value());
    }

    //로그인 실패시 실행하는 메소드
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) {
        System.out.println("일반 로그인 실패");
        response.setStatus(401);
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
        cookie.setMaxAge(86400000);
//    https에서만 쓰게 할 수 있는 코드, localhost환경에서 개발 중이므로 주석
//    cookie.setSecure(true);
    cookie.setPath("/api");
//    자바스크립트 접근 불가능
        cookie.setHttpOnly(true);
        return cookie;
    }
}
