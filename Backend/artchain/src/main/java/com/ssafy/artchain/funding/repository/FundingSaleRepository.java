package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.entity.FundingSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingSaleRepository extends JpaRepository<FundingSale, Long> {
}
