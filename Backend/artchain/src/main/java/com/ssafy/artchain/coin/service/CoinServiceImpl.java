package com.ssafy.artchain.coin.service;

import com.ssafy.artchain.coin.dto.request.CoinRegistRequestDto;
import com.ssafy.artchain.coin.dto.response.CoinMainResponseDto;
import com.ssafy.artchain.coin.entity.Coin;
import com.ssafy.artchain.coin.repository.CoinRepository;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
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

    @Override
    @Transactional
    public void postCoinCharge(CustomUserDetails member, CoinRegistRequestDto coinRegistRequestDto) {
        Member memberEntity = memberRepository.findById(member.getId())
                .orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
//        충전한 코인 개수만큼 원래 있던 잔고에 더해서 save
        BigDecimal temp = coinRegistRequestDto.getCoinAmount().add(memberEntity.getWalletBalance());
        memberEntity.updateWalletBalance(temp);
        memberRepository.save(memberEntity);

        Coin coin = Coin.builder()
                .memberId(member.getId())
                .coinAmount(coinRegistRequestDto.getCoinAmount())
                .processAt(coinRegistRequestDto.getProcessAt())
                .transactionHash(coinRegistRequestDto.getTransactionHash())
                .inoutFlag(coinRegistRequestDto.getInoutFlag())
                .currencyFlow(coinRegistRequestDto.getCurrencyFlow())
                .build();

        coinRepository.save(coin);
    }
}
