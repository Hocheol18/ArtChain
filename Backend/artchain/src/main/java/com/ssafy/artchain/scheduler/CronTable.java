package com.ssafy.artchain.scheduler;

import com.ssafy.artchain.connectentity.InvestmentLog;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import com.ssafy.artchain.funding.repository.InvestmentLogRepository;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.pieceowner.entity.PieceOwner;
import com.ssafy.artchain.pieceowner.repository.PieceOwnerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
@Slf4j
public class CronTable {

    private final FundingRepository fundingRepository;
    private final InvestmentLogRepository investmentLogRepository;
    private final PieceOwnerRepository pieceOwnerRepository;

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
                        .findAllByProgressStatusInAndIsAllowIn(targetProgressStatus, List.of(true))
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

                        List<InvestmentLog> investmentLogList = investmentLogRepository.findAllByFunding(
                                funding);

                        // 멤버별 조각의 합
                        Map<Member, Long> investmentLogSummaryMap = investmentLogList.stream()
                                .collect(Collectors.groupingBy(
                                        InvestmentLog::getMember,
                                        Collectors.summingLong(InvestmentLog::getPieceCount)
                                ));

                        investmentLogSummaryMap.forEach((member, pieceCount) -> {
                            pieceOwnerRepository.save(PieceOwner.builder()
                                    .fundingId(funding.getId())
                                    .memberId(member.getId())
                                    .pieceCount(pieceCount)
                                    .build()
                            );
                        });

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
