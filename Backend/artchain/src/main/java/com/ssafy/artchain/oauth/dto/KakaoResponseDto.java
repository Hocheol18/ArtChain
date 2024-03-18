package com.ssafy.artchain.oauth.dto;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Map;

public class KakaoResponseDto implements OAuth2ResponseDto {
  private final Map<String, Object> attribute;

  public KakaoResponseDto(Map<String, Object> attribute) {

    this.attribute = (Map<String, Object>) attribute.get("attributes");
  }

  @Override
  public String getProvider() {

    return "kakao";
  }

  @Override
  public String getProviderId() {
    return attribute.get("id").toString();
  }

  @Override
  public String getName() {
    Map<String, Object> properites = (Map<String, Object>) attribute.get("properites");
    return properites.get("nickname").toString();
  }
}
