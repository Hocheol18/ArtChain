package com.ssafy.artchain.marketlog.repository;

import com.ssafy.artchain.marketlog.entity.MarketLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarketLogRepository extends JpaRepository<MarketLog, Long> {
    Page<MarketLog> findByMember_IdAndMarket_FundingIdOrderByCreatedAt(Long memberId, Long fundingId, Pageable pageable);
}
