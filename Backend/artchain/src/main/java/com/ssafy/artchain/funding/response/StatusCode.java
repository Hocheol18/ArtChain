package com.ssafy.artchain.funding.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusCode {

    // 200 OK : 성공
    SUCCESS_FUNDING_VIEW(200, "펀딩 조회 성공"),
    SUCCESS_FUNDING_LIST_VIEW(200, "펀딩 목록 조회 성공"),
    SUCCESS_FUNDING_NOTICE_VIEW(200, "펀딩 공지사항 조회 성공"),

    // 201 CREATED : 새로운 리소스 생성
    SUCCESS_CREATE_FUNDING(201, "새로운 펀딩 생성 성공"),
    SUCCESS_CREATE_FUNDING_NOTICE(201, "새로운 펀딩 공지사항 생성 성공"),
    SUCCESS_CREATE_INVESTMENT_LOG(201, "새로운 투자 내역 생성 성공"),

    // 204 NO CONTENT : 성공하였으나, 반환할 값이 없음
    NO_CONTENT_IN_FUNDING_LIST_VIEW(204, "해당 작품 분야에 해당 상태값을 가지는 펀딩이 없음"),
    SUCCESS_CHANGE_FUNDING_ALLOW_STATUS(204, "펀딩 승인 또는 거절 완료"),
    SUCCESS_UPDATE_FUNDING_PROGRESS_STATUS(204, "펀딩 진행 상태 수정 완료"),
    SUCCESS_MODIFY_FUNDING_NOTICE(204, "펀딩 공지사항 수정 완료"),
    SUCCESS_DELETE_FUNDING_NOTICE(204, "펀딩 공지사항 삭제 완료"),

    // 400 BAD REQUEST : 잘못된 요청 - 요청 구문이 잘못되었음
    FAIL_CREATE_FUNDING(400, "잘못된 요청으로 펀딩이 생성되지 않음"),
    ALREADY_CHANGE_FUNDING_ALLOW_STATUS(400, "이미 승인 또는 거절된 펀딩"),
    NOT_EXIST_PROGRESS_STATUS(400, "해당하는 진행 상태 값이 없음"),
    FAIL_CREATE_FUNDING_NOTICE(400, "잘못된 요청으로 펀딩 공지사항이 생성되지 않음"),
    FAIL_INVEST_BY_STATUS(400, "펀딩 모집이 진행 중인 경우 투자 가능"),

    // 403 FORBIDDEN : 요청에 대한 권한 없음
    ALLOW_ONLY_COMPANY(403, "기업 회원에 허용된 요청"),
    ALLOW_ONLY_ADMIN(403, "관리자에 허용된 요청"),
    ALLOW_ONLY_FUNDING_COMPANY(403, "펀딩 기업에 허용된 요청"),
    ALLOW_OVER_FUNDING_COMPANY(403, "펀딩 기업 또는 관리자에 허용된 요청"),
    ALLOW_ONLY_USER(403, "개인 회원만 투자 가능"),

    // 404 NOT FOUND
    FAIL_FUNDING_VIEW(404, "펀딩 조회 실패"),
    FAIL_FUNDING_NOTICE_VIEW(404, "펀딩 공지사항 조회 실패"),

    // 500 INTERNAL SERVER ERROR
    FAIL_SAVE_FILE_TO_S3(500, "S3 업로드 실패");


    private final int status;
    private final String message;
}