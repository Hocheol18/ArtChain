import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import puzzle from "../../../assets/puzzle.svg";
import {
  buyMarketTokenInterface,
  getMarketSellingDisplayListInterface,
} from "../../../type/market.interface";
import { convertToInteger } from "../../Common/convertToInteger";
import Web3 from "web3";
import TokenMarketplaceABI from "../../../Contract/TokenMarketplace.json";
import IERC20ABI from "../../../Contract/IERC20.json";
import useUserInfo from "../../../store/useUserInfo";
import { useState } from "react";

export default function SellList(params: getMarketSellingDisplayListInterface) {
  const { userInfo } = useUserInfo();
  const web3 = new Web3((window as any).ethereum);
  const [selectedTradePostIndex, setSelectedTradePostIndex] = useState<
    number | undefined
  >();
  const [postList, setPostList] = useState<buyMarketTokenInterface[]>([]);

  const buyToken = async () => {
    if (selectedTradePostIndex === undefined) return;
    const selectedTradePost = postList[selectedTradePostIndex];
    try {
      const marketplaceContract = new web3.eth.Contract(
        TokenMarketplaceABI.abi,
        "0x77A6C65AD9530482fBC59751545Fd9E7cabfCD75"
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
          "0x77A6C65AD9530482fBC59751545Fd9E7cabfCD75", // 마켓 컨트랙트 주소
          convertToInteger(selectedTradePost.price)
        )
        .send({ from: userInfo.metamask });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(
        approveTx.transactionHash
      );
      if (approveTxReceipt.status) {
        console.log("토큰 승인 완료");

        // 토큰 구매 트랜잭션 보내기
        const buyTokenTx = await marketplaceContract.methods
          .buyToken(selectedTradePostIndex)
          .send({ from: userInfo.metamask });
        console.log("토큰 구매 성공", buyTokenTx);
      } else {
        console.error("토큰 승인 실패");
      }
    } catch (error) {
      console.error("거래 처리 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <>
      <Center>
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
                onClick={buyToken}
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
