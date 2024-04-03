package com.ssafy.artchain.pieceowner.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "piece_owner")
public class PieceOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "member_id", nullable = false)
    private Long memberId;

    @Column(name = "funding_id", nullable = false)
    private Long fundingId;

    @Column(name = "piece_count", nullable = false)
    private Long pieceCount;

    public void updatePieceCount(Long pieceCount) {
        this.pieceCount = pieceCount;
    }
}
