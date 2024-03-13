// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20MintBurnTransferContract is ERC20 {
    // constructor로 묶은 이유는 총 발행량은 정해져 있기 때문
    constructor(
        string memory coinName, // 코인 이름 (ex. "ArtCoin")
        string memory ticker, // 줄여서 (ex. "ART")
        uint256 initialSupply // 총 발행량
    ) ERC20(coinName, ticker) {
        _mint(msg.sender, initialSupply);
    }

    function burnTokens(uint256 burnAmount) public {
        _burn(msg.sender, burnAmount);
    }

    function transferToken(address to, uint256 amount) public {
        transfer(to, amount);
    }
}
