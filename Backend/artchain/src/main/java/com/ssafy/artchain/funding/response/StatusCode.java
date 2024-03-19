package com.ssafy.artchain.funding.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

    // 200 OK : 성공
    SUCCESS_FUNDING_VIEW(200, "펀딩 조회 성공"),
    SUCCESS_FUNDING_LIST_VIEW(200, "펀딩 목록 조회 성공"),

    // 201 CREATED : 새로운 리소스 생성
    SUCCESS_CREATE_FUNDING(201, "새로운 펀딩 생성 성공"),

    // 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
    NO_CONTENT_IN_FUNDING_LIST_VIEW(204, "해당 작품 분야에 해당 상태값을 가지는 펀딩이 없음"),
    SUCCESS_ALLOW_FUNDING(204, "펀딩 승인 완료"),

    // 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
    FAIL_CREATE_FUNDING(400, "잘못된 요청으로 펀딩이 생성되지 않음"),
    ALREADY_ALLOWED_FUNDING(400, "이미 승인된 펀딩"),

    // 404 NOT FOUND
    FAIL_FUNDING_VIEW(404, "펀딩 조회 실패");


    private final int status;
    private final String message;
}