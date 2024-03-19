package com.ssafy.artchain.funding.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

	// 200 OK : 성공
	SUCCESS_LIBRARY_VIEW(200, "서재 조회 성공"),

	// 201 CREATED : 새로운 리소스 생성
	SUCCESS_CREATE_USER_BOOK(201, "사용자 도서 생성 성공"),
	SUCCESS_CREATE_FUNDING(201, "새로운 펀딩 생성 성공"),

	// 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
	NO_CONTENT_IN_LIBRARY_VIEW(204, "서재에 도서가 없음"),

	// 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
	FAIL_USER_BOOK_DELETE(400, "잘못된 요청으로 인한 사용자 도서 삭제 실패"),
	FAIL_CREATE_FUNDING(400, "잘못된 요청으로 펀딩이 생성되지 않음"),

	// 404 NOT FOUND
	FAIL_USER_BOOK_VIEW(404, "사용자 도서 조회 실패");


	private final int status;
	private final String message;
}