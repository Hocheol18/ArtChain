package com.ssafy.artchain.oauth.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.artchain.member.repository.MemberRepository;
import com.ssafy.artchain.oauth.dto.CustomOAuth2User;
import com.ssafy.artchain.oauth.dto.KakaoResponse;
import com.ssafy.artchain.oauth.dto.MemberDto;
import com.ssafy.artchain.oauth.dto.OAuth2Response;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

  private final MemberRepository memberRepository;

  @Override
  public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
    OAuth2User oAuth2User = super.loadUser(userRequest);
    String oauthClientName = userRequest.getClientRegistration().getClientName();
    try {
      System.out.println(new ObjectMapper().writeValueAsString(oAuth2User.getAuthorities()));

    } catch (Exception e) {
      e.printStackTrace();
    }
//    Member member = null;
//    String memberId = null;
    OAuth2Response oAuth2Response = null;
    if(oauthClientName.equals("kakao")) {
      oAuth2Response = new KakaoResponse(oAuth2User.getAttributes());
    } else {
      return null;
    }
//    oAuth2Response 완료
    String kakaoId = oAuth2Response.getProvider()+" "+ oAuth2Response.getProviderId();
    MemberDto memberDto = new MemberDto();
    memberDto.setId(kakaoId);
    memberDto.setNickName(oAuth2Response.getName());
    memberDto.setAuthority("ROLE_USER");


    return new CustomOAuth2User(memberDto);
  }
}
