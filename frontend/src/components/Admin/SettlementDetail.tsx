import {
  AspectRatio,
  Button,
  Flex,
  Select,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetSettlementDetail } from "../../api/Settlement";
import { useParams } from "react-router-dom";
import { getSettlementDetailList } from "../../type/settlement.interface";
import { formatNumberWithComma } from "../Common/Comma";

export default function SettlementDetail() {
  const id = useParams() as { id: string };
  const [value, setValues] = useState<getSettlementDetailList>({
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
  useEffect(() => {
    GetSettlementDetail({ settlementId: Number(id.id) }).then((res) =>
      setValues(res)
    );
  }, []);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <Flex direction={"column"} px={5}>
        <Flex
          borderY={"1px solid"}
          borderColor={"gray.200"}
          direction={"column"}
        >
          <Text as={"b"} fontSize={"22"} py={3}>
            {value.entName}
          </Text>
          <Text as={"b"} fontSize={"28"} py={3}>
            {value.fundingTitle}
          </Text>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            정산 금액
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            {formatNumberWithComma(value.settlementPrice)} 원
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            입금 날짜
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            {value.depositDate}
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            정산 자료
          </Text>
          <AspectRatio w="100px" ratio={4 / 3}>
            <Image src={value.settlementFile} objectFit="cover" />
          </AspectRatio>
        </Flex>
      </Flex>

      <Flex px={6} direction={"row-reverse"}>
        <Button
          bgColor={"blue.300"}
          textColor={"white"}
          ml={4}
          px={6}
          _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
          _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
          _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
        >
          확인
        </Button>
        <Select placeholder="선택" width={"20"}>
          <option value="option1">승인</option>
          <option value="option2">반려</option>
        </Select>
      </Flex>
    </>
  );
}
