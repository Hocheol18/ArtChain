package com.ssafy.artchain.coin.service;

import com.ssafy.artchain.coin.dto.response.CoinMainResponseDto;
import com.ssafy.artchain.coin.repository.CoinRepository;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CoinServiceImpl implements CoinService{

    private final CoinRepository coinRepository;
    private final MemberRepository memberRepository;
    @Override
    public CoinMainResponseDto getCoinMain(CustomUserDetails member) {
        Member memberEntity = memberRepository.findById(member.getId())
                .orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
        CoinMainResponseDto dto = CoinMainResponseDto.builder()
                .walletAddress(memberEntity.getWalletAddress())
                .walletBalance(memberEntity.getWalletBalance())
                .build();
        return dto;
    }
}
