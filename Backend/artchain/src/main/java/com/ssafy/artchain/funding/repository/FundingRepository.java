package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.dto.FundingCarouselItemDto;
import com.ssafy.artchain.funding.dto.FundingMainPageItemDto;
import com.ssafy.artchain.funding.dto.FundingPermissionResponseDto;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.member.dto.response.MemberMyTradeDropDownResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundingRepository extends JpaRepository<Funding, Long> {

    Page<Funding> findAllByProgressStatusInAndIsAllowIn(List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus, Pageable pageable);

    List<Funding> findAllByProgressStatusInAndIsAllowIn(List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus);

    Page<Funding> findAllByCategoryAndProgressStatusInAndIsAllowIn(String category,
                                                                   List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus, Pageable pageable);

    List<Funding> findAllByCategoryAndProgressStatusInAndIsAllowIn(String category,
                                                                   List<FundingProgressStatus> progressStatus, List<Boolean> allowStatus);

    Page<Funding> findAllByProgressStatusIn(List<FundingProgressStatus> progressStatus, Pageable pageable);

    Page<Funding> findAllByProgressStatusInAndCategory(List<FundingProgressStatus> progressStatus, String category, Pageable pageable);

    @Query("select new com.ssafy.artchain.funding.dto.FundingPermissionResponseDto(f.id, f.entId, f.name, m.name) " +
            "from Funding f join Member m on f.entId = m.id " +
            "where f.isAllow is null ")
    List<FundingPermissionResponseDto> findAllByIsAllowIsNullAndComName();

    @Query("select new com.ssafy.artchain.member.dto.response.MemberMyTradeDropDownResponseDto(f.id, f.name, f.poster) " +
            "from Funding f where f.id in ( select m.fundingId as id from Market m where m.sellerId = :memberId or m.buyerId = :memberId) " +
            "Or f.id in ( select i.funding.id as id from InvestmentLog i where i.member.id = :memberId)")
    List<MemberMyTradeDropDownResponseDto> findAllByEntIdOrSellerIdOrBuyerId(Long memberId);

    @Query(value = "select " +
            "new com.ssafy.artchain.funding.dto.FundingCarouselItemDto ( " +
            "fd.id, " +
            "fd.poster, " +
            "fd.name ) " +
            "from Funding fd " +
            "where fd.progressStatus = :fundingProgressStatus " +
            "order by fd.id desc"
    )
    List<FundingCarouselItemDto> findTop4ByFundingProgressStatus(@Param("fundingProgressStatus") FundingProgressStatus fundingProgressStatus, Pageable pageable);

    @Query(value = "select " +
            "new com.ssafy.artchain.funding.dto.FundingMainPageItemDto ( " +
            "fd.id, " +
            "fd.poster, " +
            "fd.name, " +
            "fd.goalCoinCount, " +
            "fd.nowCoinCount ) " +
            "from Funding fd " +
            "where fd.progressStatus = :fundingProgressStatus " +
            "order by fd.recruitEnd asc, fd.id desc"
    )
    List<FundingMainPageItemDto> findTop2ByFundingProgressStatus(@Param("fundingProgressStatus") FundingProgressStatus fundingProgressStatus, Pageable pageable);
}
