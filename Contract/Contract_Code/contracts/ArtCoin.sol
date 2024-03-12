// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 
contract ArtcoinContract is ERC20 {
    constructor() ERC20("ArtCoin", "ART") {
        _mint(msg.sender, 1 * 10**18); 
    }

    // 토큰 민트
    function mintTokens(uint256 _Supply) public {
        _mint(msg.sender, _Supply * 10**18);
    }

    // 토큰 소각
    function burnTokens(uint256 burnAmount) public {
        _burn(msg.sender, burnAmount);
    }

    // 토큰 전송
    function transferToken(address to, uint256 amount) public {
        _transfer(msg.sender, to, amount);
    }
}

