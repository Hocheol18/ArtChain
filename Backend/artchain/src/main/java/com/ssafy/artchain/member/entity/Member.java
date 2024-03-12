package com.ssafy.artchain.member.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "MEMBER")
public class Member {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "MEMBER_ID", nullable = false)
  private String memberId;

  @Column(name = "PASSWORD", nullable = false)
  private String password;

  @Column(name = "OAUTH")
  private String oauth;

  @Column(name = "NAME", nullable = false)
  private String name;

  @Column(name = "WALLET_ADDRESS", nullable = false)
  private String walletAddress;

  @Column(name = "WALLET_PASSWORD", nullable = false)
  private String walletPassword;

  @Column(name = "WALLET_BALANCE", precision = 19, scale = 2)
  private BigDecimal walletBalance;

  @Column(name = "AUTHORITY")
  private String authority;

  @Column(name = "TEL")
  private String tel;

  @Column(name = "BANK_NAME")
  private String bankName;

  @Column(name = "BANK_ACCOUNT")
  private String bankAccount;

  @Column(name = "EMAIL")
  private String email;

  @Column(name = "BUSINESS_REGISTRATION_NUMBER")
  private String businessRegistrationNumber;

  @Column(name = "IS_DELETED", nullable = false)
  private Boolean isDeleted;

  @Column(name = "CREATED_AT", nullable = false)
  private LocalDateTime createAt;

  @Column(name = "UPDATED_AT")
  private LocalDateTime updatedAt;
}
