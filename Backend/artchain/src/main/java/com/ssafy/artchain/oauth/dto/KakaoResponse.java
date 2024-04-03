package com.ssafy.artchain.oauth.dto;

import lombok.extern.slf4j.Slf4j;

import java.util.Map;

@Slf4j
public class KakaoResponse implements OAuth2Response {
  private final Map attributesProperties;
  private final Map attributes;

  public KakaoResponse(Map<String, Object> attribute) {
    log.debug("attribute: {}", attribute);
//    ID를 위해 하나
    this.attributes = attribute;
//    카카오 안에 있는 properties를 위해 하나
    this.attributesProperties = (Map) attribute.get("properties");
    log.debug("생성자 attributes: {}", this.attributesProperties);
  }

  @Override
  public String getProvider() {
    return "kakao";
  }

  @Override
  public String getProviderId() {
    return attributes.get("id").toString();
  }

  @Override
  public String getName() {
    return this.attributesProperties.get("nickname").toString();
  }
}

