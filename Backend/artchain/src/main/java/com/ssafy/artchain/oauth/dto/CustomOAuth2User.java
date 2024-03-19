package com.ssafy.artchain.oauth.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

@RequiredArgsConstructor
public class CustomOAuth2User implements OAuth2User {

  private final MemberDto memberDto;


//  Google,Naver,Kakao마다 다 달라서 획일화 하기가 힘들어 그냥 냅둠
  @Override
  public Map<String, Object> getAttributes() {

    return null;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    Collection<GrantedAuthority> collection = new ArrayList<>();
    collection.add(new GrantedAuthority() {
      @Override
      public String getAuthority() {
        return memberDto.getAuthority();
      }
    });

    return collection;
  }

  @Override
  public String getName() {
    return this.memberDto.getNickName();
  }
}
