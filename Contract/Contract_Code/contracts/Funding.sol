// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

contract FundRaising {
    uint256 public targetAmount;
    address public owner;
    mapping(address => uint256) public donations;

    uint256 public raisedAmount = 0;
    uint256 public finishTime = block.timestamp + 2 weeks;

    constructor(uint256 _targetAmount) {
        targetAmount = _targetAmount;
        owner = msg.sender;
    }

    receive() external payable {
        require(block.timestamp < finishTime, "Over");
        donations[msg.sender] += msg.value;
        raisedAmount += msg.value;
    }

    function withdrawDonations() external {
        require(msg.sender == owner, "Not fund participate");
        require(raisedAmount >= (targetAmount * 4) / 5, "80% is over");
        require(block.timestamp > finishTime, "Not over");
        payable(owner).transfer(raisedAmount);        
    }

    function refund() external {
        require(donations[msg.sender] > 0, "Not Refund");
        require(raisedAmount < (targetAmount * 4) / 5, "80% is not over");
        require(block.timestamp > finishTime, "Not over");
        payable(owner).transfer(raisedAmount);
        uint256 toRefund = donations[msg.sender];
        donations[msg.sender] = 0;
        payable(msg.sender).transfer(toRefund);        
    }

}