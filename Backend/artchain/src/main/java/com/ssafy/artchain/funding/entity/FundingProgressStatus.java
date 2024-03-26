package com.ssafy.artchain.funding.entity;

public enum FundingProgressStatus {
    BEFORE_RECRUITMENT, // 모집 시작 전
    RECRUITMENT_STATUS, // 모집 중
    PENDING_SETTLEMENT, // 정산 대기(== 모집 성공)
    SETTLED, // 정산 완료
    RECRUITMENT_FAILED, // 모집 실패
}
