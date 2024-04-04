// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract TokenMarketplace {
    mapping(address => IERC20) public tokenContracts;
    
    address artCoinAddress = 0xE5856017Db7b4023383c867Ea65bc178B7F023C1;

    function buyToken(
        address _sellerAddress,
        address _tokenAddress,
        uint256 _tokenAmount,
        uint256 _price
    ) external {
        if (tokenContracts[artCoinAddress] == IERC20(address(0))) {
            // If the token contract is not registered, register it
            tokenContracts[artCoinAddress] = IERC20(artCoinAddress);
        }
        // Ensure that the buyer has approved this contract to spend the required tokens
        require(
            tokenContracts[artCoinAddress].approve(
                _sellerAddress,
                _price * (10 ** 18)
            ),
            "Failed to approve token transfer"
        );

        // Transfer tokens from the buyer to this contract
        tokenContracts[artCoinAddress].transferFrom(
            msg.sender,
            _sellerAddress,
            _price * (10 ** 18)
        );

        // Transfer the price of the token to the seller
        tokenContracts[_tokenAddress].transferFrom(
            address(this),
            msg.sender,
            _tokenAmount * (10 ** 18)
        );
    }

    function unListPost(address _tokenAddress, address _sellerAddress, uint256 _tokenAmount) external {
        if (
            tokenContracts[_tokenAddress] ==
            IERC20(address(0))
        ) {
            // If the token contract is not registered, register it
            tokenContracts[_tokenAddress] = IERC20(
                _tokenAddress
            );
        }
        tokenContracts[_tokenAddress].transferFrom(
            address(this),
            _sellerAddress,
            _tokenAmount * (10 ** 18)
        );
    }

    function addTradePost(
        address _tokenAddress,
        uint256 _tokenAmount
    ) external {
        // Check if the token contract is registered in the mapping
        if (tokenContracts[_tokenAddress] == IERC20(address(0))) {
            // If the token contract is not registered, register it
            tokenContracts[_tokenAddress] = IERC20(_tokenAddress);
        }
        require(
            tokenContracts[_tokenAddress].approve(
                address(this),
                _tokenAmount * (10 ** 18)
            ),
            "Insufficient approve for token"
        );

        // Transfer tokens from user to this contract
        require(
            tokenContracts[_tokenAddress].transferFrom(
                msg.sender,
                address(this),
                _tokenAmount * (10 ** 18)
            ),
            "Token transfer failed"
        );
    }
}
