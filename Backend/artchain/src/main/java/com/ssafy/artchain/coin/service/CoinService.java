package com.ssafy.artchain.coin.service;

import com.ssafy.artchain.coin.dto.request.CoinRegistRequestDto;
import com.ssafy.artchain.coin.dto.response.CoinHistoryResponseDto;
import com.ssafy.artchain.coin.dto.response.CoinMainResponseDto;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CoinService {
    CoinMainResponseDto getCoinMain(CustomUserDetails member);
    void postCoinCharge(CustomUserDetails member, CoinRegistRequestDto coinRegistRequestDto) throws Exception;
    List<CoinHistoryResponseDto> getCoinChargeList(CustomUserDetails member, String inoutFlag, Pageable pageable);
}
