package com.ssafy.artchain.marketlog.repository;

import com.ssafy.artchain.marketlog.entity.MarketLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarketLogRepository extends JpaRepository<MarketLog, Long> {
}
