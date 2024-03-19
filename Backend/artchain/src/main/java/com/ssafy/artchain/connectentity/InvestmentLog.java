    package com.ssafy.artchain.connectentity;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.member.entity.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

    @Getter
    @Entity
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public class InvestmentLog {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        // 외래 키를 지정하되, 제약조건은 걸지 않는다.
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "member_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
        private Member member;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "funding_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
        private Funding funding;

        public InvestmentLog(Member member, Funding funding){
            this.member = member;
            this.funding = funding;
        }
    }
