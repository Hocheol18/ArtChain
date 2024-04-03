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

    struct FundInfo {
        address investor;
        uint256 amount;
    }

    address public owner; // 컨트랙트 호출자
    uint256 public raisedAmount; // 총 모금 발행량 갯수
    uint256 public finishTime; // 마감 시간
    address[] public listOfContributors; // ArtCoin 넣은 사람 address
    address public artTokenAddress = 0xE5856017Db7b4023383c867Ea65bc178B7F023C1;

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
        require(msg.sender == owner, "Only owner can call this function");
        require(block.timestamp > finishTime, "Fundraising is not over yet");
        require(
            raisedAmount >= (initialSupply * 4) / 5,
            "Fundraising goal not reached"
        );

        // ART 토큰 컨트랙트의 인스턴스 생성
        IERC20 artToken = IERC20(artTokenAddress);

        // 컨트랙트 내의 모든 ART 토큰을 owner에게 전송
        uint256 balance = artToken.balanceOf(address(this));
        require(balance > 0, "No ART tokens to distribute");
        artToken.transfer(owner, balance);

        for (uint256 i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = newCoins[contributor];

            if (amount > 0) {
                newCoins[contributor] = 0;
                _transfer(owner, contributor, amount); // 현재는 분배를 1:1로 진행
            }
        }
    }

    // 분배 함수
    function distributeFundWithoutCondition() external {
        require(msg.sender == owner, "Only owner can call this function");
        require(
            raisedAmount >= (initialSupply * 4) / 5,
            "Fundraising goal not reached"
        );

        // ART 토큰 컨트랙트의 인스턴스 생성
        IERC20 artToken = IERC20(artTokenAddress);

        // 컨트랙트 내의 모든 ART 토큰을 owner에게 전송
        uint256 balance = artToken.balanceOf(address(this));
        require(balance > 0, "No ART tokens to distribute");
        artToken.transfer(owner, balance);

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
    function refundContributors() external {
        require(msg.sender == owner, "Only owner can call this function");
        require(block.timestamp > finishTime, "Fundraising is not over yet");
        require(
            raisedAmount < (initialSupply * 4) / 5,
            "80% fundraising goal has been reached"
        );

        // ART 토큰 컨트랙트의 인스턴스 생성
        IERC20 artToken = IERC20(artTokenAddress);

        for (uint256 i = 0; i < listOfContributors.length; i++) {
            address contributor = listOfContributors[i];
            uint256 amount = refunds[contributor];

            if (amount > 0) {
                // 컨트랙트 내의 ART 토큰을 contributor에게 환불
                artToken.transfer(contributor, amount);
                // 환불된 금액을 0으로 설정
                refunds[contributor] = 0;
            }
        }
    }

    function settlement(
        address _contractAddress,
        uint256 _totalInvested,
        FundInfo[] memory fundInfos
    ) external {
        IERC20 artToken = IERC20(artTokenAddress);
        ERC20 fundToken = ERC20(_contractAddress);

        for (uint256 i = 0; i < fundInfos.length; i++) {
            artToken.transfer(
                fundInfos[i].investor,
                fundInfos[i].amount * (10 ** 18)
            );
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

    function getRaisedAmount() public view returns (uint256) {
        return raisedAmount;
    }

    function getInitialSupply() public view returns (uint256) {
        return initialSupply;
    }
}
