package com.ssafy.artchain.pieceowner.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class PieceOwnerListResponseDto {
    private final List<PieceOwnerResponseDto> pieceOwnerList;

    public PieceOwnerListResponseDto(List<PieceOwnerResponseDto> pieceOwnerList) {
        this.pieceOwnerList = pieceOwnerList;
    }
}
