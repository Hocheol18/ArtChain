import { useState } from "react";
import { CommonTopBox } from "../components/ChargeAndExchange/CommonTopBox";
import { ArtExchange } from "../components/ChargeAndExchange/Exchange/ArtExchange";
import { History } from "../components/ChargeAndExchange/History";
import { Box, useDisclosure } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import Web3 from "web3";
import ArtcoinContractABI from "../Contract/ArtcoinContract.json";
import useUserInfo from "../store/useUserInfo";
import MetamaskValidation from "../components/Common/MetamaskValidation";
import { useCustomToast } from "../components/Common/Toast";
import { LoadingModal } from "../components/Common/LoadingModal";
import { PostCharge, getCoin } from "../api/coin";

export const Exchange = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userInfo, setUserInfo } = useUserInfo();
  const web3 = new Web3((window as any).ethereum);
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const toastFunction = useCustomToast();
  const [check, setCheck] = useState<string>("one");
  const [value, setValue] = useState<number>(0);
  const [url, setUrl] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  //처음 조회 함수
  getCoin()
    .then((res) => {
      updatedUserInfo(res);
    })
    .catch((err) => console.log(err));

  const updatedUserInfo = (res: any) => {
    const userinfo = userInfo;
    userinfo.walletBalance = res.data.walletBalance.toString();
    setUserInfo(userinfo);
  };

  const successList = (res: any) => {
    setIsSuccess(true);
    setUrl(`https://sepolia.etherscan.io/tx/${res.transactionHash}`);
    PostCharge({
      transactionHash: res.transactionHash,
      coinAmount: tokenAmount,
      currencyFlow: tokenAmount * 1000,
      inoutFlag: "환전",
    });
  };

  const handleBurnTokens = async () => {
    const res = await MetamaskValidation(userInfo.metamask);
    if (res === "메마오류") {
      toastFunction("처음 등록한 계정으로 연결해주세요", false);
    } else {
      try {
        onOpen();
        const artTokenContractAddress =
          "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"; // ART 토큰의 스마트 계약 주소
        const artTokenContract = new web3.eth.Contract(
          ArtcoinContractABI.abi,
          artTokenContractAddress
        );
        // 토큰 번
        await artTokenContract.methods
          .burnTokens(tokenAmount)
          .send({ from: userInfo.metamask })
          .then((res) => {
            toastFunction("환전되었습니다", true);
            setValue(tokenAmount);
            successList(res);
          });
      } catch (error) {
        toastFunction("오류가 발생했습니다", false);
      }
    }
  };

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };
  const handleGo = () => {
    onClose();
  };

  return (
    <>
      <LoadingModal
        headerText="환전 완료"
        successNum={value}
        successText="조각"
        isSuccess={isSuccess}
        isOpen={isOpen}
        onClose={onClose}
        url={url}
        handleGoWhere={() => {
          handleGo();
        }}
      />
      <Box>
        <CommonTopBox
          text1="아트 환전"
          text2="환전 내역"
          handleCheck={handleCheck}
          check={check}
        />

        {check === "one" ? (
          <ArtExchange
            TokenAmount={tokenAmount}
            setTokenAmount={setTokenAmount}
          />
        ) : (
          <History type="환전" />
        )}

        <BottomButtonNavbar
          text="환전하기"
          category=""
          hanldeButton={handleBurnTokens}
        />
      </Box>
    </>
  );
};
