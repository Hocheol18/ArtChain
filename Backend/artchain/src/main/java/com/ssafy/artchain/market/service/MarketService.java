package com.ssafy.artchain.market.service;

import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import com.ssafy.artchain.market.dto.MarketResponseDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MarketService {
    List<MarketMainResponseDto> getMarketMain(String status, String category, Pageable pageable);
}
