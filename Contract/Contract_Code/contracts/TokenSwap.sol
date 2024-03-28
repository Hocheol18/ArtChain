// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSwap {
    IERC20 public token1;
    IERC20 public token2;

    constructor(address _token1, address _token2) {
        token1 = IERC20(_token1); // PCC
        token2 = IERC20(_token2); // ART
    }

    function swap(address to, uint256 amount) public {
        require(token1.transferFrom(msg.sender, address(this), amount), "Token 1 transfer failed");
        require(token2.transfer(to, amount), "Token 2 transfer failed");
    }
}
