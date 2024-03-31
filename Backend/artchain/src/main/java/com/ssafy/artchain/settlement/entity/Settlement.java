package com.ssafy.artchain.settlement.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "settlement")
public class Settlement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "ent_id", nullable = false)
    private Long entId;

    @Column(name = "funding_id", nullable = false)
    private Long fundingId;

    @Column(name = "settlement_price", nullable = false)
    private Long settlementPrice;

    @Column(name = "return_rate", nullable = false)
    private Integer returnRate;

    @Column(name = "deposit_date", nullable = false)
    private LocalDate depositDate;

    @Column(name = "settlement_file", nullable = false)
    private String settlementFile;

    @Column(name = "status", nullable = false, columnDefinition = "varchar(64)")
    @Enumerated(EnumType.STRING)
    private SettlementStatus status = SettlementStatus.REQUEST;

    public void updateStatus(SettlementStatus status) {
        this.status = status;
    }
}
