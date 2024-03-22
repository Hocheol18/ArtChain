package com.ssafy.artchain.jwt;

import com.ssafy.artchain.oauth.dto.CustomOAuth2User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

@Component
@RequiredArgsConstructor
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
//public class CustomSuccessHandler implements AuthenticationSuccessHandler

private final JwtUtil jwtUtil;

  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

    System.out.println("SuccessHandler active");
    CustomOAuth2User customMemberDetail = (CustomOAuth2User) authentication.getPrincipal();

    String memberId = customMemberDetail.getName();

    Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
    Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
    GrantedAuthority auth = iterator.next();
    String authority = auth.getAuthority();

    //토큰 생성
    String access = jwtUtil.createJwt("access", memberId, authority, 600000L);
    String refresh = jwtUtil.createJwt("refresh", memberId, authority, 86400000L);

    //응답 설정
    response.setHeader("Authorization", access);
    response.addCookie(createCookie("refresh", refresh));
    response.setStatus(HttpStatus.OK.value());

//    프론트 URL에 넣어주면 됩니다
    System.out.println("SuccessHandler 끝 리다이렉트 갑니다잉");
    response.sendRedirect("https://j10a708.p.ssafy.io/");
//    response.sendRedirect("http://localhost:8080/");
  }

  private Cookie createCookie(String key, String value) {

    Cookie cookie = new Cookie(key, value);
    cookie.setMaxAge(86400000);
//    https에서만 쓰게 할 수 있는 코드, localhost환경에서 개발 중이므로 주석
//    cookie.setSecure(true);
//    cookie.setPath("/");
//    자바스크립트 접근 불가능
    cookie.setHttpOnly(true);
    return cookie;
  }
}
