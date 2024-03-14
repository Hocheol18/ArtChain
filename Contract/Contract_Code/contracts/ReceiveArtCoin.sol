// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)
pragma solidity ^0.8.20;

import "./FundRaising.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// FundRaisingContract 상속
contract ReceiveArtCoinContract is FundRaisingContract {
    IERC20 public fundingToken;
    address public contractAddress;
    uint256 public initialSupply;

    // indexed :: event 객체 내에서 사용할 수 있는 키워드, event를 검색 또는 필터링하는 데 사용할 수 있게 만든다.
    // 동시성 문제 해결, 이로 인해 동시에 컨트랙트에 접근한 사람이 같은 데이터를 볼 수 있음.
    event TokenReceived(address indexed funder, uint256 amount);

    constructor(
        string memory name,
        string memory symbol,
        uint256 _initialSupply, // 초기 조각 총발행량
        uint256 _time, // 시간 상속
        address _tokenAddress // 토큰 컨트랙트
        // address _contractAddress // 생성된 컨트랙트 주소
    ) FundRaisingContract(name, symbol, _initialSupply, _time) {
        fundingToken = IERC20(_tokenAddress);
        initialSupply = _initialSupply;
    }

    // ts에서 실행, button 이벤트를 주어야 실행가능함.
    function fundToken(address _from, address _to, uint256 _amount) external {
        require(_amount > 0, "You need to donate a positive amount of tokens");
        require(_amount + raisedAmount <= initialSupply);

        _transfer(_from, _to, _amount * 10 ** 18);

        // Event execute
        emit TokenReceived(msg.sender, _amount);
        newCoins[msg.sender] += _amount;
    }
}
