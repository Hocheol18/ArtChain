package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.FundingSchedule;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class FundingScheduleResponseDto {
    private Long id;
    private Long fundingId;
    private String scheduleName;
    private LocalDate scheduleDate;

    public FundingScheduleResponseDto(FundingSchedule fundingSchedule) {
        this.id = fundingSchedule.getId();
        this.fundingId = fundingSchedule.getFunding().getId();
        this.scheduleName = fundingSchedule.getScheduleName();
        this.scheduleDate = fundingSchedule.getScheduleDate();
    }
}
