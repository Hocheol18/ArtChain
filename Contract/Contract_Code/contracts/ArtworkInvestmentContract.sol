// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 작품 정보를 저장하기 위한 구조체
struct Artwork {
    string photo;
    uint256 totalInvestment;
    uint256 progressRate;
    string description;
    string investmentStructure;
    uint256 expectedReturn;
    string notices;
    string status;
    string community;
    string riskWarning;
    string marketplaceStatus;
}

// 작품 투자 서비스 스마트 계약
contract ArtworkInvestmentContract {
    // 각 작품별 정보를 저장하는 매핑
    mapping(uint256 => Artwork) public artworks;

    // 작품 추가 이벤트
    event ArtworkAdded(uint256 artworkId, string photo, string description);

    // 작품 정보 초기화 및 추가
    function addArtwork(
        uint256 artworkId,
        string memory photo,
        uint256 totalInvestment,
        uint256 progressRate,
        string memory description,
        string memory investmentStructure,
        uint256 expectedReturn,
        string memory notices,
        string memory status,
        string memory community,
        string memory riskWarning,
        string memory marketplaceStatus
    ) external {
        // 새로운 작품 정보 생성
        Artwork memory newArtwork = Artwork({
            photo: photo,
            totalInvestment: totalInvestment,
            progressRate: progressRate,
            description: description,
            investmentStructure: investmentStructure,
            expectedReturn: expectedReturn,
            notices: notices,
            status: status,
            community: community,
            riskWarning: riskWarning,
            marketplaceStatus: marketplaceStatus
        });
    
        // 매핑에 작품 정보 추가
        artworks[artworkId] = newArtwork;

        // 이벤트 발생
        emit ArtworkAdded(artworkId, photo, description);
    }

    // 작품 정보 조회 함수
    function getArtworkInfo(uint256 artworkId) external view returns (Artwork memory) {
        return artworks[artworkId];
    }
}