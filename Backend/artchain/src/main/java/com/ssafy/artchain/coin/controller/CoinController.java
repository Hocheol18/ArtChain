package com.ssafy.artchain.coin.controller;

import com.ssafy.artchain.coin.defaultResponse.DefaultResponse;
import com.ssafy.artchain.coin.dto.response.CoinMainResponseDto;
import com.ssafy.artchain.coin.service.CoinServiceImpl;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.artchain.coin.defaultResponse.StatusCode.SUCCESS_COIN_MAIN_VIEW;

@RestController
@RequestMapping("/api/coin")
@RequiredArgsConstructor
@Slf4j
public class CoinController {
/*
    Todo:환전하기 메인화면 Get
    Todo:충전한 내역 보내주기
    Todo: 충전하기( Member-walletBalance 올려주고, 내역 받아서 저장 )
    Todo: 환전하기( Member-walletBalance에 환전할 만큼 있는지 확인 후 차감해주고, 내역 받아서 저장 )
    Todo: 환전한 내역 보내주기

     */

    private final CoinServiceImpl coinService;

    @GetMapping
    public ResponseEntity<DefaultResponse<CoinMainResponseDto>> getCoinMain(@AuthenticationPrincipal CustomUserDetails member){
        CoinMainResponseDto dto = coinService.getCoinMain(member);
        return DefaultResponse.toResponseEntity(HttpStatus.OK,SUCCESS_COIN_MAIN_VIEW,dto);
    }


}
