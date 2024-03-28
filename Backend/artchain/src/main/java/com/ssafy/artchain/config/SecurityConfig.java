package com.ssafy.artchain.config;

import com.ssafy.artchain.jwt.*;
import com.ssafy.artchain.jwt.repository.RefreshRepository;
import com.ssafy.artchain.member.repository.MemberRepository;
import com.ssafy.artchain.oauth.service.CustomOAuth2UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Collections;

@Configuration
@Configurable
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    //AuthenticationManager가 인자로 받을 AuthenticationConfiguraion 객체 생성자 주입
    private final AuthenticationConfiguration authenticationConfiguration;
    private final CustomOAuth2UserService oAuth2UserService;
    private final CustomSuccessHandler customSuccessHandler;
    private final JwtUtil jwtUtil;
    private final MemberRepository memberRepository;
    private final RefreshRepository refreshRepository;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {

        return configuration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        LoginFilter loginFilter = new LoginFilter(authenticationManager(authenticationConfiguration), jwtUtil, refreshRepository);
        loginFilter.setAuthenticationManager(http.getSharedObject(AuthenticationManager.class));
        loginFilter.setFilterProcessesUrl("/api/member/login");

//    csrf disable
        http.csrf((auth) -> auth.disable());
//    form로그인 방식 disable
        http.formLogin((auth) -> auth.disable());
//    httpBasic disable
        http.httpBasic((auth) -> auth.disable());

//    );
//    cors 설정
//    로그인의 경우 시큐리티 필터만 통과 후 응답이 되기 때문에 SecurityConfig에 설정한 CORS 값으로 진행됨
        http
                .cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() {

                    @Override
                    public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                        CorsConfiguration configuration = new CorsConfiguration();

                        configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000/"));
                        configuration.setAllowedOrigins(Collections.singletonList("https://j10a708.p.ssafy.io/"));
                        configuration.setAllowedMethods(Collections.singletonList("*"));
                        configuration.setAllowCredentials(true);
                        configuration.setAllowedHeaders(Collections.singletonList("*"));
                        configuration.setMaxAge(3600L);

                        configuration.setExposedHeaders(Collections.singletonList("Set-Cookie"));
                        configuration.setExposedHeaders(Collections.singletonList("Authorization"));


                        return configuration;
                    }
                }));

//    http.addFilterBefore(new JwtFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);
//    http.addFilterAfter(new JwtFilter(jwtUtil), OAuth2LoginAuthenticationFilter.class);
        http
                .addFilterBefore(new JwtFilter(jwtUtil, memberRepository), LoginFilter.class);
        //필터 추가 LoginFilter()는 인자를 받음 (AuthenticationManager() 메소드에 authenticationConfiguration 객체를 넣어야 함) 따라서 등록 필요
//    http
//            .addFilterAt(new LoginFilter(authenticationManager(authenticationConfiguration), jwtUtil, refreshRepository), UsernamePasswordAuthenticationFilter.class);
        http
                .addFilterAt(loginFilter, UsernamePasswordAuthenticationFilter.class);

        http
                .addFilterBefore(new CustomLogoutFilter(jwtUtil, refreshRepository), LogoutFilter.class);

        http.logout(logout -> logout.logoutUrl("/api/member/logout")
        );
//    oauth2
//    http.oauth2Login((oauth2) -> oauth2
////                    .redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
//                        .userInfoEndpoint((userInfoEndpointConfig) -> userInfoEndpointConfig
//                                .userService(oAuth2UserService))
//                        .successHandler(customSuccessHandler)
//                );

//    경로별 인가 작업
        http.authorizeHttpRequests((auth) -> auth
                .requestMatchers("/",
                        "/login",
                        "/join",
                        "/api/member/login",
                        "/api/member/enterprise/join",
                        "/api/member/individual/join",
                        "/api/member/refresh",
                        "/api/market",
                        "/api/market/sellList",
                        "/api/market/pieceHistory",
                        "/api/market/detail",
                        "/api/funding/list",
                        "/api/funding/{fundingId}",
                        "/api/funding/{fundingId}/notice/{fundingNoticeId}",
                        "/api/member/checkId",
//                        얘네 ROLE_ADMIN만 가능하도록 바꿔야함
                        "/api/member/permission",
                        "/api/funding/permission"
                ).permitAll()
                .anyRequest().authenticated());
//                    .anyRequest().permitAll());

        // 세션을 사용하지 않기 때문에 STATELESS로 설정
        http.sessionManagement(sessionManagement ->
                sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );


        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {

        return new BCryptPasswordEncoder();
    }
}

