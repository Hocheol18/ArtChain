package com.ssafy.artchain.scheduler;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.connectentity.repository.InvestmentLogRepository;
import com.ssafy.artchain.eventLog.entity.EventLog;
import com.ssafy.artchain.eventLog.repository.EventLogRepository;
import com.ssafy.artchain.eventLog.service.EventLogService;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import com.ssafy.artchain.funding.repository.FundingRepository;
import com.ssafy.artchain.member.entity.Member;
import com.ssafy.artchain.pieceowner.entity.PieceOwner;
import com.ssafy.artchain.pieceowner.repository.PieceOwnerRepository;
import com.ssafy.artchain.sse.dto.SseFundingRecruitEndResultListDto;
import com.ssafy.artchain.sse.dto.SseFundingRecruitEndResultListItemDto;
import com.ssafy.artchain.sse.repository.SseRepository;
import com.ssafy.artchain.sse.service.SseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    private final SseRepository sseRepository;
    private final SseService sseService;
    private final EventLogRepository eventLogRepository;
    private final EventLogService eventLogService;

    @Value("${schedule.funding.progress-status.active}")
    private boolean fundingProgressStatusCronActive;

    @Value("${schedule.funding.set-recruit-start.active}")
    private boolean fundingProgressSetRecruitmentStartCronActive;

    /**
     * 관리자 승인 완료 & 모집 시작 전인 펀딩을 모집 시작일을 기준 일자로 하여
     * 모집 중 상태로 변경
     */
    @Transactional
    @Scheduled(cron = "${schedule.funding.set-recruit-start.cron}")
    public void fundingProgressSetRecruitmentStartCron() {
        try {
            if (fundingProgressSetRecruitmentStartCronActive) {
                List<FundingProgressStatus> targetProgressStatus = List.of(
                        FundingProgressStatus.BEFORE_RECRUITMENT);

                List<Funding> fundingList = fundingRepository
                        .findAllByProgressStatusInAndIsAllowIn(targetProgressStatus, List.of(true))
                        .stream()
                        .filter(
                                funding -> funding.getRecruitStart().isEqual(LocalDate.now())
                        )
                        .toList();

                for (Funding funding : fundingList) {
                    funding.updateProgressStatus(FundingProgressStatus.RECRUITMENT_STATUS);
                }
            }
        } catch (Exception e) {
            log.info("* Batch 시스템이 예기치 않게 종료되었습니다. Message: {}", e.getMessage());
        }
    }

    /**
     * 관리자 승인 완료 & 모집 중인 펀딩을 모집 종료일을 기준 일자로 하여 모집 성공 기준 퍼센트를 넘었느나에 따라
     * 모집 성공(정산 대기)과 모집 실패로 상태 변경.
     * 모집 성공(정산 대기)인 경우 조각 코인 소유자 테이블에 작품/투자자별 총 조각 코인 수를 등록
     */
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

                List<SseFundingRecruitEndResultListItemDto> sseFundingRecruitEndResultListItemList = new ArrayList<>();
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

                        sseFundingRecruitEndResultListItemList.add(new SseFundingRecruitEndResultListItemDto(true, funding.getContractAddress()));
                    } else { // 모집 실패
                        funding.updateProgressStatus(FundingProgressStatus.RECRUITMENT_FAILED);

                        sseFundingRecruitEndResultListItemList.add(new SseFundingRecruitEndResultListItemDto(false, funding.getContractAddress()));
                    }
                }

                String eventTypeName = "fundingProgressStatusCron";
                SseFundingRecruitEndResultListDto eventContent = new SseFundingRecruitEndResultListDto(sseFundingRecruitEndResultListItemList);

                eventLogRepository.save(EventLog.builder()
                        .eventDate(LocalDateTime.now())
                        .eventType(eventTypeName)
                        .eventContent(eventLogService.convertDtoToJson(eventContent))
                        .build());

                String eventId = "ADMIN";
                sseRepository.findById(eventId)
                        .ifPresent(sseEmitter -> sseService.send(eventContent, eventId, sseEmitter, eventTypeName));
            }
        } catch (Exception e) {
            log.info("* Batch 시스템이 예기치 않게 종료되었습니다. Message: {}", e.getMessage());
        }
    }

    /**
     * SSE 연결 종료 방지를 위한 하트비트 메시지
     */
    @Scheduled(cron = "0/30 * * * * *")
    public void heartbeatSSE() {
        try {
            String eventId = "ADMIN";
            sseRepository.findById(eventId)
                    .ifPresent(sseEmitter -> sseService.send("*** HEARTBEAT SSE ***", eventId, sseEmitter, "HEARTBEAT"));
        } catch (Exception e) {
            log.info("* Batch 시스템이 예기치 않게 종료되었습니다. Message: {}", e.getMessage());
        }
    }
}
