package com.ssafy.artchain.market.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "MARKET")
public class Market {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "TITLE", nullable = false)
  private String title;

  @Column(name = "CONTENT")
  private String content;

  @Column(name = "CONTRACT_ADDRESS", nullable = false)
  private String contractAddress;

  @Column(name = "COIN_NAME", nullable = false)
  private String coinName;

  @Column(name = "COIN_COUNT", nullable = false)
  private Long coinCount;

  @Column(name = "STATUS", nullable = false)
  private String status;

  @Column(name = "TRANSACTION_HASH")
  private String transactionHash;

  @Column(name = "TRANSACTION_TIME")
  private LocalDateTime transactionTime;

  @Column(name = "SELLER_ID", nullable = false)
  private String sellerId;

  @Column(name = "BUYER_ID")
  private String buyerId;
}
