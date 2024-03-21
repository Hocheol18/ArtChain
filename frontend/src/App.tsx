import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import TokenMarketplaceABI from "./Contract/TokenMarketplace.json";
import IERC20ABI from "./Contract/IERC20.json";

const web3 = new Web3((window as any).ethereum);

const TokenMarketplaceContractAddress = "0x2764719828B9e8e7eC7287E549BB6A7705572161"; // TokenMarketplace 스마트 계약 주소

const App: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  const [tokenList, setTokenList] = useState<{ address: string, price: string, amount: string }[]>([]);
  const [selectedTradePostIndex, setSelectedTradePostIndex] = useState<number | null>(null);
  const [newTradePostData, setNewTradePostData] = useState<{ tokenAddress: string, tokenAmount: string, price: string }>({
    tokenAddress: "",
    tokenAmount: "",
    price: ""
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

  // 거래 게시글 추가 함수
  const addNewTradePost = async () => {
    const { tokenAddress, tokenAmount, price } = newTradePostData;
    if (!tokenAddress || !tokenAmount || !price) {
      console.error("모든 필드를 입력하세요.");
      return;
    }
    const tokenAmountNumber = parseFloat(tokenAmount);
    const priceNumber = parseFloat(price);
    if (isNaN(tokenAmountNumber) || isNaN(priceNumber)) {
      console.error("올바른 숫자를 입력하세요.");
      return;
    }
    await addTradePost(tokenAddress, tokenAmountNumber, priceNumber);
  };

  // 마켓플레이스에 상장된 토큰 목록 가져오기
  const fetchTokenList = async () => {
    try {
      const marketplaceContract = new web3.eth.Contract(TokenMarketplaceABI.abi, TokenMarketplaceContractAddress);
      const tradePosts: { tokenAddress: string, tokenAmount: BigInt, price: BigInt }[] = await marketplaceContract.methods.getAllPosts().call();
      const tokenListData: { address: string, amount: string, price: string }[] = [];
      for (let i = 0; i < tradePosts.length; i++) {
        const tradePost = tradePosts[i];
        tokenListData.push({ address: tradePost.tokenAddress, amount: tradePost.tokenAmount.toString(), price: tradePost.price.toString() });
      }
      setTokenList(tokenListData);
    } catch (error) {
      console.error("토큰 목록을 가져오는 중 오류가 발생했습니다.", error);
    }
  };

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

  const buyToken = async () => {
    if (selectedTradePostIndex === null) return;
    const selectedTradePost = tokenList[selectedTradePostIndex];
    try {
      const marketplaceContract = new web3.eth.Contract(TokenMarketplaceABI.abi, TokenMarketplaceContractAddress);
      const artTokenContractAddress = "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"; // ART 토큰의 스마트 계약 주소
      const artTokenContract = new web3.eth.Contract(IERC20ABI.abi, artTokenContractAddress);
  
      // 구매자의 ART 토큰에 대한 승인 트랜잭션 보내기
      const approveTx = await artTokenContract.methods.approve(TokenMarketplaceContractAddress, selectedTradePost.price).send({ from: account });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(approveTx.transactionHash);
      if (approveTxReceipt.status) {
        console.log("ART 토큰 승인 성공");
  
        // 토큰 구매 트랜잭션 보내기
        const buyTokenTx = await marketplaceContract.methods.buyToken(selectedTradePostIndex).send({ from: account });
        console.log("토큰 구매 성공", buyTokenTx);
      } else {
        console.error("ART 토큰 승인 실패");
      }
    } catch (error) {
      console.error("거래 처리 중 오류가 발생했습니다.", error);
    }
  };
  
  



  // 거래 게시판 글 올리기
  const addTradePost = async (tokenAddress: string, tokenAmount: number, price: number) => {
    try {
      const marketplaceContract = new web3.eth.Contract(TokenMarketplaceABI.abi, TokenMarketplaceContractAddress);
  
      // // 상장되지 않은 코인인 경우에만 상장하도록 확인
      // if (!tokenList.some(token => token.address === tokenAddress)) {
      //   // 스마트 계약의 listToken 함수를 호출하여 코인 상장
      //   await marketplaceContract.methods.listToken(tokenAddress).send({ from: account });
      // }
  
      // 거래 게시글 추가
      await marketplaceContract.methods.addTradePost(tokenAddress, tokenAmount, price).send({ from: account });
      fetchTokenList();
    } catch (error) {
      console.error("거래 게시글을 추가하는 중 오류가 발생했습니다.", error);
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
          <input type="text" placeholder="토큰 주소" value={newTradePostData.tokenAddress} onChange={(e) => setNewTradePostData({ ...newTradePostData, tokenAddress: e.target.value })} />
          <input type="text" placeholder="토큰 양" value={newTradePostData.tokenAmount} onChange={(e) => setNewTradePostData({ ...newTradePostData, tokenAmount: e.target.value })} />
          <input type="text" placeholder="가격" value={newTradePostData.price} onChange={(e) => setNewTradePostData({ ...newTradePostData, price: e.target.value })} />
          <button onClick={addNewTradePost}>거래 게시글 추가</button>
        </div>
  
        {/* 거래하기 버튼 */}
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

export default App;
