package com.ssafy.artchain.member.entity;

import jakarta.persistence.*;
import lombok.*;

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

  @Column(name = "MEMBER_ID")
  private String memberId;

  @Column(name = "PASSWORD")
  private String password;

  @Column(name = "OAUTH")
  private String oauth;

  @Column(name = "NAME")
  private String name;

  @Column(name = "WALLET_ADDRESS")
  private String walletAddress;

  @Column(name = "WALLET_PASSWORD")
  private String walletPassword;

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

  @Column(name = "IS_DELETED")
  private Boolean isDeleted;

  @Column(name = "CREATED_AT")
  private LocalDateTime createAt;

  @Column(name = "UPDATED_AT")
  private LocalDateTime updatedAt;
}
