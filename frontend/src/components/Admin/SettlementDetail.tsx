import { Button, Flex, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetSettlementDetail, PutSettlementStatus } from "../../api/Settlement";
import { useParams } from "react-router-dom";
import { getSettlementDetailList } from "../../type/settlement.interface";
import { formatNumberWithComma } from "../Common/Comma";
import { useCustomToast } from "../Common/Toast";
import Web3 from "web3";
import ReceiveArtCoinContractABI from "../../Contract/ReceiveArtCoinContract.json";
import IERC20ABI from "../../Contract/ArtcoinContract.json";
import useSettlementInfo from "../../store/useSettlementInfo";
import useUserInfo from "../../store/useUserInfo";

export default function SettlementDetail() {
  const { userInfo } = useUserInfo();
  const id = useParams() as { id: string };
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const toastFunction = useCustomToast();
  const web3 = new Web3((window as any).ethereum);
  const [target, setTarget] = useState<{
    settlementId: number;
    status: string;
  }>({ settlementId: 0, status: "" });
  const { settlementInfo } = useSettlementInfo();

  interface FundInfo {
    investor: string;
    amount: number;
  }

  const dummylist: FundInfo[] = [
    {
      investor: "0xDaBD9681C6fA9C2675f883FB67a1485038087DD3",
      amount: 55,
    },
    {
      investor: "0x67F07AFaD0f1528391a0CF8C5058370114B262d6",
      amount: 44,
    },
  ];
  const CA = "0x74605e05a8f217f72B2D4FA8F534aD85C276d0CB";
  const TP = 90;
  const MW: string = "0xDaBD9681C6fA9C2675f883FB67a1485038087DD3";

  const [values, setValues] = useState<getSettlementDetailList>({
    id: 0,
    endId: 0,
    entName: "",
    fundingId: "",
    fundingTitle: "",
    settlementPrice: 0,
    returnRate: 0,
    depositDate: "",
    settlementFile: "",
    status: "",
  });

  const settlement = async () => {
    console.log(settlementInfo);
    settlementInfo.data.forEach((item, index) => {
      settlementInfo.data[index].settlementCoinCount = item.settlementCoinCount;
    });

    console.log(settlementInfo.data);

    const fundingContract = new web3.eth.Contract(
      ReceiveArtCoinContractABI.abi,
      // 펀딩 컨트랙트 주소
      // settlementInfo.fundingContractAddress
      CA
    );
    const artTokenContract = new web3.eth.Contract(
      IERC20ABI.abi,
      "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"
    );

    // need to props
    for (let i = 0; i < dummylist.length; i++) {
      await artTokenContract.methods
        .approve(
          dummylist[i].investor,
          dummylist[i].amount * 10 ** 18

          // settlementInfo.data[i].pieceOwnerWalletAddress,

          // settlementInfo.data[i].settlementCoinCount.toString()
        )
        .send({ from: MW });
    }

    await fundingContract.methods
      .settlement(CA, 10, dummylist)
      .send({ from: MW });
  };

  const successSettlement = () => {
    toastFunction("처리 완료되었습니다", true);
    settlement();
  };

  useEffect(() => {
    GetSettlementDetail({ settlementId: Number(id.id) }).then((res) =>
      setValues(res)
    );
  }, []);

  const handleButton = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTarget({ settlementId: Number(id.id), status: value });
  };

  useEffect(() => {
    if (target.settlementId && target.status) {
      setIsFilled(true);
    }
  }, [target]);

  return (
    <>
      <Flex direction={"column"} px={5}>
        <Flex
          borderY={"1px solid"}
          borderColor={"gray.200"}
          direction={"column"}
        >
          <Text as={"b"} fontSize={"22"} py={3}>
            {values.entName}
          </Text>
          <Text as={"b"} fontSize={"28"} py={3}>
            {values.fundingTitle}
          </Text>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            정산 금액
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            {formatNumberWithComma(values.settlementPrice)} 원
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            최종 수익률
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            {values.returnRate} %
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            입금 날짜
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            {values.depositDate}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            정산 자료
          </Text>
          <Text>{values.settlementFile.substring(0, 20)}</Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        mt={"1rem"}
        ml={"1rem"}
        mr={"1rem"}
      >
        <Select
          onChange={handleButton}
          placeholder="선택"
          width={"40%"}
          borderColor={"blue.400"}
        >
          <option value="ALLOW">승인</option>
          <option value="REJECT">반려</option>
        </Select>

        {isFilled ? (
          <Button
            bgColor={"blue.300"}
            textColor={"white"}
            width={"40%"}
            ml={4}
            px={6}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            onClick={() => {
              PutSettlementStatus(target)
                .then(() => {
                  successSettlement();
                })
                .catch((err) => console.log(err));
            }}
          >
            확인
          </Button>
        ) : (
          <Button
            bgColor={"gray.300"}
            textColor={"black"}
            width={"40%"}
            ml={4}
            px={6}
            _hover={{ bg: "gray.300" }} // 마우스 오버 시 색상
            _active={{ bg: "gray.300", borderColor: "gray.300" }} // 클릭 시 색상
            onClick={() => {
              PutSettlementStatus(target)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            }}
          >
            확인
          </Button>
        )}
      </Flex>
    </>
  );
}
