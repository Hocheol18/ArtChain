import React, { useState, useEffect } from "react";
import Web3 from "web3";
import TokenMarketplaceABI from "../Contract/TokenMarketplace.json";
import IERC20ABI from "../Contract/IERC20.json";

const web3 = new Web3((window as any).ethereum);

const TokenMarketplaceContractAddress =
  "0xb889a3f84DD29f49C75e673cB1f0114cd3c27601"; // TokenMarketplace 스마트 계약 주소

const Test: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  const [tokenList, setTokenList] = useState<
    { address: string; price: string; amount: string }[]
  >([]);
  const [selectedTradePostIndex, setSelectedTradePostIndex] = useState<
    number | null
  >(null);
  const [newTradePostData, setNewTradePostData] = useState<{
    tokenAddress: string;
    tokenAmount: string;
    price: string;
  }>({
    tokenAddress: "",
    tokenAmount: "",
    price: "",
  });

  useEffect(() => {
    // MetaMask 계정 연결 확인
    if ((window as any).ethereum) {
      (window as any).ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        });
    }
  }, []);

  // MetaMask 연결 함수
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const accounts: string[] = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("연결에 실패했습니다.", error);
      }
    } else {
      alert("MetaMask를 설치해주세요!");
    }
  };

  // 거래 게시글 선택
  const selectTradePost = (index: number) => {
    setSelectedTradePostIndex(index);
  };
  // 거래하기 함수 수정
  const buyToken = async () => {
    if (selectedTradePostIndex === null) return;
    const selectedTradePost = tokenList[selectedTradePostIndex];
    try {
      const marketplaceContract = new web3.eth.Contract(
        TokenMarketplaceABI.abi,
        TokenMarketplaceContractAddress
      );
      const artTokenContractAddress =
        "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"; // ART 토큰의 스마트 계약 주소
      const artTokenContract = new web3.eth.Contract(
        IERC20ABI.abi,
        artTokenContractAddress
      );

      // 사용자가 스마트 계약에 대해 특정 양의 토큰을 승인하도록 요청
      const approveTx = await artTokenContract.methods
        .approve(
          TokenMarketplaceContractAddress,
          convertToInteger(selectedTradePost.price)
        )
        .send({ from: account });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(
        approveTx.transactionHash
      );
      if (approveTxReceipt.status) {
        console.log("토큰 승인 완료");

        // 토큰 구매 트랜잭션 보내기
        const buyTokenTx = await marketplaceContract.methods
          .buyToken(selectedTradePostIndex)
          .send({ from: account });
        console.log("토큰 구매 성공", buyTokenTx);
      } else {
        console.error("토큰 승인 실패");
      }
    } catch (error) {
      console.error("거래 처리 중 오류가 발생했습니다.", error);
    }
  };

  // 거래 게시글 추가
  const addTradePost = async (
    tokenAddress: string,
    tokenAmount: string,
    price: string
  ) => {
    try {
      const marketplaceContract = new web3.eth.Contract(
        TokenMarketplaceABI.abi,
        TokenMarketplaceContractAddress
      );

      // 토큰 주소가 올바른 형식인지 확인
      if (!web3.utils.isAddress(tokenAddress)) {
        console.error("유효하지 않은 토큰 주소입니다.");
        return;
      }

      // 사용자가 입력한 값을 그대로 사용
      const integerPrice = price;
      const integerTokenAmount = tokenAmount;

      // 토큰 컨트랙트 생성
      const tokenContract = new web3.eth.Contract(IERC20ABI.abi, tokenAddress);

      // 거래 게시글 추가 전에 사용자가 특정 양의 토큰을 스마트 계약에 대해 승인하도록 요청
      const approveTx = await tokenContract.methods
        .approve(
          TokenMarketplaceContractAddress,
          convertToInteger(integerTokenAmount)
        )
        .send({ from: account });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(
        approveTx.transactionHash
      );
      if (!approveTxReceipt.status) {
        console.error("토큰 승인에 실패했습니다.");
        return;
      }

      // 거래 게시글 추가
      await marketplaceContract.methods
        .addTradePost(tokenAddress, integerTokenAmount, integerPrice)
        .send({ from: account });
      fetchTokenList();
    } catch (error) {
      console.error("거래 게시글을 추가하는 중 오류가 발생했습니다.", error);
    }
  };

  // 가격과 토큰의 양을 정수로 변환하는 함수
  const convertToInteger = (value: string) => {
    // 부동 소수점 수로 변환
    const floatValue = parseFloat(value);
    // 10^18을 곱하여 처리
    const integerValue = Math.floor(floatValue * 10 ** 18).toString();
    return integerValue;
  };

  // 토큰 목록 가져오기
  const fetchTokenList = async () => {
    try {
      const marketplaceContract = new web3.eth.Contract(
        TokenMarketplaceABI.abi,
        TokenMarketplaceContractAddress
      );
      const tradePosts: {
        tokenAddress: string;
        tokenAmount: BigInt;
        price: BigInt;
      }[] = await marketplaceContract.methods.getAllPosts().call();
      const tokenListData: {
        address: string;
        amount: string;
        price: string;
      }[] = [];
      for (let i = 0; i < tradePosts.length; i++) {
        const tradePost = tradePosts[i];

        tokenListData.push({
          address: tradePost.tokenAddress,
          amount: tradePost.tokenAmount.toString(),
          price: tradePost.price.toString(),
        });
      }
      setTokenList(tokenListData);
    } catch (error) {
      console.error("토큰 목록을 가져오는 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {account ? (
          <p>계정: {account}</p>
        ) : (
          <button onClick={connectWallet}>MetaMask 연결</button>
        )}

        {/* 마켓플레이스에 상장된 토큰 목록 표시 */}
        <div>
          <h2>상장된 토큰 목록</h2>
          <ul>
            {tokenList.map((token, index) => (
              <li key={index}>
                <p>주소: {token.address}</p>
                <p>가격: {token.price}</p>
                <p>수량: {token.amount}</p>
                <button onClick={() => selectTradePost(index)}>구매하기</button>
              </li>
            ))}
          </ul>
          <button onClick={fetchTokenList}>토큰 목록 업데이트</button>
        </div>

        {/* 새 거래 게시글 추가 양식 */}
        <div>
          <h2>새 거래 게시글 추가</h2>
          <input
            type="text"
            placeholder="토큰 주소"
            value={newTradePostData.tokenAddress}
            onChange={(e) =>
              setNewTradePostData({
                ...newTradePostData,
                tokenAddress: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="토큰 양"
            value={newTradePostData.tokenAmount}
            onChange={(e) =>
              setNewTradePostData({
                ...newTradePostData,
                tokenAmount: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="가격"
            value={newTradePostData.price}
            onChange={(e) =>
              setNewTradePostData({
                ...newTradePostData,
                price: e.target.value,
              })
            }
          />
          <button
            onClick={() =>
              addTradePost(
                newTradePostData.tokenAddress,
                newTradePostData.tokenAmount,
                newTradePostData.price
              )
            }>
            거래 게시글 추가
          </button>
        </div>

        {selectedTradePostIndex !== null && (
          <div>
            <h3>선택된 거래 게시글</h3>
            <button onClick={buyToken}>거래하기</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Test;
