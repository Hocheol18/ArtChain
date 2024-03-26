package com.ssafy.artchain.connectentity.entity;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.member.entity.Member;
import jakarta.persistence.Column;
import jakarta.persistence.ConstraintMode;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "investment_log")
public class InvestmentLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    // 외래 키를 지정하되, 제약조건은 걸지 않는다.
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Funding funding;

    @Column(name = "transaction_hash")
    private String transactionHash;

    @Column(name = "transaction_time")
    private LocalDateTime transactionTime;

    @Column(name = "coin_count")
    private Long coinCount;

    @Column(name = "piece_count")
    private Long pieceCount;

}
