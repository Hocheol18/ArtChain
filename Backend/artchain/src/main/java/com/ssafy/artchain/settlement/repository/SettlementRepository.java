package com.ssafy.artchain.settlement.repository;

import com.ssafy.artchain.settlement.dto.SettlementListItemDto;
import com.ssafy.artchain.settlement.dto.SettlementResponseDto;
import com.ssafy.artchain.settlement.entity.Settlement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SettlementRepository extends JpaRepository<Settlement, Long> {
    @Query(value = "select " +
            "new com.ssafy.artchain.settlement.dto.SettlementListItemDto ( " +
            "st.id, " +
            "mb.name," +
            "fd.name," +
            "st.settlementPrice," +
            "st.status ) " +
            "from Settlement st " +
            "join Member mb on st.entId = mb.id " +
            "join Funding fd on st.fundingId = fd.id " +
            "where st.status = :status "
    )
    List<SettlementListItemDto> getSettlementList(@Param("status") String status);

    @Query(value = "select " +
            "new com.ssafy.artchain.settlement.dto.SettlementResponseDto ( " +
            "st.id, " +
            "mb.id, " +
            "mb.name," +
            "fd.id," +
            "fd.name," +
            "st.settlementPrice," +
            "st.returnRate," +
            "st.depositeDate," +
            "st.settlementFile," +
            "st.status ) " +
            "from Settlement st " +
            "join Member mb on st.entId = mb.id " +
            "join Funding fd on st.fundingId = fd.id " +
            "where st.id = :settlementId "
    )
    SettlementResponseDto getSettlement(@Param("settlementId") Long settlementId);

    @Query("SELECT st.returnRate FROM Settlement st WHERE st.fundingId = :fundingId")
    Integer findReturnRateByFundingId(@Param("fundingId") Long fundingId);
}
