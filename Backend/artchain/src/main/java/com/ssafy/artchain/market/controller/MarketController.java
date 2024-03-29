package com.ssafy.artchain.market.controller;

import com.ssafy.artchain.market.dto.*;
import com.ssafy.artchain.market.response.DefaultResponse;
import com.ssafy.artchain.market.service.MarketServiceImpl;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ssafy.artchain.market.response.StatusCode.*;

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
     *               투자 카테고리와 상태를 넣는다( pageable 기본은 0, 6 )
     * @return List<MarketMainResponseDto>
     */
    @GetMapping
    public ResponseEntity<DefaultResponse<List<MarketMainResponseDto>>> getMarketMainList(@RequestParam String category, @RequestParam String status, @PageableDefault(size = 6, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        System.out.println("category, status : " + category + status);
        List<MarketMainResponseDto> marketMainResponseDtoList = marketService.getMarketMain(status, category, pageable);
        System.out.println(marketMainResponseDtoList);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_MAIN_VIEW, marketMainResponseDtoList);
    }

    /**
     * 마켓 판매 리스트
     * 마켓 메인에서 투자 상품을 클릭하면 그 상품에 관련된
     * 현재 조각을 팔고 있는 리스트를 조회할 수 있다.
     *
     * @param String category, String status, int page, int size
     *               투자 카테고리와 상태를 넣는다( pageable 기본은 0, 6 )
     * @return List<MarketSellResponseDto>
     */
    @GetMapping("/sellList")
    public ResponseEntity<DefaultResponse<List<MarketSellResponseDto>>> getMarketSellList(@RequestParam Long fundingId, @RequestParam String sortFlag, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        List<MarketSellResponseDto> list = marketService.getMarketSellList(fundingId, sortFlag, pageable);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_MAIN_VIEW, list);
    }

    /**
     * 조각 거래 내역
     * 마켓에서 투자 상품과 관련된 조각이 거래 된 내역을 확인할 수 있다.
     *
     * @param Long fundingId, int page, int size
     *             투자 상품 PK를 넣는다( pageable 기본은 0, 6 )
     * @return List<MarketPieceTradeHistoryResponseDto>
     */
    @GetMapping("/pieceHistory")
    public ResponseEntity<DefaultResponse<List<MarketPieceTradeHistoryResponseDto>>> getMarketPieceHistoryList(@RequestParam Long fundingId, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        List<MarketPieceTradeHistoryResponseDto> list = marketService.getMarketPieceTradeHistoryList(fundingId, pageable);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_PIECE_TRADE_HISTORY_VIEW, list);
    }

    /**
     * 조각 거래 상세 조회
     * 마켓에서 거래 중이거나 거래 된
     * 조각 거래 내역을 상세히 볼 수 있다.
     *
     * @param Long marketId, int page, int size
     *             마켓 PK를 넣는다( pageable 기본은 0, 6 )
     * @return MarketDetailResponseDto
     */
    @GetMapping("/detail")
    public ResponseEntity<DefaultResponse<MarketDetailResponseDto>> getMarketHistoryDetail(@RequestParam Long marketId) {
        MarketDetailResponseDto dto = marketService.getMarketDetail(marketId);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_DETAIL_VIEW, dto);
    }

    @GetMapping("/registForm")
    public ResponseEntity<DefaultResponse<List<MarketRegistFundingNameResponseDto>>> getMarketRegistForm(@AuthenticationPrincipal CustomUserDetails customMember) {
        Long memberId = customMember.getId();
//        fundingId와 fundingName, 갖고있는 pieceCount 반환
        List<MarketRegistFundingNameResponseDto> fundingNameList = marketService.getMarketRegistForm(memberId);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_REGIST_FORM_VIEW, fundingNameList);
    }

    @GetMapping("/graph")
    public ResponseEntity<DefaultResponse<List<MarketGraphResponseDto>>> getGraphList(@RequestParam Long fundingId) {

        List<MarketGraphResponseDto> graphList = marketService.getGraphList(fundingId);

        return DefaultResponse.toResponseEntity(HttpStatus.OK, SUCCESS_MARKET_PIECE_TRADE_HISTORY_VIEW, graphList);
    }

    @PostMapping
    public ResponseEntity<DefaultResponse<Object>> createMarketRegist(@AuthenticationPrincipal CustomUserDetails member, @RequestBody MarketRegistRequestDto dto) {
        marketService.createMarketRegist(member, dto);

        return DefaultResponse.emptyResponse(HttpStatus.OK, SUCCESS_CREATE_MARKET_TRADE);
    }

    /**
     * 개인 회원이 조각 구매
     *
     * @param marketId
     * @param member
     * @return
     */
    @PutMapping("/buy/{marketId}")
    public ResponseEntity<DefaultResponse<Void>> buyMarketItem(@PathVariable Long marketId, @AuthenticationPrincipal CustomUserDetails member) {
        int result = marketService.buyMarketItem(marketId, member);
        if (result == -3) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    ALLOW_ONLY_USER
            );
        } else if (result == -2) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    FAIL_FIND_MARKET_ITEM
            );
        } else if (result == -1) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    STATUS_IS_NOT_POSSIBLE_BUY
            );
        } else if (result == 0) {
            return DefaultResponse.emptyResponse(
                    HttpStatus.OK,
                    FAIL_SELLER_NOT_OWNER
            );
        }

        return DefaultResponse.emptyResponse(
                HttpStatus.OK,
                SUCCESS_BUY_MARKET_ITEM
        );
    }
}
