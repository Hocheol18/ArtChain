package com.ssafy.artchain.marketlog.entity;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.global.entity.BaseTimeEntity;
import com.ssafy.artchain.market.entity.Market;
import com.ssafy.artchain.member.entity.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "market_log")
public class MarketLog extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "market_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Market market;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Member member;

    @Column(name = "market_flag")
    @Enumerated(EnumType.STRING)
    private MarketFlag marketFlag;

    @Column(name = "transaction_hash")
    private String transactionHash;

}
