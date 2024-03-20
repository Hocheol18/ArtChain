package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.connectentity.InvestmentLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestmentLogRepository extends JpaRepository<InvestmentLog, Long> {

}
