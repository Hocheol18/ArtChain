package com.ssafy.artchain.member.dto.response;

import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.settlement.entity.SettlementStatus;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FundingComShareDto {
    private Long id;
    private String name;
    private FundingProgressStatus progressStatus;
    private String poster;
    private Long nowCoinCount;
    private Long goalCoinCount;
    private LocalDate recruitEnd;
    private SettlementStatus status;
    private BigDecimal share;


    public FundingComShareDto(FundingComMypageDto dto){
        this.id = dto.getId();
        this.name = dto.getName();
        this.progressStatus = dto.getProgressStatus();
        this.poster = dto.getPoster();
        this.nowCoinCount = dto.getNowCoinCount();
        this.goalCoinCount = dto.getGoalCoinCount();
        this.recruitEnd = dto.getRecruitEnd();
        this.status = dto.getStatus();
        this.share = null;
    }
}
