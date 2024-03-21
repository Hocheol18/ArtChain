package com.ssafy.artchain.member.service;

import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
//AuthenticationManager는 인터페이스로 등록된 UserDetailsService의 구현부를 찾아서
// 내부 loadByUsername 메소드를 실행하기 때문에 단 하나의 UserDetailsService 구현부에만
// @Service 어노테이션을 선언하여 작업해야 합니다
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
        System.out.println("검증 로직 실행");
        Member loginMember = memberRepository.findByMemberId(memberId)
                .orElseThrow(() -> new RuntimeException("NOT FOUND MEMBER"));

        return new CustomUserDetails(loginMember);
    }
}
