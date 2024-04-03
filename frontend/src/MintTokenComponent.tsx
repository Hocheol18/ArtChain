import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import IERC20ABI from "./Contract/ArtcoinContract.json";

const web3 = new Web3((window as any).ethereum);

const TokenManagementComponent: React.FC = () => {
  const [tokenAmount, setTokenAmount] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [account, setAccount] = useState<string>("");
  const [transactionHash, setTransactionHash] = useState<string>("");

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

  const handleMintTokens = async () => {
    try {
      const artTokenContractAddress = "0xE5856017Db7b4023383c867Ea65bc178B7F023C1"; // ART 토큰의 스마트 계약 주소
      const artTokenContract = new web3.eth.Contract(
          IERC20ABI.abi,
          artTokenContractAddress
      );
      // 토큰 민트
      const transaction = await artTokenContract.methods
        .mintTokens(parseInt(tokenAmount))
        .send({ from: account });

      setStatus('토큰 민트 성공');
      setTransactionHash(transaction.transactionHash);
    } catch (error) {
      console.error('토큰 민트 중 오류 발생:', error);
      setStatus('토큰 민트 실패');
    }
  };

  const handleBurnTokens = async () => {
    try {
      const artTokenContractAddress = "0xE5856017Db7b4023383c867Ea65bc178B7F023C1"; // ART 토큰의 스마트 계약 주소
      const artTokenContract = new web3.eth.Contract(
          IERC20ABI.abi,
          artTokenContractAddress
      );
      // 토큰 민트
      const transaction = await artTokenContract.methods
        .burnTokens(parseInt(tokenAmount))
        .send({ from: account });

      setStatus('토큰 소각 성공');
      setTransactionHash(transaction.transactionHash);
    } catch (error) {
      console.error('토큰 소각 중 오류 발생:', error);
      setStatus('토큰 소각 실패');
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

        <div>
          <h2>토큰 관리 컴포넌트</h2>
          <div>
            <label>토큰 양:</label>
            <input
              type="number"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
            />
          </div>
          <button onClick={handleMintTokens}>토큰 민트</button>
          <div>{status}</div>
          {transactionHash && (
            <div>
              <p>트랜잭션 해시: {transactionHash}</p>
            </div>
          )}
          <div>
            <label>토큰 양:</label>
            <input
              type="number"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
            />
          </div>
          <button onClick={handleBurnTokens}>토큰 소각</button>
          <div>{status}</div>
          {transactionHash && (
            <div>
              <p>트랜잭션 해시: {transactionHash}</p>
            </div>
          )}
        </div>
        
      </header>
    </div>
  );
};

export default TokenManagementComponent;
