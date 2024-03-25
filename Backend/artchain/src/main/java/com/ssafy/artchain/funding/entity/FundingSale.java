package com.ssafy.artchain.funding.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "funding_sale")
public class FundingSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    // 외래 키를 지정하되, 제약조건은 걸지 않는다.
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Funding funding;

    @Column(name = "main_variety", nullable = false)
    private String mainVariety;

    @Column(name = "sub_variety", nullable = false)
    private String subVariety;

    @Column(name = "percentage", nullable = false)
    private int percentage;
}
