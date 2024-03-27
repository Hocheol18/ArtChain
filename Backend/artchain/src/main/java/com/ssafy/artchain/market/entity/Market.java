package com.ssafy.artchain.market.entity;

import com.ssafy.artchain.global.entity.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "market")
public class Market extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "funding_id", nullable = false)
    private Long fundingId;

    @Column(name = "contract_address")
    private String contractAddress;

    @Column(name = "piece_count")
    private Long pieceCount;

    @Column(name = "total_coin")
    private Long totalCoin;

    @Column(name = "coin_per_piece", precision = 19, scale = 2)
    private BigDecimal coinPerPiece;

    @Column(name = "status")
    private String status;

    @Column(name = "transaction_hash")
    private String transactionHash;

    @Column(name = "transaction_time")
    private LocalDateTime transactionTime;

    @Column(name = "seller_id", nullable = false)
    private Long sellerId;

    @Column(name = "buyer_id")
    private Long buyerId;

    public void updateBuyerAndStatus(Long buyerId, String status) {
        this.buyerId = buyerId;
        this.status = status;
    }
}
