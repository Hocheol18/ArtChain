package com.ssafy.artchain.funding.controller;

import com.ssafy.artchain.funding.dto.*;
import com.ssafy.artchain.funding.response.DefaultResponse;
import com.ssafy.artchain.funding.response.StatusCode;
import com.ssafy.artchain.funding.service.FundingService;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static com.ssafy.artchain.funding.response.StatusCode.*;

@RestController
@RequestMapping("/api/funding")
@RequiredArgsConstructor
@Slf4j
public class FundingController {

    private final FundingService fundingService;

    /**
     * 기업회원이 투자 조달 공고를 등록한다.
     *
     * @param dto
     * @return
     */
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<DefaultResponse<Void>> createFunding(
            @RequestPart("poster") MultipartFile poster, @RequestPart("descriptionImg") MultipartFile descriptionImg, @RequestPart("dto") FundingCreateRequestDto dto, @AuthenticationPrincipal CustomUserDetails member) {
        Long result = fundingService.createFunding(poster, descriptionImg, dto, member);
        if (result.equals(-3L)) {
            return DefaultResponse.emptyResponse(HttpStatus.OK, StatusCode.ALLOW_ONLY_COMPANY);
        } else if (result.equals(-2L)) {
            return DefaultResponse.emptyResponse(HttpStatus.OK, StatusCode.FAIL_SAVE_FILE_TO_S3);
        } else if (result.equals(-1L)) {
            return DefaultResponse.emptyResponse(HttpStatus.OK, StatusCode.FAIL_CREATE_FUNDING);
        } else {
            return DefaultResponse.emptyResponse(HttpStatus.OK, StatusCode.SUCCESS_CREATE_FUNDING);
        }
    }

