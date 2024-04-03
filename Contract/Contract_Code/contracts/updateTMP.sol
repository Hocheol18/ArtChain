// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "./IERC20.sol";

// contract TokenMarketplace {
//     mapping(address => IERC20) public tokenContracts;
//     mapping(address => bool) public isTokenOwnedByUser; // 사용자가 소유한 토큰
//     address[] public userTokens; // 사용자가 소유한 토큰 목록
//     struct TradePost {
//         address seller;
//         address tokenAddress;
//         uint256 tokenAmount;
//         uint256 price;
//     }
//     TradePost[] public tradePosts;
//     uint256 public tradePostsLength;
//     address artCoinAddress = 0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB;

//     function buyToken(uint256 _tradePostIndex) external {
//         require(_tradePostIndex < tradePostsLength, "Invalid trade post index");
//         TradePost storage tradePost = tradePosts[_tradePostIndex];

//         // Ensure that the buyer has approved this contract to spend the required tokens
//         require(
//             tokenContracts[artCoinAddress].approve(
//                 tradePost.seller,
//                 tradePost.price*(10**18)
//             ),
//             "Failed to approve token transfer"
//         );

//         // Transfer tokens from the buyer to this contract
//         tokenContracts[artCoinAddress].transferFrom(
//             msg.sender,
//             tradePost.seller,
//             tradePost.price*(10**18)
//         );

//         // Transfer the price of the token to the seller
//         tokenContracts[tradePost.tokenAddress].transferFrom(
//             address(this),
//             msg.sender,
//             tradePost.tokenAmount*(10**18)
//         );
//     }

//     function addTradePost(
//         address _tokenAddress,
//         uint256 _tokenAmount,
//         uint256 _price
//     ) external {
//         require(isTokenOwnedByUser[_tokenAddress], "User does not own token");

//         // Transfer tokens from user to this contract
//         require(
//             tokenContracts[_tokenAddress].transferFrom(
//                 msg.sender, 
//                 address(this),
//                 _tokenAmount*(10**18)
//             ),
//             "Token transfer failed"
//         );

//         tradePosts.push(
//             TradePost(msg.sender, _tokenAddress, _tokenAmount, _price)
//         );
//         tradePostsLength++; // Increment tradePostsLength
//     }

//     function getUserTokens() external view returns (address[] memory) {
//         return userTokens;
//     }

//     function getTradePostsLength() external view returns (uint256) {
//         return tradePosts.length;
//     }

//     function getAllPosts() external view returns (TradePost[] memory) {
//         return tradePosts;
//     }

//     function getSpecificPost(uint256 index) external view returns (TradePost memory) {
//         return tradePosts[index];
//     }
// }
