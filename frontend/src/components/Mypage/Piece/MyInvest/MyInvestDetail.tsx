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
import { GetMyIntegratedList } from "../../../../type/mypage.interface";
import { Link } from "react-router-dom";

interface Props {
  myIntegratedData: GetMyIntegratedList;
}

export default function MyInvestDetail({ myIntegratedData }: Props) {
  // statusBadge: 진행중, 모집종료, 정산완료
  const [statusBadge, setStatusBadge] = useState("");
  // 색깔
  const [statusColor, setStatusColor] = useState("blue.300");

  //상태가 바뀔 때마다
  useEffect(() => {
    switch (myIntegratedData.fundingProgressStatus) {
      case "RECRUITMENT_STATUS":
        setStatusColor("blue.300");
        setStatusBadge("진행중");
        break;
      case "PENDING_SETTLEMENT":
        setStatusColor("gray.500");
        setStatusBadge("모집종료");
        break;
      case "SETTLED":
        setStatusColor("blue.200");
        setStatusBadge("정산완료");
        break;
    }
  }, [myIntegratedData]);

  return (
    <>
      <Flex
        direction={"column"}
        border={"1px solid"}
        borderColor={"gray.300"}
        borderRadius={"3xl"}
        px={5}
        pb={5}
        as={Link}
        to={`/invest/${myIntegratedData.fundingId}`}
      >
        <Flex py={4}>
          <Image
            src={myIntegratedData.fundingPoster}
            h={100}
            w={65}
            objectFit="cover"
          />

          <Flex
            direction={"column"}
            pl={3}
            gap={0.5}
            justifyContent={"space-around"}
          >
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
            <Box fontWeight={"bold"}>{myIntegratedData.fundingTitle}</Box>
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
                <Box>{myIntegratedData.pieceCount} 조각</Box>
              </Box>
              <Box flex={1}></Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex direction={"column"} flex={1}>
            <Box fontWeight={"bold"}>지분율</Box>
            <Box>{myIntegratedData.shareholdingRatio}%</Box>
          </Flex>
          <Flex direction={"column"} flex={1}>
            <Box fontWeight={"bold"}>1조각 평단가</Box>
            <Box>{myIntegratedData.pieceUnitPrice} 아트</Box>
          </Flex>
          <Flex direction={"column"} flex={1}>
            <Box fontWeight={"bold"}>정산일</Box>
            <Box>
              {myIntegratedData.settlementDate.split("-")[0]}.
              {myIntegratedData.settlementDate.split("-")[1]}.
              {myIntegratedData.settlementDate.split("-")[2]}
            </Box>
          </Flex>
        </Flex>
        {myIntegratedData.fundingProgressStatus === "SETTLED" ? (
          <Flex mt={2}>
            <Flex direction={"column"} flex={1}>
              <Box fontWeight={"bold"}>정산 코인</Box>
              <Box>{myIntegratedData.settlementCoin} 아트</Box>
            </Flex>
            <Flex direction={"column"} flex={1}>
              <Box fontWeight={"bold"}>최종 수익률</Box>
              <Box>{myIntegratedData.returnRate}%</Box>
            </Flex>
            <Flex flex={1}></Flex>
          </Flex>
        ) : null}
      </Flex>
    </>
  );
}
