package com.ssafy.artchain.jwt;

import com.ssafy.artchain.oauth.dto.CustomOAuth2User;
import com.ssafy.artchain.oauth.dto.MemberDto;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

  private final JwtUtil jwtUtil;
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    //cookie들을 불러온 뒤 Authorization Key에 담긴 쿠키를 찾음
    String authorization = null;
    Cookie[] cookies = request.getCookies();
    for (Cookie cookie : cookies) {

      System.out.println(cookie.getName());
      if (cookie.getName().equals("Authorization")) {

        authorization = cookie.getValue();
      }
    }

    //Authorization 헤더 검증
    if (authorization == null) {

      System.out.println("token null");
      filterChain.doFilter(request, response);

      //조건이 해당되면 메소드 종료 (필수)
      return;
    }

    String token = authorization;

    if(jwtUtil.isExpired(token)) {

      System.out.println("토큰 시간 만료됨");
      filterChain.doFilter(request, response);

      //조건이 해당되면 메소드 종료 (필수)
      return;
    }
    String memberId = jwtUtil.getMemberId(token);
    String authority = jwtUtil.getAuthority(token);

    //userDTO를 생성하여 값 set
    MemberDto memberDto = new MemberDto();
    memberDto.setId(memberId);
    memberDto.setAuthority(authority);

    //UserDetails에 회원 정보 객체 담기
    CustomOAuth2User customOAuth2User = new CustomOAuth2User(memberDto);

    //스프링 시큐리티 인증 토큰 생성
    Authentication authToken = new UsernamePasswordAuthenticationToken(customOAuth2User, null, customOAuth2User.getAuthorities());
    //세션에 사용자 등록
    SecurityContextHolder.getContext().setAuthentication(authToken);

    filterChain.doFilter(request, response);
  }
}
