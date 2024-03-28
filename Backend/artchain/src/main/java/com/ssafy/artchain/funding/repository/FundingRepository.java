package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.dto.FundingPermissionResponseDto;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundingRepository extends JpaRepository<Funding, Long> {

    Page<Funding> findAllByProgressStatusInAndIsAllowIn(List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus, Pageable pageable);

    List<Funding> findAllByProgressStatusInAndIsAllowIn(List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus);

    Page<Funding> findAllByCategoryAndProgressStatusInAndIsAllowIn(String category,
                                                                   List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus, Pageable pageable);

    Page<Funding> findAllByProgressStatusIn(List<FundingProgressStatus> progressStatus, Pageable pageable);

    Page<Funding> findAllByProgressStatusInAndCategory(List<FundingProgressStatus> progressStatus, String category, Pageable pageable);

    @Query("select new com.ssafy.artchain.funding.dto.FundingPermissionResponseDto(f.id, f.entId, f.name, m.name) " +
            "from Funding f join Member m on f.entId = m.id " +
            "where f.isAllow is null ")
    List<FundingPermissionResponseDto> findAllByIsAllowIsNullAndComName();
}
