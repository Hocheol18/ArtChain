import {
  Box,
  Center,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import TmpImg from "../../../../assets/invest-poster-tmp-img.jpg";
import puzzle from "../../../../assets/puzzle.svg";
import CommonNotice from "../../Business/CommonNotice";
import { useEffect, useState } from "react";

interface Props {
  isNow: string;
}

export default function MyInvestDetail({ isNow }: Props) {
  // statusBadge: 진행중, 모집종료, 정산완료
  const [statusBadge, setStatusBadge] = useState("");
  // 색깔
  const [statusColor, setStatusColor] = useState("blue.300");

  //상태가 바뀔 때마다
  useEffect(() => {
    switch (isNow) {
      case "now":
        setStatusColor("blue.300");
        setStatusBadge("진행중");
        break;
      case "wait":
        setStatusColor("gray.500");
        setStatusBadge("모집종료");
        break;
      case "end":
        setStatusColor("blue.200");
        setStatusBadge("정산완료");
        break;
    }
  }, [isNow]);

  return (
    <>
      <Flex
        direction={"column"}
        border={"1px solid"}
        borderColor={"gray.300"}
        borderRadius={"3xl"}
        px={5}
        pb={5}
      >
        <Flex py={4}>
          <Image src={TmpImg} h={100} w={65} />

          <Flex direction={"column"} pl={3} gap={0.5}>
            <Flex>
              <Box
                backgroundColor={statusColor}
                borderRadius={17}
                px={3}
                py={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow={"base"}
              >
                <Text fontSize={12} color={"white"}>
                  {statusBadge}
                </Text>
              </Box>
              <Box flex={1}></Box>
            </Flex>
            <Box fontWeight={"bold"}>
              Fall Out Boy : 2024 Seoul sssa Concert sdfffffffffff
              sdfffffffffffdsf dsfsfsfsfsf
            </Box>
            <Flex>
              <Box
                display={"flex"}
                alignItems={"center"}
                backgroundColor={"blue.100"}
                color={"blue.300"}
                px={1}
                borderRadius={"md"}
              >
                <Image
                  src={puzzle}
                  w={22}
                  h={22}
                  filter={
                    "invert(19%) sepia(100%) saturate(1891%) hue-rotate(201deg) brightness(90%) contrast(99%)"
                  }
                />
                <Box>10 조각</Box>
              </Box>
              <Box flex={1}></Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex direction={"column"} flex={1}>
            <Box fontWeight={"bold"}>지분율</Box>
            <Box>88.89%</Box>
          </Flex>
          <Flex direction={"column"} flex={1}>
            <Box fontWeight={"bold"}>1조각 평단가</Box>
            <Box>3.5 아트</Box>
          </Flex>
          <Flex direction={"column"} flex={1}>
            <Box fontWeight={"bold"}>정산일</Box>
            <Box>2024.04.05(금)</Box>
          </Flex>
        </Flex>
        {isNow === "end" ? (
          <Flex mt={2}>
            <Flex direction={"column"} flex={1}>
              <Box fontWeight={"bold"}>정산 코인</Box>
              <Box>12,132 아트</Box>
            </Flex>
            <Flex direction={"column"} flex={1}>
              <Box fontWeight={"bold"}>최종 수익률</Box>
              <Box>24%</Box>
            </Flex>
            <Flex flex={1}></Flex>
          </Flex>
        ) : null}
      </Flex>
    </>
  );
}
