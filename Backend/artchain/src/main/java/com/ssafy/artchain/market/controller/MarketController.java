package com.ssafy.artchain.market.controller;

import com.ssafy.artchain.market.service.MarketServiceImpl;
import com.ssafy.artchain.member.defaultResponse.DefaultResponse;
import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.member.dto.response.MemberUserMypageResponseListDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.polaris.book.response.StatusCode.SUCCESS_USER_VIEW;

@RestController
@RequestMapping("/api/market")
@RequiredArgsConstructor
@Slf4j
public class MarketController {

    MarketServiceImpl marketService;
    @GetMapping
    public ResponseEntity<?> getMarketList( @RequestParam String category, @RequestParam String status, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {


        return null;
    }
}
