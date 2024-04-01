import React, { useState, useEffect } from "react";
import Web3 from "web3";
import IERC20ABI from "./Contract/ArtcoinContract.json";

const web3 = new Web3((window as any).ethereum);

interface Props {
  tokenAmount: number;
  account: string;
  onMintSuccess: (transactionHash: string) => void;
  onMintError: (error: Error) => void;
}

export const handleMintTokens = async ({
  tokenAmount,
  account,
  onMintSuccess,
  onMintError,
}: Props) => {
  try {
    const artTokenContractAddress =
      "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"; // ART 토큰의 스마트 계약 주소
    const artTokenContract = new web3.eth.Contract(
      IERC20ABI.abi,
      artTokenContractAddress
    );

    // 토큰 민트
    const transaction = await artTokenContract.methods
      .mintTokens(tokenAmount)
      .send({ from: account });

    onMintSuccess(transaction.transactionHash);
  } catch (error) {
    console.error("토큰 민트 중 오류 발생:", error);
    onMintError(error);
  }
};
