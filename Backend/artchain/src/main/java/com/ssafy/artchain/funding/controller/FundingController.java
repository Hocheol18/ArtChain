package com.ssafy.artchain.funding.controller;

import com.ssafy.artchain.funding.dto.FundingCreateRequestDto;
import com.ssafy.artchain.funding.dto.FundingListResponseDto;
import com.ssafy.artchain.funding.dto.FundingResponseDto;
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

    @PutMapping("/{fundingId}")
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
}
