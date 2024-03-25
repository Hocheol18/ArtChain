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
import static com.ssafy.artchain.market.response.StatusCode.SUCCESS_MARKET_PIECE_TRADE_HISTORY_VIEW;

@RestController
@RequestMapping("/api/market")
@RequiredArgsConstructor
@Slf4j
public class MarketController {

    private final MarketServiceImpl marketService;
    /**
     * 마켓 메인
     * 마켓에 들어오면 정산 대기, 정산 완료 상태인 투자 리스트들을 볼 수 있다.
     *
     * @param String category, String status, int page, int size
     * 투자 카테고리와 상태를 넣는다( pageable 기본은 0, 6 )
     * @return marketMainResponseDtoList
     */
    @GetMapping
    public ResponseEntity<DefaultResponse<List<MarketMainResponseDto>>> getMarketMainList( @RequestParam String category, @RequestParam String status, @PageableDefault(size = 6, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        System.out.println("category, status : "+ category + status );
        List<MarketMainResponseDto> marketMainResponseDtoList = marketService.getMarketMain( status, category, pageable);
        System.out.println(marketMainResponseDtoList);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_MAIN_VIEW, marketMainResponseDtoList);
    }

    /**
     * 마켓 판매 리스트
     * 마켓 메인에서 투자 상품을 클릭하면 그 상품에 관련된
     * 현재 조각을 팔고 있는 리스트를 조회할 수 있다.
     *
     * @param String category, String status, int page, int size
     * 투자 카테고리와 상태를 넣는다( pageable 기본은 0, 6 )
     * @return marketMainResponseDtoList
     */
    @GetMapping("/sellList")
    public ResponseEntity<DefaultResponse<List<MarketSellResponseDto>>> getMarketSellList( @RequestParam Long fundingId, @RequestParam String sortFlag, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        List<MarketSellResponseDto> list = marketService.getMarketSellList(fundingId, sortFlag, pageable);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_MAIN_VIEW, list);
    }

    @GetMapping("/pieceHistory")
    public ResponseEntity<DefaultResponse<List<MarketPieceTradeHistoryResponseDto>>> getMarketPieceHistoryList( @RequestParam Long fundingId, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        List<MarketPieceTradeHistoryResponseDto> list = marketService.getMarketPieceTradeHistoryList(fundingId, pageable);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_PIECE_TRADE_HISTORY_VIEW, list);
    }

}
