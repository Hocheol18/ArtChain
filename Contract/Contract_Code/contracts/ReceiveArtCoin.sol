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
        uint256 _time, // 시간 상속
        address _tokenAddress // 토큰 컨트랙트
    ) FundRaisingContract(name, symbol, _initialSupply, _time) {
        mainWalletaddress = 0xDaBD9681C6fA9C2675f883FB67a1485038087DD3;
        fundingToken = IERC20(_tokenAddress);
    }

    event NewCoinsUpdated(address indexed _from, uint256 _amount);

    // ts에서 실행, button 이벤트를 주어야 실행가능함.
    function fundToken(address _from, uint256 _amount) external {
        require(block.timestamp < finishTime, "Time Over");
        require(_amount > 0, "You need to donate a positive amount of tokens");
        require(
            _amount + raisedAmount <= initialSupply,
            "Exceeds initial supply"
        );
        bool success = fundingToken.transferFrom(
            _from,
            mainWalletaddress,
            _amount
        );
        require(success, "Token transfer failed");
        raisedAmount += _amount;
        newCoins[_from] += _amount;

        if (!hasContributed[_from]) {
            listOfContributors.push(_from);
            hasContributed[_from] = true;
        }

        emit NewCoinsUpdated(_from, _amount);
    }
}
