package com.ssafy.artchain.pieceowner.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

    // 200 OK : 성공
    SUCCESS_GET_PIECE_OWNER_LIST(200, "조각 코인 리스트 조회 성공"),

    // 201 CREATED : 새로운 리소스 생성
    SUCCESS_CREATE_PIECE_OWNER(201, "조각 코인 소유자 생성 성공"),


    // 204 NO CONTENT : 성공하였으나, 반환할 값이 없음


    // 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음


    // 403 FORBIDDEN : 요청에 대한 권한 없음
    GET_PODIUM_ALLOW_ONLY_USER(403, "개인 회원만 포디움 조회 가능");

    // 404 NOT FOUND


    private final int status;
    private final String message;
}