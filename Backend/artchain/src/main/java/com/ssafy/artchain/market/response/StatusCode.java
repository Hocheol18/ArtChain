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
	// 201 CREATED : 새로운 리소스 생성
	SUCCESS_CREATE_MARKET_TRADE(201, "마켓 조각 판매글 생성 성공"),

	// 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
	NO_CONTENT_IN_SELL_LIST_VIEW(204, "마켓 판매 리스트가 없음"),
	NO_CONTENT_IN_PIECE_TRADE_HISTORY_VIEW(204, "마켓 조각 거래 내역이 없음"),

	// 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
	FAIL_USER_BOOK_DELETE(400, "잘못된 요청으로 인한 사용자 도서 삭제 실패"),

	// 404 NOT FOUND
	FAIL_MARKET_MAIN_VIEW(404, "마켓 메인화면 조회 실패"),
	FAIL_MARKET_SELL_LIST_VIEW(404, "마켓 판매 리스트 조회 실패"),
	FAIL_MARKET_PIECE_TRADE_HISTORY_VIEW(404, "마켓 조각 거래 내역 조회 실패"),
	FAIL_LIBRARY_REGIST(404, "사용자 도서 등록 실패");

	private final int status;
	private final String message;
}