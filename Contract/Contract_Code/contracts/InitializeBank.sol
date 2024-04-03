// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

contract InitializeBankContract {
    // 이더를 받을 수 있는 주소
    function sendEther(address payable recipient) external payable {
        // 0.01 ETH로 고정된 이더를 전송하도록 설정
        require(msg.value == 0.01 ether, "Must send exactly 0.01 ETH");

        // 이더를 수신자에게 전송
        recipient.transfer(msg.value);
    }
}
