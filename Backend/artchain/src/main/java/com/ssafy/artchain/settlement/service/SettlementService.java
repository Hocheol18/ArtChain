package com.ssafy.artchain.settlement.service;

import com.ssafy.artchain.member.dto.CustomUserDetails;
import com.ssafy.artchain.settlement.dto.SettlementListItemDto;
import com.ssafy.artchain.settlement.dto.SettlementRequestDto;
import com.ssafy.artchain.settlement.dto.SettlementResponseDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SettlementService {
    Long createSettlementRequest(MultipartFile file, SettlementRequestDto dto, CustomUserDetails member);

    List<SettlementListItemDto> getSettlementRequestList(CustomUserDetails member);

    SettlementResponseDto getSettlement(Long settlementId, CustomUserDetails member);

    int updateSettlementStatus(Long settlementId, String status, CustomUserDetails member);

    int deleteSettlement(Long settlementId, CustomUserDetails member);
}
