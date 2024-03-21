package com.ssafy.artchain.scheduler;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@RequiredArgsConstructor
@Slf4j
public class CronTable {

    private final FundingRepository fundingRepository;

    @Value("${schedule.funding.progress-status.active}")
    private boolean fundingProgressStatusCronActive;

    @Transactional
    @Scheduled(cron = "${schedule.funding.progress-status.cron}")
    public void fundingProgressStatusCron() {
        try {
            if (fundingProgressStatusCronActive) {
                List<FundingProgressStatus> targetProgressStatus = List.of(
                    FundingProgressStatus.RECRUITMENT_STATUS);
                BigDecimal minSuccessPercentage = new BigDecimal("0.8"); // 모집 성공 기준 퍼센트

                List<Funding> fundingList = fundingRepository
                    .findAllByProgressStatusIn(targetProgressStatus)
                    .stream()
                    .filter(
                        funding -> funding.getRecruitEnd().isEqual(LocalDate.now().minusDays(1L))
                    )
                    .toList();

                for (Funding funding : fundingList) {
                    BigDecimal goalCoinCount = new BigDecimal(funding.getGoalCoinCount());
                    BigDecimal nowCoinCount = new BigDecimal(funding.getNowCoinCount());

                    BigDecimal recruitPercentage = nowCoinCount.divide(goalCoinCount, 1,
                        RoundingMode.DOWN); // 소수점 첫 번째 자리까지, 내림으로

                    if (recruitPercentage.compareTo(minSuccessPercentage) >= 0) { // 모집 성공
                        funding.updateProgressStatus(FundingProgressStatus.PENDING_SETTLEMENT);
                    } else { // 모집 실패
                        funding.updateProgressStatus(FundingProgressStatus.RECRUITMENT_FAILED);
                    }
                }
            }
        } catch (Exception e) {
            log.info("* Batch 시스템이 예기치 않게 종료되었습니다. Message: {}", e.getMessage());
        }
    }
}
