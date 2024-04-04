package com.ssafy.artchain.pieceowner.controller;

import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.pieceowner.dto.PieceOwnerListResponseDto;
import com.ssafy.artchain.pieceowner.dto.PieceOwnerResponseDto;
import com.ssafy.artchain.pieceowner.response.DefaultResponse;
import com.ssafy.artchain.pieceowner.response.StatusCode;
import com.ssafy.artchain.pieceowner.service.PieceOwnerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pieceowner")
@RequiredArgsConstructor
@Slf4j
public class PieceOwnerController {

    private final PieceOwnerService pieceOwnerService;

    /**
     * 개인 회원 본인의 보유한 조각에 대해서 보유량에 따른 펀딩 3개 확인.
     * 단, 정산 대기 중인 펀딩에 대해서만 조회.
     * @param member
     * @return
     */
    @GetMapping("/podium")
    public ResponseEntity<DefaultResponse<PieceOwnerListResponseDto>> getPieceCountPodiumByMember(@AuthenticationPrincipal CustomUserDetails member) {
        List<PieceOwnerResponseDto> pieceOwnerList = pieceOwnerService.getPieceCountPodiumByMember(member);

        if(pieceOwnerList == null) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    StatusCode.GET_PODIUM_ALLOW_ONLY_USER
            );
        }

        return DefaultResponse.toResponseEntity(
                HttpStatus.OK,
                StatusCode.SUCCESS_GET_PIECE_OWNER_LIST,
                new PieceOwnerListResponseDto(pieceOwnerList)
        );
    }

}
