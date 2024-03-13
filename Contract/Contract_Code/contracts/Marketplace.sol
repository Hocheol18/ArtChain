// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ArtCoin.sol";

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
            tokenSell: _tokenSell,
            amountSell: _amountSell,
            tokenBuy: _tokenBuy,
            amountBuy: _amountBuy,
            seller: msg.sender,
            executed: false
        }));

        emit TradeCreated(trades.length - 1, msg.sender);
    }

    function executeTrade(uint256 tradeIndex) public {
        Trade storage trade = trades[tradeIndex];
        require(!trade.executed, "Trade already executed");

        // IERC20 인터페이스를 사용하여 토큰 컨트랙트로 캐스팅
        IERC20 tokenSell = IERC20(trade.tokenSell);
        IERC20 tokenBuy = IERC20(trade.tokenBuy);

        // 토큰 판매자로부터 토큰을 받아오고, 교환 대상자에게 토큰을 전송합니다.
        require(tokenSell.transferFrom(trade.seller, msg.sender, trade.amountSell), "Failed to transfer sell token");
        require(tokenBuy.transferFrom(msg.sender, trade.seller, trade.amountBuy), "Failed to transfer buy token");

        trade.executed = true;
    }

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
