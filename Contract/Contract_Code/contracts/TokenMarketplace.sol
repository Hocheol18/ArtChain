
// pragma solidity ^0.8.0;

// import "./IERC20.sol"; // ERC20 인터페이스 임포트

// contract TokenMarketplace {
//     // 토큰 주소와 ERC20 인터페이스를 맵핑
//     mapping(address => IERC20) public tokenContracts;

//     // 상장된 토큰 맵핑 (토큰 주소 => 상태)
//     mapping(address => bool) public isTokenListed;

//     // 거래 게시글 구조체
//     struct TradePost {
//         address tokenAddress; // 거래할 토큰의 주소, 조각 코인
//         uint256 tokenAmount; // 거래할 토큰의 양
//         uint256 price; // 거래 가격 (C 토큰으로 지불할 양)
//     }

//     // 거래 게시글 목록
//     TradePost[] public tradePosts;
//     uint256 public tradePostsLength; // 거래 게시글 수를 추적하는 변수

//     // 조각 토큰을 구매할 수 있는 화폐, 아트 토큰
//     address artCoinAddress = 0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB;

//     // 토큰 상장
//     function listToken(address _tokenAddress) external {
//         require(!isTokenListed[_tokenAddress], "Token already listed");
//         isTokenListed[_tokenAddress] = true;
//         tokenContracts[_tokenAddress] = IERC20(_tokenAddress);
//     }

//     // 토큰 구매
//     function buyToken(uint256 _tradePostIndex) external {
//         require(_tradePostIndex < tradePostsLength, "Invalid trade post index");
//         TradePost storage tradePost = tradePosts[_tradePostIndex];

//         // 거래할 토큰의 소유권을 스마트 계약에게 인정
//         require(
//             tokenContracts[artCoinAddress].approve(
//                 address(this),
//                 tradePost.price
//             ),
//             "Failed to approve token transfer"
//         );

//         // 거래할 토큰을 사용자에게 전송
//         require(
//             tokenContracts[artCoinAddress].transferFrom(
//                 msg.sender,
//                 address(this),
//                 tradePost.price
//             ),
//             "Failed to transfer token"
//         );

//         // 거래 가격(C 토큰)을 계산하여 판매자에게 이더를 전송
//         payable(msg.sender).transfer(tradePost.price);
//     }

//     function addTradePost(
//     address _tokenAddress,
//     uint256 _tokenAmount,
//     uint256 _price
// ) external {
//     require(isTokenListed[_tokenAddress], "Token not listed");

//     // 거래 게시글 추가
//     tradePosts.push(TradePost(_tokenAddress, _tokenAmount, _price));
//     tradePostsLength++; // 거래 게시글 수 증가

//     // 사용자로부터 토큰 소유권을 스마트 계약에게 넘겨받음
//     require(
//         tokenContracts[_tokenAddress].approve(msg.sender, _tokenAmount),
//         "Failed to approve token transfer"
//     );
// }

//     // 거래 게시글 수를 반환하는 함수
//     function getTradePostsLength() external view returns (uint256) {
//         return tradePosts.length;
//     }

//     // 모든 거래를 반환하는 함수
//     function getAllPosts() external view returns (TradePost[] memory) {
//         return tradePosts;
//     }
// }
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract TokenMarketplace {
    mapping(address => IERC20) public tokenContracts;
    mapping(address => bool) public isTokenListed;
    struct TradePost {
        address tokenAddress;
        uint256 tokenAmount;
        uint256 price;
    }
    TradePost[] public tradePosts;
    uint256 public tradePostsLength;
    address artCoinAddress = 0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB;

    constructor() {
        listToken(artCoinAddress);
    }

    function listToken(address _tokenAddress) public {
        require(!isTokenListed[_tokenAddress], "Token already listed");
        isTokenListed[_tokenAddress] = true;
        tokenContracts[_tokenAddress] = IERC20(_tokenAddress);
    }

    function buyToken(uint256 _tradePostIndex) external {
        require(_tradePostIndex < tradePostsLength, "Invalid trade post index");
        TradePost storage tradePost = tradePosts[_tradePostIndex];
        require(
            tokenContracts[tradePost.tokenAddress].approve(address(this), tradePost.price),
            "Failed to approve token transfer"
        );
        require(
            tokenContracts[tradePost.tokenAddress].transferFrom(msg.sender, address(this), tradePost.price),
            "Failed to transfer token"
        );
        payable(msg.sender).transfer(tradePost.price);
    }

    function addTradePost(address _tokenAddress, uint256 _tokenAmount, uint256 _price) external {
        require(isTokenListed[_tokenAddress], "Token not listed");
        tradePosts.push(TradePost(_tokenAddress, _tokenAmount, _price));
        tradePostsLength++;
    }

    function getTradePostsLength() external view returns (uint256) {
        return tradePosts.length;
    }

    function getAllPosts() external view returns (TradePost[] memory) {
        return tradePosts;
    }
}
