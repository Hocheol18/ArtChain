package com.ssafy.artchain.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//로그인의 경우 시큐리티 필터만 통과 후 응답이 되기 때문에 SecurityConfig에 설정한 CORS 값으로 진행되고,
// 컨트롤러를 타고 응답되는 경우 WebMvcConfigurer 설정을 통해 진행됨
@Configuration
public class CorsMvcConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry corsRegistry) {

    corsRegistry.addMapping("/**")
            .exposedHeaders("Set-Cookie")
            .allowedOrigins("http://localhost:8080");
  }
}
