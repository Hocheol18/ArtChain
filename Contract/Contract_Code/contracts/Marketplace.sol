// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ArtCoin.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract Marketplace {
    struct Trade {
        address tokenSell;
        uint256 amountSell;
        address tokenBuy;
        uint256 amountBuy;
        address seller;
        bool executed;
    }

    Trade[] public trades;
    event TradeCreated(uint256 indexed tradeIndex, address seller);

    function createTrade(address _tokenSell, uint256 _amountSell, address _tokenBuy, uint256 _amountBuy) public {
        
        trades.push(Trade({
            tokenSell: _tokenSell, // 팔고자 하는 토큰, 조각 컨트랙트
            amountSell: _amountSell, // 팔고자 하는 토큰의 양, 조각의 양
            tokenBuy: _tokenBuy, // 구매할 때 사용하는 토큰, 아트 코인
            amountBuy: _amountBuy, // 구매할 때 사용하는 토큰의 양, 아트 코인의 양
            seller: msg.sender,
            executed: false
        }));

        emit TradeCreated(trades.length - 1, msg.sender);
    }

    function executeTrade(uint256 tradeIndex) public {
        Trade storage trade = trades[tradeIndex]; // 저장소에 저장된 거래의 정보를 인덱스를 통해 가져옴
        require(!trade.executed, "Trade already executed"); // 만약 거래가 존재한다면 통과 x

        // IERC20 인터페이스를 사용하여 토큰 컨트랙트로 캐스팅
        IERC20 tokenSell = IERC20(trade.tokenSell); // 조각 코인을 컨트랙트로 캐스팅
        IERC20 tokenBuy = IERC20(trade.tokenBuy); // 아트 코인을 컨트랙트로 캐스팅

        // 토큰 판매자로부터 토큰을 받아오고, 교환 대상자에게 토큰을 전송합니다.
        // 즉, 조각 코인과 아트 코인의 교환 과정이 해당 코드로써 실행됨
        require(tokenSell.transferFrom(trade.seller, msg.sender, trade.amountSell), "Failed to transfer sell token");
        require(tokenBuy.transferFrom(msg.sender, trade.seller, trade.amountBuy), "Failed to transfer buy token");

        trade.executed = true;
    }

    // 인덱스에 따라 거래들의 정보를 가져옴
    function getTrade(uint256 tradeIndex) public view returns (address, uint256, address, uint256, address, bool) {
        Trade storage trade = trades[tradeIndex];
        return (trade.tokenSell, trade.amountSell, trade.tokenBuy, trade.amountBuy, trade.seller, trade.executed);
    }

    function getAllTrades() public view returns (address[] memory, uint256[] memory, address[] memory, uint256[] memory, address[] memory, bool[] memory) {
        uint256 tradeCount = trades.length;

        address[] memory tokenSells = new address[](tradeCount);
        uint256[] memory amountSells = new uint256[](tradeCount);
        address[] memory tokenBuys = new address[](tradeCount);
        uint256[] memory amountBuys = new uint256[](tradeCount);
        address[] memory sellers = new address[](tradeCount);
        bool[] memory executedArray = new bool[](tradeCount);

        for (uint256 i = 0; i < tradeCount; i++) {
            Trade memory trade = trades[i];
            tokenSells[i] = trade.tokenSell;
            amountSells[i] = trade.amountSell;
            tokenBuys[i] = trade.tokenBuy;
            amountBuys[i] = trade.amountBuy;
            sellers[i] = trade.seller;
            executedArray[i] = trade.executed;  
        }

        return (tokenSells, amountSells, tokenBuys, amountBuys, sellers, executedArray);
    }

}
