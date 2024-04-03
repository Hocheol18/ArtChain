import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import puzzle from "../../../assets/puzzle.svg";
import {
  buyContractCallInterfece,
  getMarketSellingDisplayListInterface,
} from "../../../type/market.interface";
import { convertToInteger } from "../../Common/convertToInteger";
import Web3 from "web3";
import TokenMarketplaceABI from "../../../Contract/TokenMarketplace.json";
import IERC20ABI from "../../../Contract/IERC20.json";
import useUserInfo, { userInfoType } from "../../../store/useUserInfo";
import { putMarketToken } from "../../../api/market";
import MetamaskValidation from "../../Common/MetamaskValidation";
import { useCustomToast } from "../../Common/Toast";
import { LoadingModal } from "../../Common/LoadingModal";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SellList(params: getMarketSellingDisplayListInterface) {
  const { userInfo, setUserInfo } = useUserInfo();
  const web3 = new Web3((window as any).ethereum);
  const toastFunction = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [url, setUrl] = useState<string | undefined>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();

  // 메타마스크 유효성 검사
  const Validation = async () => {
    const res = await MetamaskValidation(userInfo.metamask);
    if (res === "메마오류") {
      toastFunction("처음 등록한 계정으로 연결해주세요", false);
    } else {
      onOpen();
      buyToken({
        seller: params.sellerAddress,
        // 토큰 컨트랙트
        tokenAddress: params.contractAddress,
        tokenAmount: params.pieceCount,
        price: params.totalCoin,
      });
    }
  };

  const updateUserBalance = (
    prevUserInfo: userInfoType,
    tokenAmount: number
  ): userInfoType => {
    return {
      ...prevUserInfo,
      walletBalance: (
        parseInt(prevUserInfo.walletBalance) - tokenAmount
      ).toString(), // 지갑 잔액을 업데이트
    };
  };

  useEffect(() => {});

  // 토큰 구매
  const buyToken = async (data: buyContractCallInterfece) => {
    if (Number(userInfo.walletBalance) >= data.tokenAmount) {
      try {
        const marketplaceContract = new web3.eth.Contract(
          TokenMarketplaceABI.abi,
          "0x749d167DC58e496CA017cAafD1FBc12C2c394527"
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
            "0x749d167DC58e496CA017cAafD1FBc12C2c394527", // 마켓 컨트랙트 주소
            convertToInteger(data.price.toString())
          )
          .send({ from: userInfo.metamask });
        const approveTxReceipt = await web3.eth.getTransactionReceipt(
          approveTx.transactionHash
        );
        if (approveTxReceipt.status) {
          toastFunction("토큰 승인에 성공했습니다", true);

          // 토큰 구매 트랜잭션 보내기
          marketplaceContract.methods
            .buyToken(
              data.seller,
              data.tokenAddress,
              data.tokenAmount,
              data.price
            )
            .send({ from: userInfo.metamask })
            .then((res) =>
              putMarketToken(params.id, res.transactionHash)
                .then(() => {
                  setUrl(
                    `https://sepolia.etherscan.io/tx/${res.transactionHash}`
                  );

                  setValue(data.tokenAmount);
                  setIsSuccess(true);
                  setUserInfo(updateUserBalance(userInfo, data.tokenAmount));

                  toastFunction("구매 성공", true);
                })
                .catch((err) => console.log(err))
            );
        } else {
          toastFunction("토큰 승인에 실패하였습니다 다시 시도해주세요", false);
        }
      } catch (error) {
        navigate(-1);
        onClose();
        toastFunction("거래 처리 중 오류가 발생하였습니다.", false);
      }
    } else {
      toastFunction("아트 잔액이 부족합니다", false), navigate("../charge");
    }
  };

  // 등록 취소 함수
  const unListToken = async (data: buyContractCallInterfece) => {
    const marketplaceContract = new web3.eth.Contract(
      TokenMarketplaceABI.abi,
      "0x749d167DC58e496CA017cAafD1FBc12C2c394527"
    );
    const unListTx = await marketplaceContract.methods
      .unListPost(data.seller, data.tokenAddress, data.tokenAmount)
      .send({ from: userInfo.metamask });
    console.log("토큰 취소 성공", unListTx);
  };

  const handleGo = () => {
    window.location.reload();
    onClose();
  };

  return (
    <>
      <LoadingModal
        headerText="구매 완료"
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
      <Center>
        {/* <Button
          onClick={() => {
            unListToken({
              // TODO : 마켓 컨트랙트
              seller: "0xfDe370f3358c73A99D7e91a5F633E3FE22128966",
              tokenAddress: userInfo.metamask,
              tokenAmount: 1,
              price: 0,
            });
          }}
        >
          삭제
        </Button> */}
        <Box p={"1rem"}>
          <Box
            w={"160px"}
            h={"175px"}
            border={"1px"}
            borderColor={"gray.300"}
            borderRadius={"0.5rem"}
          >
            <Center
              w={"160px"}
              borderRadius={"0.5rem"}
              bgColor={"blue.100"}
              h={"70px"}
            >
              <Flex>
                <Image boxSize={"1.2rem"} src={puzzle}></Image>
                <Text
                  as={"b"}
                  color={"black.100"}
                  fontSize={"0.9rem"}
                  ml={"0.2rem"}
                >
                  {params.pieceCount} 조각
                </Text>
              </Flex>
            </Center>
            <Flex>
              <Flex
                minW={"75px"}
                maxW={"180px"}
                direction={"column"}
                p={"0.5rem"}
              >
                <Text fontSize={"0.7rem"}>총 가격</Text>
                <Text fontSize={"0.7rem"} mt={"0.1rem"}>
                  조각 당 가격
                </Text>
                <Text fontSize={"0.7rem"} mt={"0.1rem"}>
                  판매자 주소
                </Text>
              </Flex>
              <Flex
                minW={"75px"}
                maxW={"180px"}
                direction={"column"}
                p={"0.5rem"}
              >
                <Text as={"b"} fontSize={"0.7rem"}>
                  {params.totalCoin} 아트
                </Text>
                <Text as={"b"} fontSize={"0.7rem"} mt={"0.1rem"}>
                  {params.coinPerPiece} 아트
                </Text>
                <Text as={"b"} fontSize={"0.7rem"} mt={"0.1rem"}>
                  {params.sellerAddress.substring(0, 6)}...
                </Text>
              </Flex>
            </Flex>
            <Flex justifyContent={"center"}>
              <Box
                w={"140px"}
                border={"1px"}
                borderColor={"gray.300"}
                borderRadius={"0.5rem"}
                textAlign={"center"}
                bgColor={"blue.300"}
                onClick={() => {
                  Validation();
                }}
              >
                <Text as={"b"} fontSize={"0.8rem"} color={"white"}>
                  구매
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
}
