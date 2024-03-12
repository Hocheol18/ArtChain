// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

contract FundRaising {
    uint256 public targetAmount;
    address public owner;
    mapping(address => uint256) public fundings;
    mapping(address => uint256) public fundingArts;
    uint256 public raisedAmount;
    uint256 public finishTime;
    address[] private listOfContributors;
    uint256 public totalApply;

    constructor(uint256 _targetAmount, uint256 _time, uint256 _totalApply) {
        targetAmount = _targetAmount;
        owner = msg.sender;
        raisedAmount = 0;
        finishTime = block.timestamp + (_time * 1 minutes);
        totalApply = _totalApply;
    }

    receive() external payable {
        if (fundings[msg.sender] == 0) {
            listOfContributors.push(msg.sender);
        }
        require(block.timestamp < finishTime, "Over");
        fundings[msg.sender] += msg.value;
        raisedAmount += msg.value;
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

    // function withdrawDonations() external {
    //     require(msg.sender == owner, "Not fund participate");
    //     require(raisedAmount >= (targetAmount * 4) / 5, "80% is over");
    //     require(block.timestamp > finishTime, "Not over");
    //     payable(owner).transfer(raisedAmount);
    // }

    // function refund() external {
    //     require(donations[msg.sender] > 0, "Not Refund");
    //     require(raisedAmount < (targetAmount * 4) / 5, "80% is not over");
    //     require(block.timestamp > finishTime, "Not over");
    //     payable(owner).transfer(raisedAmount);
    //     uint256 toRefund = donations[msg.sender];
    //     donations[msg.sender] = 0;
    //     payable(msg.sender).transfer(toRefund);
    // }
}
