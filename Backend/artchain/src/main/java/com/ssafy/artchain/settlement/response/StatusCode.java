package com.ssafy.artchain.settlement.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

    // 200 OK : 성공
    SUCCESS_SETTLEMENT_LIST_VIEW(200, "정산 목록 조회 성공"),
    SUCCESS_SETTLEMENT_VIEW(200, "정산 상세 조회 성공"),

    // 201 CREATED : 새로운 리소스 생성
    SUCCESS_CREATE_SETTLEMENT(201, "정산 요청 생성 성공"),


    // 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
    NO_CONTENT_IN_SETTLEMENT_LIST_VIEW(204, "정산 신청 목록 없음"),
    SUCCESS_UPDATE_STATUS(204, "상태 변경 성공"),
    SUCCESS_DELETE_SETTLEMENT(204, "삭제 성공"),

    // 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
    STATUS_IS_NOT_POSSIBLE_SETTLEMENT(400, "정산 요청 가능한 펀딩 상태 아님"),
    FAIL_CREATE_SETTLEMENT(400, "정산 요청 생성 실패"),
    NOT_EXIST_STATUS(400, "해당하는 상태 값이 없음"),

    // 403 FORBIDDEN : 요청에 대한 권한 없음
    ALLOW_ONLY_COMPANY(403, "기업 회원에 허용된 요청"),
    ALLOW_ONLY_FUNDING_COMPANY(403, "펀딩 기업에 허용된 요청"),
    ALLOW_OVER_FUNDING_COMPANY(403, "펀딩 기업 또는 관리자에 허용된 요청"),
    ALLOW_ONLY_ADMIN(403, "관리자에 허용된 요청"),

    // 404 NOT FOUND
    FAIL_FUNDING_VIEW(404, "펀딩 조회 실패"),
    FAIL_SETTLEMENT_VIEW(404, "정산 조회 실패"),

    // 500 INTERNAL SERVER ERROR
    FAIL_SAVE_FILE_TO_S3(500, "S3 업로드 실패");


    private final int status;
    private final String message;
}