package com.ssafy.artchain.funding.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "funding_expected_return")
public class FundingExpectedReturn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    // 외래 키를 지정하되, 제약조건은 걸지 않는다.
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Funding funding;

    @Column(name = "spectator_num", nullable = false)
    private int spectatorNum;

    @Column(name = "expected_return", nullable = false)
    private int expectedReturn;
}
