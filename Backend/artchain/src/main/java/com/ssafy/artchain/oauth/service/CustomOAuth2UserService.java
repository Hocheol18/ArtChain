package com.ssafy.artchain.oauth.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.artchain.member.repository.MemberRepository;
import com.ssafy.artchain.oauth.dto.CustomOAuth2User;
import com.ssafy.artchain.oauth.dto.KakaoResponseDto;
import com.ssafy.artchain.oauth.dto.OAuth2ResponseDto;
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
    OAuth2ResponseDto oAuth2ResponseDto = null;
    if(oauthClientName.equals("kakao")) {
//      memberId = "kakao_" + oAuth2User.getAttributes().get("id");
//      member = new Member(memberId, "이름", "0x1234", "12345", "일반 회원", false, LocalDateTime.now());
      oAuth2ResponseDto = new KakaoResponseDto(oAuth2User.getAttributes());
    } else {
      return null;
    }


//    String registrationId = userRequest.getClientRegistration().getRegistrationId();
//
//    if(registrationId.equals("kakao")){
////      oAuth2Response = new KakaoResponseDto(oAuth2User.getAttributes());
//    } else {
//      return null;
//    }
//
//    String userNameAttributeName = userRequest.getClientRegistration()
//            .getProviderDetails()
//            .getUserInfoEndpoint()
//            .getUserNameAttributeName();
//  }
    String username = oAuth2ResponseDto.getProvider()+" "+oAuth2ResponseDto.getProviderId();

    
    return null;
  }
}
