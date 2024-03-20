package com.ssafy.artchain.funding.entity;

public enum FundingProgressStatus {
    RECRUITMENT_STATUS, // 모집 중
    PENDING_SETTLEMENT, // 정산 대기
    SETTLED, // 정산 완료
    RECRUITMENT_FAILED, // 모집 실패
}
