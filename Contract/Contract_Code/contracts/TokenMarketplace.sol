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
                tradePost.seller,
                tradePost.price*(10**18)
            ),
            "Failed to approve token transfer"
        );

        // Transfer tokens from the buyer to this contract
        tokenContracts[artCoinAddress].transferFrom(
            msg.sender,
            tradePost.seller,
            tradePost.price*(10**18)
        );

        // Transfer the price of the token to the seller
        tokenContracts[tradePost.tokenAddress].transferFrom(
            address(this),
            msg.sender,
            tradePost.tokenAmount*(10**18)
        );
    }

    function addTradePost(
        address _tokenAddress,
        uint256 _tokenAmount,
        uint256 _price
    ) external {
        require(isTokenListed[_tokenAddress], "Token not listed");
        // require(
        //     // 내가 얼마나 많은 토큰을 인출할 수 있는지를 확인할 수 있음!
        //     // 즉, 아래의 로직은 스마트 컨트랙트 속에 보관 중인 토큰의 양 중 내가 사용할 수 있는 양이 충분한지 확인
        //     tokenContracts[_tokenAddress].allowance(
        //         msg.sender,
        //         address(this)
        //     ) >= _tokenAmount*(10**18),
        //     "Insufficient allowance for token"
        // );
        require(
            tokenContracts[_tokenAddress].approve(
                address(this),
                _tokenAmount*(10**18)
            ),
            "Insufficient approve for token"
        );

        // Transfer tokens from user to this contract
        require(
            tokenContracts[_tokenAddress].transferFrom(
                msg.sender, 
                address(this),
                _tokenAmount*(10**18)
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

    function getSpecificPost(uint256 index) external view returns (TradePost memory) {
        return tradePosts[index];
    }
}
