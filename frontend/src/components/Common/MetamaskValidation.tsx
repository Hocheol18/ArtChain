import React from "react";
import MetaMask from "../Login/Metamask";

export default async function MetamaskValidation(walletAddress: string) {
  const res = await MetaMask();
  if (res.toLowerCase() !== walletAddress.toLowerCase()) {
    return "메마오류";
  }
  return "유효성검사성공";
}
