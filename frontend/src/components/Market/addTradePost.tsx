import { useEffect, useState } from "react";
import TokenMarketplaceABI from "../../Contract/TokenMarketplace.json";
import Web3 from "web3";
const web3 = new Web3((window as any).ethereum);
import { convertToInteger } from "../Common/convertToInteger";
import useUserInfo from "../../store/useUserInfo";
import IERC20ABI from "../../Contract/IERC20.json";

const TokenMarketplaceContractAddress =
  "0xb889a3f84DD29f49C75e673cB1f0114cd3c27601"; // TokenMarketplace 스마트 계약 주소

const fetchTokenList = async () => {
  const [tokenList, setTokenList] = useState<
    { address: string; price: string; amount: string }[]
  >([]);
  useEffect(() => {
    console.log(tokenList);
  }, [tokenList]);
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

export const addTradePost = async (
  tokenAddress: string,
  tokenAmount: string,
  price: string
) => {
  const { userInfo } = useUserInfo();
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
      .send({ from: userInfo.walletAddress });
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
      .send({ from: userInfo.walletAddress });
    fetchTokenList();
  } catch (error) {
    console.error("거래 게시글을 추가하는 중 오류가 발생했습니다.", error);
  }
};
