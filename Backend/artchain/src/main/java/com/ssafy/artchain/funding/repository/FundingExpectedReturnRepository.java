package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.entity.FundingExpectedReturn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingExpectedReturnRepository extends JpaRepository<FundingExpectedReturn, Long> {
}
