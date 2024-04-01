package com.ssafy.artchain.member.entity;

import com.ssafy.artchain.connectentity.entity.InvestmentLog;
import com.ssafy.artchain.global.entity.BaseTimeEntity;
import com.ssafy.artchain.marketlog.entity.MarketLog;
import com.ssafy.artchain.member.dto.request.MemberWalletInfoRequestDto;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "MEMBER")
public class Member extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "MEMBER_ID", nullable = false)
    private String memberId;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "PERMISSION")
    @Enumerated(EnumType.STRING)
    private Permission permission;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "WALLET_ADDRESS")
    private String walletAddress;

    @Column(name = "WALLET_PASSWORD")
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

    @Column(name = "IS_DELETED")
    private Boolean isDeleted;

    public void updateName(String name) {
        this.name = name;
    }

    public void updateWalletBalance(BigDecimal walletBalance) {
        this.walletBalance = walletBalance;
    }

    public void updatePermission(Permission permission) {
        this.permission = permission;
    }

    public void updateWalletInfo(MemberWalletInfoRequestDto dto) {
        this.walletAddress = dto.getWalletAddress();
        this.walletPassword = dto.getWalletPassword();
    }

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<InvestmentLog> investmentLogs;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<MarketLog> marketLogs;

}
