// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MintBurnTransferContract is ERC20 {
    constructor(
        string memory name, 
        string memory symbol, 
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }

    // 토큰 소각
    function burnTokens(uint256 burnAmount) public {
        _burn(msg.sender, burnAmount);
    }

    // 토큰 전송
    function transferToken(address to, uint256 amount) public {
        transfer(to, amount);
    }
}
