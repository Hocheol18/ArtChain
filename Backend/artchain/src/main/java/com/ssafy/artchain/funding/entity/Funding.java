package com.ssafy.artchain.funding.entity;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "funding")
public class Funding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "ent_id", nullable = false)
    private Long entId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "poster", nullable = false)
    private String poster;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "investment_structure", nullable = false)
    private String investmentStructure;

    @Column(name = "estimated_return", precision = 19, scale = 2, nullable = false)
    private BigDecimal estimatedReturn;

    @Column(name = "risk_notice", nullable = false)
    private String riskNotice;

    @Column(name = "progress_status", nullable = false, columnDefinition = "varchar(255)")
    @Enumerated(EnumType.STRING)
    private FundingProgressStatus progressStatus = FundingProgressStatus.RECRUITMENT_STATUS;

    @Column(name = "goal_coin_count", nullable = false)
    private Long goalCoinCount;

    @Column(name = "now_coin_count", nullable = false)
    private Long nowCoinCount;

    @Column(name = "is_finished", nullable = false)
    private Boolean isFinished;

    @Column(name = "contract_address")
    private String contractAddress;

    @Column(name = "attachment", nullable = false)
    private String attachment;

    @Column(name = "is_allow", nullable = false)
    private Boolean isAllow;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "recruit_end", nullable = false)
    private LocalDate recruitEnd;

    @Column(name = "recruit_start")
    private LocalDate recruitStart;

    @Column(name = "settlement")
    private LocalDate settlement;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<InvestmentLog> investmentLogs;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<FundingNotice> noticeList;

    public void allowFunding(Boolean isAllow) {
        this.isAllow = isAllow;
    }

    public void renewNowCoinCount(Long nowCoinCount) {
        this.nowCoinCount = nowCoinCount;
    }

    public void updateProgressStatus(FundingProgressStatus progressStatus) {
        this.progressStatus = progressStatus;
    }
}
