package com.ssafy.artchain.coin.service;

import com.ssafy.artchain.coin.dto.request.CoinRegistRequestDto;
import com.ssafy.artchain.coin.dto.response.CoinMainResponseDto;
import com.ssafy.artchain.member.dto.CustomUserDetails;

public interface CoinService {
    CoinMainResponseDto getCoinMain(CustomUserDetails member);
    void postCoinCharge(CustomUserDetails member, CoinRegistRequestDto coinRegistRequestDto);
}
