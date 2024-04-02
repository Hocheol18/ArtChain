import { AspectRatio, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../Common/Navigation/BottomButtonNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PutFundingAllow, getFundding } from "../../api/invest";
import { useCustomToast } from "../Common/Toast";
import { GetFundingResponse } from "../../type/invest.interface";
import { formatNumberWithComma } from "../Common/Comma";
import Web3 from "web3";
import IERC20ABI from "../../Contract/IERC20.json";
import ReceiveArtCoinContractABI from "../../Contract/ReceiveArtCoinContract.json";
import useSettlementInfo from "../../store/useSettlementInfo";
import { convertToInteger } from "../Common/convertToInteger";
import useUserInfo from "../../store/useUserInfo";

export default function ProjectConfirm() {
  const id = useParams() as { id: string };
  const { settlementInfo } = useSettlementInfo();
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();
  const toastFunction = useCustomToast();
  const [values, setValues] = useState<GetFundingResponse>();
  const web3 = new Web3((window as any).ethereum);

  useEffect(() => {
    getFundding({ fundingId: id.id })
      .then((res) => {
        setValues(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const success = () => {
    toastFunction("승인 성공", true);
    navigate(-1);
  };

  const settlement = async () => {
    const fundingContract = new web3.eth.Contract(
      ReceiveArtCoinContractABI.abi,
      ReceviceArtCoinContractAddress
    );
    const artTokenContract = new web3.eth.Contract(IERC20ABI.abi, "");

    // need to props
    for (let i = 0; i < settlementInfo.data.length; i++) {
      await artTokenContract.methods
        .approve(
          settlementInfo.data[i].pieceOwnerWalletAddress,
          convertToInteger(
            settlementInfo.data[i].settlementCoinCount.toString()
          )
        )
        .send({ from: userInfo.metamask });
    }

    await fundingContract.methods
      .settlement(ReceviceArtCoinContractAddress, 총발행량, settlementInfo.data)
      .send({ from: userInfo.metamask });
  };

  const ProjectConfirm = (allowStatus: boolean) => {
    PutFundingAllow({
      fundingId: Number(id.id),
      allowStatus: allowStatus,
    }).then(() => {
      success();
    });
  };

  return (
    <>
      <Box p={"1.5rem"} mb={"3rem"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text as={"b"} fontSize={"1.5rem"}>
              프로젝트 등록
            </Text>
          </Box>
          <Button
            mt={"0.1rem"}
            width={"50px"}
            h={"35px"}
            bgColor={"blue.300"}
            textColor={"white"}
            fontSize={"sm"}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
            onClick={() => {
              ProjectConfirm(false);
            }}
          >
            반려
          </Button>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 이름
          </Text>
          <Text mt={"0.5rem"} fontSize={"1rem"}>
            {values?.name}
          </Text>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            포스터
          </Text>

          <AspectRatio w="130px" ratio={1}>
            <Image src={values?.poster} />
          </AspectRatio>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"} w={"100%"}>
          <Text as={"b"} fontSize={"1rem"}>
            카테고리
          </Text>
          <Box mt={"0.5rem"}>{values?.category}</Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            목표 금액
          </Text>
          <Box mt={"0.5rem"}>
            {formatNumberWithComma(Number(values?.goalCoinCount))}
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            일정
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            {values?.scheduleList.map((data, index) => (
              <Text key={index} fontSize={"1rem"}>
                {data.scheduleDate}
                {data.scheduleName}
              </Text>
            ))}
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 설명 이미지
          </Text>

          <AspectRatio w="130px" ratio={1}>
            <Image src={values?.descriptionImg} />
          </AspectRatio>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            매출 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            {values?.saleList.map((data, index) => (
              <Text key={index} fontSize={"1rem"}>
                {data.mainVariety}
                {data.subVariety}
              </Text>
            ))}
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비용 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            {values?.costList.map((data, index) => (
              <Text key={index} fontSize={"1rem"}>
                {data.mainVariety}
              </Text>
            ))}
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            총 예산 규모
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>
              {formatNumberWithComma(Number(values?.totalBudget))}
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            객단가
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>
              {formatNumberWithComma(Number(values?.unitPrice))}
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            추정 손익분기점
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>
              {formatNumberWithComma(Number(values?.bep))}
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            예상 수익률
          </Text>
          <Flex justifyContent={"space-between"}>
            <Box ml={"0.2rem"} mt={"0.5rem"}>
              {values?.expectedReturnList.map((data, index) => (
                <Text key={index} fontSize={"1rem"}>
                  {data.spectatorNum}
                </Text>
              ))}
            </Box>
          </Flex>
        </Box>
      </Box>
      <BottomButtonNavbar
        text="컨펌"
        category=""
        hanldeButton={() => {
          ProjectConfirm(true);
        }}
      />
    </>
  );
}
