package com.ssafy.artchain.coin.repository;

import com.ssafy.artchain.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoinRepository extends JpaRepository<Funding, Long> {
}
