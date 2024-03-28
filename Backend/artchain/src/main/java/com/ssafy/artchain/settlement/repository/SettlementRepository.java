package com.ssafy.artchain.settlement.repository;

import com.ssafy.artchain.settlement.dto.SettlementListItemDto;
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
}
