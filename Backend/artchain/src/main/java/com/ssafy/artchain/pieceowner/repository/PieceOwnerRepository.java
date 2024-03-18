package com.ssafy.artchain.pieceowner.repository;

import com.ssafy.artchain.pieceowner.entity.PieceOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PieceOwnerRepository extends JpaRepository<PieceOwner, Long> {

}
