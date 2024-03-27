// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import "./ERC20MintBurnTransfer.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FundRaisingContract is ERC20MintBurnTransferContract {
    event TokenReceived(
        address indexed sender,
        address indexed tokenAddress,
        uint256 amount
    );

    mapping(address => uint256) public refunds; // 환불 address 1:1로 맵핑
    mapping(address => uint256) public newCoins; // 새로운 소각 1:1로 맵핑
   
    address public owner; // 컨트랙트 호출자
    uint256 public raisedAmount; // 총 모금 발행량 갯수
    uint256 public finishTime; // 마감 시간
    address[] public listOfContributors; // ArtCoin 넣은 사람 address

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        uint256 _time
    ) ERC20MintBurnTransferContract(name, symbol, initialSupply) {
        owner = msg.sender;
        raisedAmount = 0;
        finishTime = block.timestamp + (_time * 1 minutes);
    }

    // 나중에 컨트랙트 상에서 전송해야 하므로 이더 받는 함수
    receive() external payable {}


    // 분배 함수
    function distributeFund() external {
        require(msg.sender == owner, "Must be owner");
        require(block.timestamp > finishTime, "Not time OVER");
        require(raisedAmount >= (initialSupply * 4) / 5, "Not goal");

        for (uint256 i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = newCoins[contributor];

            if (amount > 0) {
                newCoins[contributor] = 0;
                _transfer(owner, contributor, amount); // 현재는 분배를 1:1로 진행
            }
        }
    }

    // 환불 함수
    function refundDistribute() external {
        require(raisedAmount < (initialSupply * 4) / 5, "80% is not over");
        require(block.timestamp > finishTime, "Not over");
        
        for (uint256 i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = refunds[contributor];
        // Transfer 가능?
        // transferFrom 해야하는 거 아님?
            if (amount > 0) {
                refunds[contributor] = 0;
                payable(contributor).transfer(amount);
            }
        }
    }

    function getAllContributor() public view returns (address[] memory) {
        uint256 length = listOfContributors.length;

        address[] memory investor = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            investor[i] = listOfContributors[i];
        }
        return investor;
    }

    function getRaisedAmount() public view returns (uint256){
        return raisedAmount;
    }

    function getInitialSupply() public view returns (uint256){
        return initialSupply;
    }
}
