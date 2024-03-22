// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract TokenMarketplace {
    mapping(address => IERC20) public tokenContracts;
    mapping(address => bool) public isTokenListed;
    struct TradePost {
        address seller;
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

        // Ensure that the buyer has approved this contract to spend the required tokens
        require(
            tokenContracts[artCoinAddress].approve(
                address(this),
                tradePost.price
            ),
            "Failed to approve token transfer"
        );

        // Transfer tokens from the buyer to this contract
        require(
            tokenContracts[tradePost.tokenAddress].transferFrom(
                msg.sender,
                tradePost.seller,
                tradePost.tokenAmount
            ),
            "Failed to transfer token"
        );

        // Transfer the price of the token to the seller
        require(
            tokenContracts[artCoinAddress].transferFrom(
                tradePost.seller,
                msg.sender,
                tradePost.price
            ),
            "Failed to transfer token payment to the seller"
        );
    }

    function addTradePost(
        address _tokenAddress,
        uint256 _tokenAmount,
        uint256 _price
    ) external {
        require(isTokenListed[_tokenAddress], "Token not listed");
        require(
            tokenContracts[_tokenAddress].allowance(
                msg.sender,
                address(this)
            ) >= _tokenAmount,
            "Insufficient allowance for token"
        );

        // Transfer tokens from user to this contract
        require(
            tokenContracts[_tokenAddress].transferFrom(
                msg.sender,
                address(this),
                _tokenAmount
            ),
            "Token transfer failed"
        );

        tradePosts.push(
            TradePost(msg.sender, _tokenAddress, _tokenAmount, _price)
        );
        tradePostsLength++; // Increment tradePostsLength
    }

    function getTradePostsLength() external view returns (uint256) {
        return tradePosts.length;
    }

    function getAllPosts() external view returns (TradePost[] memory) {
        return tradePosts;
    }
}
