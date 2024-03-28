// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ArtCoin.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Marketplace {
    address public marketWallet;

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

    function createTrade(
        address _tokenSell,
        uint256 _amountSell,
        address _tokenBuy,
        uint256 _amountBuy
    ) public {
        trades.push(
            Trade({
                tokenSell: _tokenSell, // 팔고자 하는 토큰, 조각 컨트랙트
                amountSell: _amountSell, // 팔고자 하는 토큰의 양, 조각의 양
                tokenBuy: _tokenBuy, // 구매할 때 사용하는 토큰, 아트 코인
                amountBuy: _amountBuy, // 구매할 때 사용하는 토큰의 양, 아트 코인의 양
                seller: msg.sender,
                executed: false
            })
        );

        emit TradeCreated(trades.length - 1, msg.sender);
    }

    function executeTrade(uint256 tradeIndex) public {
        Trade storage trade = trades[tradeIndex];
        require(!trade.executed, "Trade already executed");

        IERC20 tokenSell = IERC20(trade.tokenSell);
        IERC20 tokenBuy = IERC20(trade.tokenBuy);

        // 마켓플레이스 컨트랙트가 충분한 양의 토큰을 사용자의 계정에서 전송할 권한을 부여합니다.
        require(
            tokenSell.approve(address(this), trade.amountSell),
            "Failed to approve sell token"
        );

        // 아래 코드는 필요에 따라 주석 처리된 부분입니다.
        // require(tokenBuy.approve(address(this), trade.amountBuy), "Failed to approve buy token");

        // 아래 코드는 주석 처리된 부분을 추가하여 수정된 부분입니다.
        require(
            tokenBuy.approve(address(this), trade.amountBuy),
            "Failed to approve buy token"
        );

        require(
            tokenSell.transferFrom(trade.seller, msg.sender, trade.amountSell),
            "Failed to transfer sell token"
        );
        require(
            tokenBuy.transferFrom(msg.sender, trade.seller, trade.amountBuy),
            "Failed to transfer buy token"
        );

        trade.executed = true;
    }

    // 인덱스에 따라 거래들의 정보를 가져옴
    function getTrade(
        uint256 tradeIndex
    ) public view returns (address, uint256, address, uint256, address, bool) {
        Trade storage trade = trades[tradeIndex];
        return (
            trade.tokenSell,
            trade.amountSell,
            trade.tokenBuy,
            trade.amountBuy,
            trade.seller,
            trade.executed
        );
    }

    function getAllTrades()
        public
        view
        returns (
            address[] memory,
            uint256[] memory,
            address[] memory,
            uint256[] memory,
            address[] memory,
            bool[] memory
        )
    {
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

        return (
            tokenSells,
            amountSells,
            tokenBuys,
            amountBuys,
            sellers,
            executedArray
        );
    }
}
