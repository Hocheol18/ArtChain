package com.ssafy.artchain.pieceowner.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PieceOwnerResponseDto {
    private Long id;
    private Long memberId;
    private String memberName;
    private Long fundingId;
    private String fundingTitle;
    private Long pieceCount;
}