    /**
     * 펀딩 상세조회
     *
     * @param fundingId
     * @return
     */
    @GetMapping("/{fundingId}")
    public ResponseEntity<DefaultResponse<FundingResponseDto>> getFunding(
            @PathVariable Long fundingId) {
        FundingResponseDto fundingResponseDto = fundingService.getFunding(fundingId);

        if (fundingResponseDto == null) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_VIEW
            );
        } else {
            return DefaultResponse.toResponseEntity(
                    HttpStatus.OK,
                    StatusCode.SUCCESS_FUNDING_VIEW,
                    fundingResponseDto
            );
        }
    }

    /**
     * 펀딩 목록 조회 (필터링 기준: category, status) 각 기준별 전체는 ALL 로 조회
     *
     * @param status
     * @return
     */
    @GetMapping("/list")
    public ResponseEntity<DefaultResponse<FundingListResponseDto>> getFundingByStatus(
            @RequestParam String category, @RequestParam String status, @RequestParam String allowStat, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable
    ) {
        Long totalCount = fundingService.getFundingListByCategoryAndStatusTotalCount(category, status, allowStat);
        List<FundingListItemDto> fundingList = fundingService.getFundingListByCategoryAndStatus(category,
                status, allowStat, pageable);

        if (fundingList.isEmpty()) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.NO_CONTENT_IN_FUNDING_LIST_VIEW
            );
        } else {
            return DefaultResponse.toResponseEntity(
                    HttpStatus.OK,
                    StatusCode.SUCCESS_FUNDING_LIST_VIEW,
                    new FundingListResponseDto(
                            totalCount,
                            fundingList
                    )
            );
        }
    }

    /**
     * 펀딩 승인.
     *
     * @param fundingId
     * @return
     */
    @PutMapping("/{fundingId}/allow/{allowStatus}")
    public ResponseEntity<DefaultResponse<Void>> allowFunding(@PathVariable Long fundingId, @PathVariable String allowStatus, @AuthenticationPrincipal CustomUserDetails member) {
        // -2: 관리자가 아님, -1: 해당하는 펀딩 없음, 0: 이미 승인 또는 거절된 펀딩, 1: 펀딩 승인 또는 거절.
        int result = fundingService.allowFunding(fundingId, allowStatus, member);

        if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_ADMIN
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_VIEW
            );
        } else if (result == 0) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALREADY_CHANGE_FUNDING_ALLOW_STATUS
            );
        } else {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.SUCCESS_CHANGE_FUNDING_ALLOW_STATUS
            );
        }
    }

    /**
     * 펀딩 진행 상태 변경
     *
     * @param fundingId
     * @param progressStatus
     * @param member
     * @return
     */
    @PutMapping("/{fundingId}/progress-status/{progressStatus}")
    public ResponseEntity<DefaultResponse<Void>> updateFundingProgressStatus(
            @PathVariable Long fundingId, @PathVariable String progressStatus, @AuthenticationPrincipal CustomUserDetails member) {
        // -2: 관리자 또는 해당 펀딩의 기업이 아님, -1: 해당하는 펀딩 없음, 0: 해당하는 진행 상태값 없음, 1: 펀딩 진행 상태 수정 완료.
        int result = fundingService.updateFundingProgressStatus(fundingId, progressStatus, member);

        if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_OVER_FUNDING_COMPANY
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_VIEW
            );
        } else if (result == 0) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.NOT_EXIST_PROGRESS_STATUS
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_UPDATE_FUNDING_PROGRESS_STATUS
        );

    }

    /**
     * 펀딩 작품별 공지사항 작성
     *
     * @param fundingId
     * @param dto
     * @return
     */
    @PostMapping("/{fundingId}/notice")
    public ResponseEntity<DefaultResponse<Void>> createNotice(@PathVariable Long fundingId,
                                                              @RequestBody
                                                              FundingNoticeRequestDto dto,
                                                              @AuthenticationPrincipal CustomUserDetails member) {
        // -2: 펀딩 기업이 아님, -1: 해당 펀딩 없음, 0: 작성 실패, 1: 작성 성공
        int result = fundingService.createNotice(fundingId, dto, member);

        if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_FUNDING_COMPANY
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_VIEW
            );
        } else if (result == 0) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_CREATE_FUNDING_NOTICE
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_CREATE_FUNDING_NOTICE
        );
    }

    /**
     * 공지사항 상세보기
     *
     * @param fundingId
     * @param fundingNoticeId
     * @return
     */
    @GetMapping("/{fundingId}/notice/{fundingNoticeId}")
    public ResponseEntity<DefaultResponse<FundingNoticeResponseDto>> getFundingNotice(
            @PathVariable Long fundingId, @PathVariable Long fundingNoticeId) {
        FundingNoticeResponseDto fundingNoticeResponseDto = fundingService.getFundingNotice(
                fundingId,
                fundingNoticeId);

        if (fundingNoticeResponseDto == null) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_NOTICE_VIEW
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                StatusCode.SUCCESS_FUNDING_NOTICE_VIEW,
                fundingNoticeResponseDto
        );
    }

    /**
     * 공지사항 수정 (제목, 내용)
     *
     * @param fundingId
     * @param fundingNoticeId
     * @param dto
     * @return
     */
    @PutMapping("/{fundingId}/notice/{fundingNoticeId}")
    public ResponseEntity<DefaultResponse<Void>> updateFundingNotice(@PathVariable Long fundingId,
                                                                     @PathVariable Long fundingNoticeId, @RequestBody FundingNoticeRequestDto dto,
                                                                     @AuthenticationPrincipal CustomUserDetails member) {
        // -2: 펀딩 기업이 아님, -1: 해당하는 펀딩 공지사항 없거나 해당 펀딩의 공지사항이 아님, 1: 펀딩 공지사항 수정 완료
        int result = fundingService.updateFundingNotice(fundingId, fundingNoticeId, dto, member);

        if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_FUNDING_COMPANY
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_NOTICE_VIEW
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_MODIFY_FUNDING_NOTICE
        );
    }

    /**
     * 공지사항 삭제
     *
     * @param fundingId
     * @param fundingNoticeId
     * @return
     */
    @DeleteMapping("/{fundingId}/notice/{fundingNoticeId}")
    public ResponseEntity<DefaultResponse<Void>> deleteFundingNotice(@PathVariable Long fundingId,
                                                                     @PathVariable Long fundingNoticeId,
                                                                     @AuthenticationPrincipal CustomUserDetails member) {
        // -2: 펀딩 기업이 아님, -1: 해당하는 펀딩 공지사항 없거나 해당 펀딩의 공지사항이 아님, 1: 펀딩 공지사항 삭제 완료
        int result = fundingService.deleteFundingNotice(fundingId, fundingNoticeId, member);

        if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_FUNDING_COMPANY
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_NOTICE_VIEW
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_DELETE_FUNDING_NOTICE
        );
    }


    /**
     * 투자 내역 생성
     *
     * @param fundingId
     * @param dto
     * @return
     */
    @PostMapping("/{fundingId}/invest")
    public ResponseEntity<DefaultResponse<InvestmentIdResponseDto>> createInvestmentLog(
            @PathVariable Long fundingId, @RequestBody
    InvestmentRequestDto dto, @AuthenticationPrincipal CustomUserDetails member) {
        // -2: 개인 회원 아님, -1: 일치하는 펀딩 정보 없음, 0: 모집 중인 펀딩이 아님, 1 이상: 생성된 로그의 식별자 값
        Long result = fundingService.createInvestmentLog(fundingId, dto, member);

        if (result.equals(-2L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.ALLOW_ONLY_USER
            );
        } else if (result.equals(-1L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_FUNDING_VIEW
            );
        } else if (result.equals(0L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.FAIL_INVEST_BY_STATUS
            );
        } else if (result.equals(-3L)) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    FAIL_INVEST_BY_COIN_COUNT
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                StatusCode.SUCCESS_CREATE_INVESTMENT_LOG,
                new InvestmentIdResponseDto(result)
        );
    }

    /**
     * 관리자 페이지 투자 내역 생성
     * 관리자 권한 확인하는 로직 넣을것
     */
    @GetMapping("/permission")
    public ResponseEntity<DefaultResponse<List<FundingPermissionResponseDto>>> getComPermissionList() {
        List<FundingPermissionResponseDto> fundingPermissionResponseDtoList = fundingService.getFundingPermissionList();
        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_FUNDING_PERMISSION_LIST_VIEW, fundingPermissionResponseDtoList);
    }

    /**
     * 나의 투자(직접 투자 + 거래) 내역
     *
     * 진행 중: 지분율, 보유 조각수, 1조각 평단가, 정산일
     * 모집 성공(정산 대기): 지분율, 보유 조각수, 1조각 평단가, 정산일
     * 모집 실패: 구매했던 조각수
     * 정산 완료: 지분율, 보유 조각수, 1조각 평단가, 정산완료일(펀딩 갱신일), 정산 후 받은 코인, 최종수익률
     *
     * @param status
     * @param member
     * @return
     */
    @GetMapping("/my-list/{status}")
    public ResponseEntity<DefaultResponse<MyIntegratedListResponseDto>> getMyIntegratedList(
            @PathVariable String status, @AuthenticationPrincipal CustomUserDetails member
    ) {
        List<MyIntegratedListItemDto> myIntegratedList = fundingService.getMyIntegratedList(status, member);

        if(myIntegratedList == null) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    ALLOW_ONLY_USER
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                SUCCESS_MY_INTEGRATED_LIST_VIEW,
                new MyIntegratedListResponseDto(myIntegratedList)
        );
    }
}
