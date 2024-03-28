package com.ssafy.artchain.coin.entity;

import com.ssafy.artchain.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "coin")
public class Coin extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "coin_amount", precision = 19, scale = 2)
    private BigDecimal coinAmount;

    @Column(name = "transaction_hash")
    private String transactionHash;

//    충전, 환전 구분
    @Column(name = "inout_flag", columnDefinition = "varchar(255)")
    @Enumerated(EnumType.STRING)
    private InoutFlag inoutFlag;

    @Column(name = "currency_flow")
    private Long currencyFlow;
}
