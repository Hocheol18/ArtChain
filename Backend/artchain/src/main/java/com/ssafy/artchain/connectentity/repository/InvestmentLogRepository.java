package com.ssafy.artchain.connectentity.repository;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.funding.entity.Funding;
import java.util.List;

import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.market.dto.MarketRegistFundingNameResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestmentLogRepository extends JpaRepository<InvestmentLog, Long> {

    List<InvestmentLog> findAllByFunding(Funding funding);

    @Query("SELECT new com.ssafy.artchain.market.dto.MarketRegistFundingNameResponseDto(f.id, f.name, p.pieceCount) " +
            "FROM InvestmentLog il JOIN il.member m " +
            "JOIN il.funding f " +
            "JOIN PieceOwner p On m.id = p.memberId " +
            "WHERE m.id = :memberId and f.progressStatus = :state")
    List<MarketRegistFundingNameResponseDto> findFundingNamesByMemberId(@Param("memberId") Long memberId, FundingProgressStatus state);
}
