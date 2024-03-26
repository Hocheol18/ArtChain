import React, { useState, useEffect } from "react";
import Web3 from "web3";
import FundRaisingContractABI from "./Contract/FundRaisingContract.json"; // 스마트 계약 ABI 파일
import IERC20ABI from "./Contract/IERC20.json";

const FundRaisingPage: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  const [tokenAmount, setTokenAmount] = useState<string>("");
  const web3 = new Web3((window as any).ethereum);
  const FundRaisingContractAddress =
    "0x315576edD3B74896B0e8F25835a38d76af1bc437";
  const artTokenContractAddress = "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB";

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

  // MetaMask와 연결
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

  const invest = async () => {
    try {
      const fundingContract = new web3.eth.Contract(
        FundRaisingContractABI.abi,
        FundRaisingContractAddress
      );
      // 사용자가 스마트 계약에 대해 특정 양의 토큰을 승인하도록 요청
      const artTokenContract = new web3.eth.Contract(
        IERC20ABI.abi,
        artTokenContractAddress
      );
      // const tokenContract = new web3.eth.Contract(IERC20ABI.abi, tokenAddress);
      const approveTx = await artTokenContract.methods
        .approve(FundRaisingContractAddress, convertToInteger(tokenAmount))
        .send({ from: account });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(
        approveTx.transactionHash
      );
      if (approveTxReceipt.status) {
        console.log("토큰 승인 완료");
  
        const investTx = await fundingContract.methods
          .fund(convertToInteger(tokenAmount)) // 정수형으로 변환하여 전달
          .send({ from: account });
        console.log("토큰 투자 성공", investTx);
      } else {
        console.error("토큰 승인 실패");
      }
    } catch (error) {
      console.error("거래 처리 중 오류가 발생했습니다.", error);
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
  return (
    <div>
      <h1>Fundraising Page</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Connected Account: {account}</p>
      <p>Enter the amount of tokens you want to invest:</p>
      <input
        type="number"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(e.target.value)}
      />
      <button onClick={invest}>Invest</button>
    </div>
  );
};

export default FundRaisingPage;
