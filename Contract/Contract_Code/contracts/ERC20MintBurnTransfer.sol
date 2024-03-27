// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 조각 코인 민팅
contract ERC20MintBurnTransferContract is ERC20 {
    uint256 public initialSupply; // 총 발행량
    address public artPieceToken;
    // constructor로 묶은 이유는 총 발행량은 정해져 있기 때문
    // 한 번만 민트
    constructor(
        string memory coinName, // 코인 이름 (ex. "ArtCoin")
        string memory ticker, // 토큰 이름 줄여서 (ex. "ART")
        uint256 _initialSupply // 총 발행량
    ) ERC20(coinName, ticker) {
        initialSupply = _initialSupply * 10 ** 18;
        _mint(msg.sender, initialSupply);
        artPieceToken = address(this);
    }

    function burnTokens(uint256 burnAmount) public {
        _burn(msg.sender, burnAmount * 10 ** 18);
    }

    function transferToken(address to, uint256 amount) public {
        transfer(to, amount * 10 ** 18);
    }
}
