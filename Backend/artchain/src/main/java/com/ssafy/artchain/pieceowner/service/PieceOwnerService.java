package com.ssafy.artchain.pieceowner.service;

import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.pieceowner.dto.PieceOwnerResponseDto;

import java.util.List;

public interface PieceOwnerService {

    List<PieceOwnerResponseDto> getPieceCountPodiumByMember(CustomUserDetails member);
}
