package com.ssafy.polaris.book.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

	// 200 OK : 성공
	SUCCESS_NEW_ACCESS_TOKEN(200, "Access 토큰 재발급 성공"),
	SUCCESS_NEW_NORMAL_USER(200, "일반 유저 등록 성공"),
	SUCCESS_NEW_COMPANY_USER(200, "회사 유저 등록 성공"),
	SUCCESS_LIBRARY_VIEW(200, "서재 조회 성공"),
	SUCCESS_USER_BOOK_VIEW(200, "사용자 도서 조회 성공"),
	SUCCESS_USER_BOOK_UPDATE(200, "사용자 도서 업데이트 성공"),
	SUCCESS_USER_BOOK_DELETE(200, "사용자 도서 삭제 성공"),
	SUCCESS_SEARCH_USER_BOOK(200, "모든 사용자 도서 조회 성공"),
	SUCCESS_WEEKLY_USER_BOOK_VIEW(200, "사용자 인기 도서 조회 성공"),
	SUCCESS_WEEKLY_USER_BOOK_CREATE(200, "사용자 인기 도서 생성 성공"),
	// 201 CREATED : 새로운 리소스 생성
	SUCCESS_CREATE_USER_BOOK(201, "사용자 도서 생성 성공"),

	// 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
	NO_CONTENT_IN_LIBRARY_VIEW(204, "서재에 도서가 없음"),

	// 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
	FAIL_USER_BOOK_DELETE(400, "잘못된 요청으로 인한 사용자 도서 삭제 실패"),

	// 404 NOT FOUND
	FAIL_NEW_ACCESS_TOKEN(404, "Access 토큰 재발급 실패"),
	FAIL_LIBRARY_VIEW(404, "서재 조회 실패"),
	FAIL_USER_BOOK_UPDATE(404, "사용자 도서 업데이트 실패"),
	FAIL_SEARCH_USER_BOOK(404, "모든 사용자 도서 조회 실패"),
	FAIL_WEEKLY_USER_BOOK_VIEW(404, "사용자 인기 도서 조회 실패"),
	FAIL_LIBRARY_REGIST(404, "사용자 도서 등록 실패");

	private final int status;
	private final String message;
}