import React, { useState } from 'react';
import Web3 from 'web3';
import FundRaisingContractABI from './Contract/FundRaisingContract.json'; // 스마트 계약 ABI 파일

const FundRaisingPage: React.FC = () => {
    
    const [account, setAccount] = useState<string>('');
    const [tokenAmount, setTokenAmount] = useState<string>('');
    const web3 = new Web3((window as any).ethereum);
    const FundRaisingContractAddress = "0x0097AB14Ed735ad7D15127E02EBC51647f3ebE84";
    const artCoinAddress = "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB";
    const contract = new web3.eth.Contract(
        FundRaisingContractABI.abi,
        FundRaisingContractAddress
    );

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

    // 투자 함수
    const invest = async () => {
        // 사용자가 스마트 계약에 대해 특정 양의 토큰을 승인하도록 요청
      const approveTx = await contract.methods
      .approve(FundRaisingContractAddress, convertToInteger(tokenAmount))
      .send({ from: account });
  const approveTxReceipt = await web3.eth.getTransactionReceipt(
      approveTx.transactionHash
  );
  if (approveTxReceipt.status) {
      console.log("토큰 승인 완료");

      // 토큰 구매 트랜잭션 보내기
      const investTx = await contract.methods
          .fund(FundRaisingContractAddress, tokenAmount)
          .send({ from: account });
      console.log("토큰 구매 성공", investTx);
  } else {
      console.error("토큰 승인 실패");
  }
    };
    // 가격과 토큰의 양을 정수로 변환하는 함수
    const convertToInteger = (value: string) => {
        // 부동 소수점 수로 변환
        const floatValue = parseFloat(value);
        // 10^18을 곱하여 처리
        const integerValue = Math.floor(floatValue * (10 ** 18)).toString();
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
}

export default FundRaisingPage;
