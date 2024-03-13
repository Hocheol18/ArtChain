// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)
pragma solidity ^0.8.20;

import "./Funding.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// FundRaising 상속
contract ReceiveArtCoin is FundRaising {
    IERC20 public fundingToken;
    address public contractAddress;

    // indexed의 의미 :: query에 저장할 때 인덱스 하기 쉬움
    event TokenReceived(address indexed donor, uint256 amount);

    constructor(
        uint256 _time,
        uint256 _totalApply,
        address _tokenAddress,
        address _contractAddress
    ) FundRaising(_time, _totalApply) {
        fundingToken = IERC20(_tokenAddress);
        contractAddress = _contractAddress;
    }

    receive() external payable {}

    fundingToken.approve(contractAddress, fundAmount);
    receiveArtCoin.fundToken(fundAmount);

    function fundToken(uint256 _amount) external {
        require(_amount > 0, "You need to donate a positive amount of tokens");
        require(_amount + raisedAmount <= totalApply);
        require(
            fundingToken.transferFrom(msg.sender, address(this), _amount),
            "Failed to transfer tokens"
        );

        // Donation Save
        emit TokenReceived(msg.sender, _amount);
        newCoins[msg.sender] += _amount;
    }
}
