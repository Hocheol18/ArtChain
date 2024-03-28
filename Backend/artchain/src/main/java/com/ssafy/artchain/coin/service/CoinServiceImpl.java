package com.ssafy.artchain.coin.service;

import com.ssafy.artchain.coin.dto.request.CoinRegistRequestDto;
import com.ssafy.artchain.coin.dto.response.CoinHistoryResponseDto;
import com.ssafy.artchain.coin.dto.response.CoinMainResponseDto;
import com.ssafy.artchain.coin.entity.Coin;
import com.ssafy.artchain.coin.entity.InoutFlag;
import com.ssafy.artchain.coin.repository.CoinRepository;
import com.ssafy.artchain.market.dto.MarketPieceTradeHistoryResponseDto;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
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
    public void postCoinCharge(CustomUserDetails member, CoinRegistRequestDto coinRegistRequestDto) throws Exception{
        try {
            Member memberEntity = memberRepository.findById(member.getId())
                    .orElseThrow(() -> new NoSuchElementException("MEMBER NOT FOUND"));
//        충전이라면 여기
            if (coinRegistRequestDto.getInoutFlag().equals(InoutFlag.충전)) {
//        충전한 코인 개수만큼 원래 있던 잔고에 더해서 save
                BigDecimal temp = coinRegistRequestDto.getCoinAmount().add(memberEntity.getWalletBalance());
                memberEntity.updateWalletBalance(temp);
            } else if (coinRegistRequestDto.getInoutFlag().equals(InoutFlag.환전)) {
//            기존 WalletBalance가 뺄 Coin개수보다 적으면 -1
                if (memberEntity.getWalletBalance().subtract(coinRegistRequestDto.getCoinAmount())
                        .compareTo(BigDecimal.ZERO) == -1) {
                    throw new Exception("환전할 코인이 적거나 없음!!");
//                에러처리
                }
//            0이되거나 아니면 남는다면 업데이트
                else {
                    BigDecimal temp = memberEntity.getWalletBalance().subtract(coinRegistRequestDto.getCoinAmount());
                    memberEntity.updateWalletBalance(temp);
                }
            }
            memberRepository.save(memberEntity);

            Coin coin = Coin.builder()
                    .memberId(member.getId())
                    .coinAmount(coinRegistRequestDto.getCoinAmount())
                    .transactionHash(coinRegistRequestDto.getTransactionHash())
                    .inoutFlag(coinRegistRequestDto.getInoutFlag())
                    .currencyFlow(coinRegistRequestDto.getCurrencyFlow())
                    .build();

            coinRepository.save(coin);
        } catch (DataIntegrityViolationException e) {
            log.debug("등록 오류");
            throw new Exception("등록 오류!");
        }
    }

    @Override
    public List<CoinHistoryResponseDto> getCoinChargeList(CustomUserDetails member, String inoutFlag, Pageable pageable) {
        Long memberId = member.getId();
        Page<Coin> list = coinRepository.findAllByMemberIdAndInoutFlag(memberId, InoutFlag.valueOf(inoutFlag), pageable);
        List<CoinHistoryResponseDto> dtoList = list.getContent()
                .stream()
                .map(CoinHistoryResponseDto::new)
                .toList();
        return dtoList;
    }
}
