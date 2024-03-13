// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FundRaising {
    mapping(address => uint256) public refunds; // 환불 address 1:1로 맵핑
    mapping(address => uint256) public newCoins; // 새로운 소각 1:1로 맵핑

    uint256 public totalApply; // 총 발행량
    address public owner; // 컨트랙트 호출자
    uint256 public raisedAmount; // 총 모금 발행량 갯수
    uint256 public finishTime;
    address[] private listOfContributors; // ArtCoin 넣은 사람 address

    constructor(uint256 _time, uint256 _totalApply) {
        owner = msg.sender;
        raisedAmount = 0;
        finishTime = block.timestamp + (_time * 1 minutes);
        totalApply = _totalApply * 10 ** 18;
    }

    function distributeFunds() external {
        require(msg.sender == owner, "must be owner");
        require(block.timestamp > finishTime, "Not time OVER");
        require(raisedAmount >= (totalApply * 4) / 5, "not goal");

        for (uint i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = newCoins[contributor];

            if (amount > 0) {
                newCoins[contributor] = 0;
                payable(contributor).transfer(amount);
            }
        }
    }

    function refundDistribute() external {
        require(raisedAmount < (totalApply * 4) / 5, "80% is not over");
        require(block.timestamp > finishTime, "Not over");

        for (uint i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = refunds[contributor];

            if (amount > 0) {
                refunds[contributor] = 0;
                payable(contributor).transfer(amount);
            }
        }
    }
}
