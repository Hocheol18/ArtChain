package com.ssafy.artchain.config;

import com.ssafy.artchain.jwt.CustomSuccessHandler;
import com.ssafy.artchain.jwt.JwtFilter;
import com.ssafy.artchain.jwt.JwtUtil;
import com.ssafy.artchain.oauth.service.CustomOAuth2UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
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

  private final CustomOAuth2UserService oAuth2UserService;
  private final CustomSuccessHandler customSuccessHandler;
  private final JwtUtil jwtUtil;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//    csrf disable
    http.csrf((auth) -> auth.disable());
//    form로그인 방식 disable
    http.formLogin((auth) -> auth.disable());
//    httpBasic disable
    http.httpBasic((auth) -> auth.disable());

//    oauth2
//    http.oauth2Login(oauth2 -> oauth2
//            .redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
//            .userInfoEndpoint(endpoint -> endpoint.userService(oAuth2UserService))
//
//    );
//    cors 설정
//    로그인의 경우 시큐리티 필터만 통과 후 응답이 되기 때문에 SecurityConfig에 설정한 CORS 값으로 진행됨
    http
            .cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() {

              @Override
              public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {

                CorsConfiguration configuration = new CorsConfiguration();

                configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
//                configuration.setAllowedOrigins(Collections.singletonList("https://j10a708.p.ssafy.io/"));
                configuration.setAllowedMethods(Collections.singletonList("*"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedHeaders(Collections.singletonList("*"));
                configuration.setMaxAge(3600L);

                configuration.setExposedHeaders(Collections.singletonList("Set-Cookie"));
                configuration.setExposedHeaders(Collections.singletonList("Authorization"));

                return configuration;
              }
            }));

    http.addFilterBefore(new JwtFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);
    http.addFilterAfter(new JwtFilter(jwtUtil), OAuth2LoginAuthenticationFilter.class);
//    http
//            .addFilterBefore(new JWTFilter(jwtUtil), LoginFilter.class);
//    http
//            .addFilterAt(new LoginFilter(authenticationManager(authenticationConfiguration), jwtUtil, refreshRepository), UsernamePasswordAuthenticationFilter.class);
//    http
//            .addFilterBefore(new CustomLogoutFilter(jwtUtil, refreshRepository), LogoutFilter.class);

//    oauth2
    http.oauth2Login((oauth2) -> oauth2
//                    .redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
                        .userInfoEndpoint((userInfoEndpointConfig) -> userInfoEndpointConfig
                                .userService(oAuth2UserService))
                        .successHandler(customSuccessHandler)
                );

//    경로별 인가 작업
    http.authorizeHttpRequests((auth) -> auth
            .requestMatchers("/",
                    "/api/member/login",
                    "api/member/join",
                    "/api/member/refresh"
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

