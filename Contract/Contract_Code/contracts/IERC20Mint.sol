// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ArtchainERC20MintBurnable is ERC20 {
    constructor(uint256 initialSupply) ERC20("Artchain", "ART") {
        _mint(msg.sender, initialSupply);
    }

    function burnTokens(uint256 burnAmount) public {
        _burn(msg.sender, burnAmount);
    }

    function transferToken(address to, uint256 amount) public {
        transfer(to, amount);
    }
}