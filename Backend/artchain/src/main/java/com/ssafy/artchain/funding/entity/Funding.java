package com.ssafy.artchain.funding.entity;

import com.ssafy.artchain.connectentity.InvestmentLog;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "description_img", nullable = false)
    private String descriptionImg;

    @Column(name = "recruit_start", nullable = false)
    private LocalDate recruitStart;

    @Column(name = "recruit_end", nullable = false)
    private LocalDate recruitEnd;

    @Column(name = "settlement", nullable = false)
    private LocalDate settlement;

    @Column(name = "goal_coin_count", nullable = false)
    private Long goalCoinCount;

    @Column(name = "now_coin_count", nullable = false)
    private Long nowCoinCount;

    @Column(name = "contract_address")
    private String contractAddress;

    @Column(name = "total_budget", nullable = false)
    private Long totalBudget;

    @Column(name = "unit_price", nullable = false)
    private int unitPrice;

    @Column(name = "bep", nullable = false)
    private int bep;

    @Column(name = "progress_status", nullable = false, columnDefinition = "varchar(255)")
    @Enumerated(EnumType.STRING)
    private FundingProgressStatus progressStatus = FundingProgressStatus.RECRUITMENT_STATUS;

    @Column(name = "is_allow")
    private Boolean isAllow;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<InvestmentLog> investmentLogs;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<FundingNotice> noticeList;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<FundingSchedule> scheduleList;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<FundingExpectedReturn> expectedReturnList;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<FundingSale> saleList;

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<FundingCost> costList;

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
