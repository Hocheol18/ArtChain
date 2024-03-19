package com.ssafy.artchain.funding.entity;

import com.ssafy.artchain.connectentity.InvestmentLog;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
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

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "investment_structure", nullable = false)
    private String investmentStructure;

    @Column(name = "estimated_return", precision = 19, scale = 2, nullable = false)
    private BigDecimal estimatedReturn;

    @Column(name = "risk_notice", nullable = false)
    private String riskNotice;

    @Column(name = "progress_status", nullable = false)
    private String progressStatus;

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

    @OneToMany(mappedBy = "funding", cascade = CascadeType.ALL)
    private List<InvestmentLog> investmentLogs;
}
