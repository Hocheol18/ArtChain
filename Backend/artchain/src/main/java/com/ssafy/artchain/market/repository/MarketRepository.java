package com.ssafy.artchain.market.repository;

import com.ssafy.artchain.market.dto.MarketDetailResponseDto;
import com.ssafy.artchain.market.entity.Market;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {

//    생성 날짜 기준으로 내림차순( 최신순 )
    Page<Market> findAllByFundingIdAndStatusOrderByCreatedAtDesc(Long fundingId, String status, Pageable pageable);
//    조각 당 높은 가격순
    Page<Market> findAllByFundingIdAndStatusOrderByCoinPerPieceDesc(Long fundingId, String status, Pageable pageable);
//    조각 당 낮은 가격순
    Page<Market> findAllByFundingIdAndStatusOrderByCoinPerPieceAsc(Long fundingId, String status, Pageable pageable);
    //    일반 조회
    Page<Market> findAllByFundingIdAndStatus(Long fundingId, String status, Pageable pageable);
    Page<Market> findAllByFundingId(Long fundingId, Pageable pageable);

//    marketId와 같은 market을 찾고 이 market안의 sellerId와 같은 member를 찾고,
//    이 market안의 buyerId와 같은 member를 찾고,
//    이 market 안의 fundingId와 같은 funding을 찾고,
//    이 funding안의 entId와 같은 member를 찾아서 찾은 값을 알맞은 DTO에 넣어준다
    @Query("SELECT new com.ssafy.artchain.market.dto.MarketDetailResponseDto(m.id, m.fundingId, f.name, m.status, m.contractAddress, m.pieceCount, m.totalCoin, m.coinPerPiece, s.walletAddress, b.walletAddress, cm.name) " +
            "FROM Market m " +
            "JOIN Member s ON m.sellerId = s.id " +
            "LEFT JOIN Member b ON m.buyerId = b.id " +
            "JOIN Funding f ON m.fundingId = f.id " +
            "JOIN Member cm ON f.entId = cm.id " +
            "WHERE m.id = :marketId")
    MarketDetailResponseDto findMarketDetailByMarketId(@Param("marketId") Long marketId);




}
