package com.ssafy.artchain.pieceowner.service;


import com.ssafy.artchain.pieceowner.repository.PieceOwnerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PieceOwnerServiceImpl implements PieceOwnerService {

    private final PieceOwnerRepository pieceOwnerRepository;

}
