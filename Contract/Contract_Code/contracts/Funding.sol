// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FundRaising {
    uint256 public targetAmount;
    address public owner;
    mapping(address => uint256) public fundings;
    mapping(address => uint256) public fundingArts;
    uint256 public raisedAmount;
    uint256 public finishTime;
    address[] private listOfContributors;
    uint256 public totalApply;
    IERC20 public fundingToken;

    constructor(uint256 _targetAmount, uint256 _time, uint256 _totalApply) {
        targetAmount = _targetAmount;
        owner = msg.sender;
        raisedAmount = 0;
        finishTime = block.timestamp + (_time * 1 minutes);
        totalApply = _totalApply;
        fundingToken = IERC20(0x2DBB09E5A2e3b527449aac94740752e82CabDaCD);
    }

    function ArtCoinReceive(uint256 _amount) external {
        require(block.timestamp < finishTime, "Time Over");
        require(raisedAmount + _amount <= targetAmount, "exceed");
        require(fundingToken.transferFrom(msg.sender, address(this), _amount), "Token transfer Failed");
        if (fundings[msg.sender] == 0) {
            listOfContributors.push(msg.sender);
        }
        fundings[msg.sender] += _amount;
        raisedAmount += _amount;
    }

    function distributeFunds() external {
        require(msg.sender == owner, "must be owner");
        require(block.timestamp > finishTime, "Not time OVER");
        require(raisedAmount >= (targetAmount * 4) / 5, "not goal");

        for (uint i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = fundings[contributor];

            if (amount > 0) {
                fundings[contributor] = 0;
                payable(contributor).transfer(amount);
            }
        }
    }

    function refundDistribute() external {
        require(raisedAmount < (targetAmount * 4) / 5, "80% is not over");
        require(block.timestamp > finishTime, "Not over");

        for (uint i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = fundings[contributor];

            if (amount > 0) {
                fundings[contributor] = 0;
                payable(contributor).transfer(amount);
            }
        }
    }

}
