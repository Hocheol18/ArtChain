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
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
public class PieceOwnerServiceImpl implements PieceOwnerService {

    private final PieceOwnerRepository pieceOwnerRepository;

    @Override
    public List<PieceOwnerResponseDto> getPieceCountPodiumByMember(CustomUserDetails member) {
        if (member.getAuthorities().stream().noneMatch(au -> au.getAuthority().equals("ROLE_USER"))) {
            return null;
        }

        Pageable podium = PageRequest.of(0, 3);

        // 포디움
        List<PieceOwnerResponseDto> podiumList = pieceOwnerRepository.findTop3ByMemberIdAndFundingProgressStatus(member.getId(), FundingProgressStatus.PENDING_SETTLEMENT, podium);

        // 포디움 외 나머지 모집 성공(정산 대기) 상태 펀딩의 조각량에 대해 처리
        List<Long> excludeFundingIdList = podiumList.stream()
                .map(PieceOwnerResponseDto::getFundingId)
                .toList();
        Long etcTotalPiece = null;
        if (!excludeFundingIdList.isEmpty()) {
            etcTotalPiece = pieceOwnerRepository.sumPieceCountByMemberIdAndFundingProgressStatusExcludingFundingIds(member.getId(), FundingProgressStatus.PENDING_SETTLEMENT, excludeFundingIdList);
        }

        return Stream.concat(
                List.copyOf(podiumList).stream(),
                Stream.of(new PieceOwnerResponseDto(null, member.getId(), member.getNickname(), null, "ETC", etcTotalPiece == null ? 0L : etcTotalPiece))
        ).toList();
    }
}
