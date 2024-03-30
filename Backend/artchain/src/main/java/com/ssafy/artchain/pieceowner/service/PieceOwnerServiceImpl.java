package com.ssafy.artchain.pieceowner.service;


import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.pieceowner.dto.PieceOwnerResponseDto;
import com.ssafy.artchain.pieceowner.repository.PieceOwnerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PieceOwnerServiceImpl implements PieceOwnerService {

    private final PieceOwnerRepository pieceOwnerRepository;

    @Override
    public List<PieceOwnerResponseDto> getPieceCountPodiumByMember(CustomUserDetails member) {
        if(member.getAuthorities().stream().noneMatch(au -> au.getAuthority().equals("ROLE_USER"))) {
            return null;
        }

        Pageable podium = PageRequest.of(0, 3);

        return pieceOwnerRepository.findTop3ByMemberIdAndFundingProgressStatus(member.getId(), FundingProgressStatus.PENDING_SETTLEMENT, podium);
    }
}
