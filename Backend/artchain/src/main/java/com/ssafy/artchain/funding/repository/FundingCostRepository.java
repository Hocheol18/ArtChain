package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.entity.FundingCost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingCostRepository extends JpaRepository<FundingCost, Long> {
}
