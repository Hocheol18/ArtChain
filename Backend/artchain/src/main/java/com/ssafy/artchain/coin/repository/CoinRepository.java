package com.ssafy.artchain.coin.repository;

import com.ssafy.artchain.coin.entity.Coin;
import com.ssafy.artchain.coin.entity.InoutFlag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoinRepository extends JpaRepository<Coin, Long> {
    Page<Coin> findAllByMemberIdAndInoutFlag(Long memberId, InoutFlag inoutFlag, Pageable pageable);
}
