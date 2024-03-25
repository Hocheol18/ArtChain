package com.ssafy.artchain.market.controller;

import com.ssafy.artchain.market.dto.MarketMainResponseDto;
import com.ssafy.artchain.market.dto.*;
import com.ssafy.artchain.market.dto.MarketSellResponseDto;
import com.ssafy.artchain.market.response.DefaultResponse;
import com.ssafy.artchain.market.service.MarketServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ssafy.artchain.market.response.StatusCode.SUCCESS_MARKET_MAIN_VIEW;

@RestController
@RequestMapping("/api/market")
@RequiredArgsConstructor
@Slf4j
public class MarketController {

    private final MarketServiceImpl marketService;
    @GetMapping
    public ResponseEntity<DefaultResponse<List<MarketMainResponseDto>>> getMarketMainList( @RequestParam String category, @RequestParam String status, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        System.out.println("category, status : "+ category + status );
        List<MarketMainResponseDto> marketMainResponseDtoList = marketService.getMarketMain( status, category, pageable);
        System.out.println(marketMainResponseDtoList);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_MAIN_VIEW, marketMainResponseDtoList);
    }

    @GetMapping("/sellList")
    public ResponseEntity<DefaultResponse<List<MarketSellResponseDto>>> getMarketSellList( @RequestParam Long fundingId, @RequestParam String sortFlag, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        List<MarketSellResponseDto> list = marketService.getMarketSellList(fundingId, sortFlag, pageable);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_MAIN_VIEW, list);
    }

    @GetMapping("/pieceHistory")
    public ResponseEntity<DefaultResponse<?>> getMarketPieceHistoryList( @RequestParam Long fundingId, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        List<MarketPieceTradeHistoryResponseDto> list = marketService.getMarketPieceTradeHistoryList(fundingId, pageable);

        return null;
    }

}
