package com.ssafy.artchain.funding.controller;

import com.ssafy.artchain.funding.dto.FundingCreateRequestDto;
import com.ssafy.artchain.funding.dto.FundingListResponseDto;
import com.ssafy.artchain.funding.dto.FundingNoticeRequestDto;
import com.ssafy.artchain.funding.dto.FundingNoticeResponseDto;
import com.ssafy.artchain.funding.dto.FundingResponseDto;
import com.ssafy.artchain.funding.dto.InvestmentIdResponseDto;
import com.ssafy.artchain.funding.dto.InvestmentRequestDto;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.response.DefaultResponse;
import com.ssafy.artchain.funding.response.StatusCode;
import com.ssafy.artchain.funding.service.FundingService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    @PostMapping
    public ResponseEntity<DefaultResponse<Void>> createFunding(
        @RequestBody FundingCreateRequestDto dto) {
        int result = fundingService.createFunding(dto);
        if (result == -1) {
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
        @RequestParam String category, @RequestParam String status
    ) {
        List<Funding> fundingList = fundingService.getFundingListByCategoryAndStatus(category,
            status);

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
                    fundingList
                        .stream()
                        .map(FundingResponseDto::new)
                        .collect(Collectors.toList())
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
    @PutMapping("/{fundingId}/allow")
    public ResponseEntity<DefaultResponse<Void>> allowFunding(@PathVariable Long fundingId) {
        // -1: 해당하는 펀딩 없음, 0: 이미 승인된 펀딩, 1: 펀딩 승인.
        int result = fundingService.allowFunding(fundingId);

        if (result == -1) {
            return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.FAIL_FUNDING_VIEW
            );
        } else if (result == 0) {
            return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.ALREADY_ALLOWED_FUNDING
            );
        } else {
            return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.SUCCESS_ALLOW_FUNDING
            );
        }
    }

    @PutMapping("/{fundingId}/progress-status/{progressStatus}")
    public ResponseEntity<DefaultResponse<Void>> updateFundingProgressStatus(
        @PathVariable Long fundingId, @PathVariable String progressStatus) {
        // -1: 해당하는 펀딩 없음, 1: 펀딩 진행 상태 수정 완료.
        int result = fundingService.updateFundingProgressStatus(fundingId, progressStatus);

        if (result == -1) {
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
        FundingNoticeRequestDto dto) {
        // -1: 해당 펀딩 없음, 0: 작성 실패, 1: 작성 성공
        int result = fundingService.createNotice(fundingId, dto);

        if (result == -1) {
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
        @PathVariable Long fundingNoticeId, @RequestBody FundingNoticeRequestDto dto) {
        // -1: 해당하는 펀딩 공지사항 없거나 해당 펀딩의 공지사항이 아님, 1: 펀딩 공지사항 수정 완료
        int result = fundingService.updateFundingNotice(fundingId, fundingNoticeId, dto);

        if (result == -1) {
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
        @PathVariable Long fundingNoticeId) {
        // -1: 해당하는 펀딩 공지사항 없거나 해당 펀딩의 공지사항이 아님, 1: 펀딩 공지사항 삭제 완료
        int result = fundingService.deleteFundingNotice(fundingId, fundingNoticeId);

        if (result == -1) {
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
    InvestmentRequestDto dto) {
        // -2: 일치하는 회원 정보 없음, -1: 일치하는 펀딩 정보 없음, 1 이상: 생성된 로그의 식별자 값
        Long result = fundingService.createInvestmentLog(fundingId, dto);

        if (result.equals(-2L)) {
            return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.NOT_FOUND_MEMBER_INFO
            );
        } else if (result.equals(-1L)) {
            return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                StatusCode.FAIL_FUNDING_VIEW
            );
        }

        return DefaultResponse.toResponseEntity(
            HttpStatus.OK,
            StatusCode.SUCCESS_CREATE_INVESTMENT_LOG,
            new InvestmentIdResponseDto(result)
        );
    }
}
