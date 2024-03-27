// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)
pragma solidity ^0.8.20;

import "./FundRaising.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// FundRaisingContract 상속
contract ReceiveArtCoinContract is FundRaisingContract {
    IERC20 public fundingToken;
    address public mainWalletaddress; // 메인 지갑 주소
    mapping(address => bool) private hasContributed;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _initialSupply, // 초기 조각 총발행량
        uint256 _time // 시간 상속
        // address _tokenAddress // 토큰 컨트랙트
    ) FundRaisingContract(name, symbol, _initialSupply, _time) {
        mainWalletaddress = 0xDaBD9681C6fA9C2675f883FB67a1485038087DD3;
        fundingToken = IERC20(0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB);
    }

    event NewCoinsUpdated(address indexed _from, uint256 _amount);

    // ts에서 실행, button 이벤트를 주어야 실행가능함.
    function fundToken(uint256 _amount) external {
        require(block.timestamp < finishTime, "Time Over");
        require(_amount > 0, "You need to donate a positive amount of tokens");
        require(
            _amount*(10**18) + raisedAmount <= initialSupply,
            "Exceeds initial supply"
        );
        bool success = fundingToken.transferFrom(
            msg.sender,
            mainWalletaddress,
            _amount*(10**18)
        );
        require(success, "Token transfer failed");
        raisedAmount += _amount*(10**18);
        newCoins[msg.sender] += _amount*(10**18);
        refunds[msg.sender] += _amount*(10**18);
        if (!hasContributed[msg.sender]) {
            listOfContributors.push(msg.sender);
            hasContributed[msg.sender] = true;
        }

        emit NewCoinsUpdated(msg.sender, _amount*(10**18));
    }
}
