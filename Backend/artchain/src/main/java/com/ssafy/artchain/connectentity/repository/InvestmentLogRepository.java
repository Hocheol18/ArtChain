package com.ssafy.artchain.connectentity.repository;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.funding.entity.Funding;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestmentLogRepository extends JpaRepository<InvestmentLog, Long> {

    List<InvestmentLog> findAllByFunding(Funding funding);

    @Query("SELECT f.name FROM InvestmentLog il JOIN il.member m JOIN il.funding f WHERE m.id = :memberId")
    List<String> findFundingNamesByMemberId(@Param("memberId") Long memberId);
}
