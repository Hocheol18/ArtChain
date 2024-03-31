package com.ssafy.artchain.settlement.controller;

import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.settlement.dto.*;
import com.ssafy.artchain.settlement.response.DefaultResponse;
import com.ssafy.artchain.settlement.response.StatusCode;
import com.ssafy.artchain.settlement.service.SettlementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/settlement")
@RequiredArgsConstructor
@Slf4j
public class SettlementController {

    private final SettlementService settlementService;

    /**
     * 기업 회원이 정산 대기 중인 펀딩에 대해 정산 요청한다.
     *
     * @param file
     * @param dto
     * @param member
     * @return
     */
    @PostMapping
    public ResponseEntity<DefaultResponse<SettlementIdResponseDto>> createSettlementRequest(
            @RequestPart("file") MultipartFile file, @RequestPart("dto") SettlementRequestDto dto, @AuthenticationPrincipal CustomUserDetails member
    ) {
        Long result = settlementService.createSettlementRequest(file, dto, member);

        if (result.equals(-5L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_COMPANY
            );
        } else if (result.equals(-4L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_VIEW
            );
        } else if (result.equals(-3L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_FUNDING_COMPANY
            );
        } else if (result.equals(-2L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.STATUS_IS_NOT_POSSIBLE_SETTLEMENT
            );
        } else if (result.equals(-1L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_SAVE_FILE_TO_S3
            );
        } else if (result.equals(0L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_CREATE_SETTLEMENT
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                StatusCode.SUCCESS_CREATE_SETTLEMENT,
                new SettlementIdResponseDto(result)
        );
    }

    /**
     * 관리자가 신청된(승인 및 거절되지 않은 신청 상태) 정산 요청의 목록을 조회한다.
     *
     * @param member
     * @return
     */
    @GetMapping("/list")
    public ResponseEntity<DefaultResponse<SettlementListResponseDto>> getSettlementRequestList(@AuthenticationPrincipal CustomUserDetails member) {
        List<SettlementListItemDto> settlementList = settlementService.getSettlementRequestList(member);

        if (settlementList == null) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_ADMIN
            );
        } else if (settlementList.isEmpty()) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.NO_CONTENT_IN_SETTLEMENT_LIST_VIEW
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                StatusCode.SUCCESS_SETTLEMENT_LIST_VIEW,
                new SettlementListResponseDto(settlementList)
        );
    }

    /**
     * 관리자 또는 해당 정산을 신청한 기업이 상세 조회.
     *
     * @param settlementId
     * @param member
     * @return
     */
    @GetMapping("/{settlementId}")
    public ResponseEntity<DefaultResponse<SettlementResponseDto>> getSettlement(
            @PathVariable Long settlementId, @AuthenticationPrincipal CustomUserDetails member
    ) {
        SettlementResponseDto settlementResponseDto = settlementService.getSettlement(settlementId, member);
        if (settlementResponseDto == null) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_SETTLEMENT_VIEW
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                StatusCode.SUCCESS_SETTLEMENT_VIEW,
                settlementResponseDto
        );
    }

    /**
     * 관리자가 정산 신청건에 대하여 승인 또는 거절.
     *
     * @param settlementId
     * @param status
     * @param member
     * @return
     */
    @PutMapping("/{settlementId}/allow/{status}")
    public ResponseEntity<DefaultResponse<Void>> updateSettlementStatus(
            @PathVariable Long settlementId, @PathVariable String status, @AuthenticationPrincipal CustomUserDetails member
    ) {
        int result = settlementService.updateSettlementStatus(settlementId, status, member);

        if (result == -3) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_ADMIN
            );
        } else if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_SETTLEMENT_VIEW
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.NOT_EXIST_STATUS
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_UPDATE_STATUS
        );
    }

    /**
     * 관리자가 정산 신청건을 삭제한다.
     *
     * @param settlementId
     * @param member
     * @return
     */
    @DeleteMapping("/{settlementId}")
    public ResponseEntity<DefaultResponse<Void>> deleteSettlement(
            @PathVariable Long settlementId, @AuthenticationPrincipal CustomUserDetails member
    ) {
        int result = settlementService.deleteSettlement(settlementId, member);

        if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_ADMIN
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_SETTLEMENT_VIEW
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_DELETE_SETTLEMENT
        );
    }
}
