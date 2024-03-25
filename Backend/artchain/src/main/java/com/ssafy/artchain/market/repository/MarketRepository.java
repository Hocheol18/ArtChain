package com.ssafy.artchain.market.repository;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import com.ssafy.artchain.market.entity.Market;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {

//    생성 날짜 기준으로 내림차순( 최신순 )
    Page<Market> findAllByFundingIdOrderByCreatedAtDesc(Long fundingId, Pageable pageable);
//    조각 당 높은 가격순
    Page<Market> findAllByFundingIdOrderByCoinPerPieceDesc(Long fundingId, Pageable pageable);
//    조각 당 낮은 가격순
    Page<Market> findAllByFundingIdOrderByCoinPerPieceAsc(Long fundingId, Pageable pageable);
    //    일반 조회
    Page<Market> findAllByFundingId(Long fundingId, Pageable pageable);



}
