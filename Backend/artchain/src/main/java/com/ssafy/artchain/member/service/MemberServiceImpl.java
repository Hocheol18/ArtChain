package com.ssafy.artchain.member.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Slf4j
// @Transactional 어노 테이션이 없는 메소드는 읽기 전용
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService{
}
