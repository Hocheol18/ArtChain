package com.ssafy.artchain.market.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

    // 200 OK : 성공
    SUCCESS_MARKET_MAIN_VIEW(200, "마켓 메인화면 조회 성공"),
    SUCCESS_MARKET_SELL_LIST_VIEW(200, "마켓 판매 리스트 조회 성공"),
    SUCCESS_MARKET_PIECE_TRADE_HISTORY_VIEW(200, "마켓 조각 거래 내역 조회 성공"),
    SUCCESS_MARKET_DETAIL_VIEW(200, "마켓 판매글 상세 조회 성공"),
    SUCCESS_MARKET_REGIST_FORM_VIEW(200, "마켓 판매글 작성시 내가 투자한 상품 이름 목록 조회 성공"),
    // 201 CREATED : 새로운 리소스 생성
    SUCCESS_CREATE_MARKET_TRADE(201, "마켓 조각 판매글 생성 성공"),

    // 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
    NO_CONTENT_IN_SELL_LIST_VIEW(204, "마켓 판매 리스트가 없음"),
    NO_CONTENT_IN_PIECE_TRADE_HISTORY_VIEW(204, "마켓 조각 거래 내역이 없음"),
    SUCCESS_BUY_MARKET_ITEM(204, "마켓 조각 거래 성공"),

    // 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
    STATUS_IS_NOT_POSSIBLE_BUY(400, "구매 가능한 상태가 아님"),

    // 403 FORBIDDEN : 요청에 대한 권한 없음
    ALLOW_ONLY_USER(403, "개인 회원만 거래 가능"),

    // 404 NOT FOUND
    FAIL_MARKET_MAIN_VIEW(404, "마켓 메인화면 조회 실패"),
    FAIL_MARKET_SELL_LIST_VIEW(404, "마켓 판매 리스트 조회 실패"),
    FAIL_MARKET_PIECE_TRADE_HISTORY_VIEW(404, "마켓 조각 거래 내역 조회 실패"),
    FAIL_FIND_MARKET_ITEM(404, "마켓에 해당 판매글 없음"),
    FAIL_SELLER_NOT_OWNER(404, "판매자가 해당 조각을 보유하지 않거나 보유 수량 부족");

    private final int status;
    private final String message;
}