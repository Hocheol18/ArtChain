import React, { useState, useEffect } from "react";
import ArtCoinABI from "./Contract/ArtcoinContract.json";
import ReceiveArtCoinABI from "./Contract/ReceiveArtCoinContract.json";
// require 말고 이렇게 import 해야한다.
import Web3 from 'web3';

const web3 = new Web3((window as any).ethereum);

// Artcoin address
const ArtCoincontractAddress = "0xB80a551604E49a912590bBd1fb79Bb1dE27A263E";
// Contract address
const ContractAddress = "0xB1EE6a825c7c555D37ce5877763ad540947e1983"

const App: React.FC = () => {
  const [account, setAccount] = useState<string>("");

  // MetaMask와 연결하는 함수
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      // MetaMask가 설치되어 있는지 확인
      try {
        // 사용자 계정에 접근 권한 요청
        const accounts: string[] = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]); // 첫 번째 계정을 상태에 저장
      } catch (error) {
        console.error("연결에 실패했습니다.", error);
      }
    } else {
      alert("MetaMask를 설치해주세요!");
    }
  };

  // 페이지 로드 시 MetaMask 연결 상태 확인
  useEffect(() => {
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

  const transferTokens = async () => {
    if (!(window as any).ethereum || !account) {
      alert("지갑을 연결해주세요");
      return;
    }
    
    const ArtCoincontract = new web3.eth.Contract(ArtCoinABI.abi, ArtCoincontractAddress);
    const ReceiveArtCoincontract = new web3.eth.Contract(ReceiveArtCoinABI.abi, ContractAddress);
    const amount = web3.utils.toWei("10", "ether"); 

    await ArtCoincontract.methods.approve(ContractAddress, amount).send({from: account});
  
    try {
      await ReceiveArtCoincontract.methods
        .fundToken(account , amount)
        .send({ from: account})
        
      console.log("Transfer successful");
      
    } catch (error) {
      console.error("Transfer failed", error);
    }

    // await ReceiveArtCoincontract.methods.newCoins("0xffF4E063ee89306c81db1c43FFa741f6F4917362").call().then((res) => console.log(res)).catch((err) => console.log(err))
  };

  return (
    <div className="App">
      <header className="App-header">
        {account ? (
          <p>계정: {account}</p>
        ) : (
          <button onClick={connectWallet}>MetaMask 연결</button>
        )}
        <button onClick={transferTokens}>토큰 전송</button>
      </header>
    </div>
  );
};

export default App;
