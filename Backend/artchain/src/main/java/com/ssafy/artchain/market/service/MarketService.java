package com.ssafy.artchain.market.service;

import com.ssafy.artchain.market.dto.*;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MarketService {
    List<MarketMainResponseDto> getMarketMain(String status, String category, Pageable pageable);
    List<MarketSellResponseDto> getMarketSellList(Long fundingId, String sortFlag, Pageable pageable);
    List<MarketPieceTradeHistoryResponseDto> getMarketPieceTradeHistoryList(Long fundingId, Pageable pageable);

    MarketDetailResponseDto getMarketDetail(Long marketId);
}
