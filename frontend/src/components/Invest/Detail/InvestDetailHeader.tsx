import {
  Box,
  Center,
  Image,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import TmpImg from "../../../assets/invest-poster-tmp-img.jpg";
import { useEffect, useState } from "react";
import { GetFundingResponse } from "../../../type/invest.interface";

interface Props {
  fundingData: GetFundingResponse;
}

export const InvestDetailHeader = ({ fundingData }: Props) => {
  // statusBadge: 진행중, 모집종료, 정산완료
  const [statusBadge, setStatusBadge] = useState("");
  // 색깔
  const [statusColor, setStatusColor] = useState("blue.300");
  // 밝기 정도
  const [brightness, setBrightness] = useState("brightness(100%)");

  //categoryBadge:
  const [categoryBadge, setCategoryBadge] = useState("");

  //진행률
  const progress = parseFloat(
    ((fundingData.nowCoinCount / fundingData.goalCoinCount) * 100).toFixed(1)
  );

  //오늘 날짜
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: string = ("0" + (1 + today.getMonth())).slice(-2);
  const day: string = ("0" + today.getDate()).slice(-2);

  //오늘 날짜 yyyy-mm-dd
  const date: string = year + "-" + month + "-" + day;

  //모집 종료 디데이 구하기
  const oldDate = new Date(fundingData.recruitEnd);
  const newDate = new Date(date);
  //getTime()으로 밀리세컨드 값 차이를 구한 뒤
  const diff = Math.abs(newDate.getTime() - oldDate.getTime());
  //(1000 * 60 * 60 * 24) - 1일 밀리세컨드 값 - 로 나누면 날짜 값을 구할 수 있음
  const dateDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));

  //상태가 바뀔 때마다
  useEffect(() => {
    switch (fundingData.progressStatus) {
      case "RECRUITMENT_STATUS":
        setStatusColor("blue.300");
        setBrightness("brightness(100%)");
        setStatusBadge("진행중");
        break;
      case "PENDING_SETTLEMENT":
        setStatusColor("gray.500");
        setBrightness("brightness(70%)");
        setStatusBadge("모집종료");
        break;
      case "RECRUITMENT_FAILED":
        setStatusColor("gray.500");
        setBrightness("brightness(70%)");
        setStatusBadge("모집종료");
        break;
      case "SETTLED":
        setStatusColor("blue.200");
        setBrightness("brightness(50%)");
        setStatusBadge("정산완료");
        break;
    }
  }, [fundingData.progressStatus]);

  //카테고리 바뀔 때마다
  useEffect(() => {
    switch (fundingData.category) {
      case "SHOW":
        setCategoryBadge("공연");
        break;
      case "EXHIBITION":
        setCategoryBadge("전시");
        break;
      case "MOVIE":
        setCategoryBadge("영화");
        break;
    }
  }, [fundingData.category]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pb={5}
      borderBottom={"1px solid"}
      borderBottomColor={"gray.300"}
    >
      <Image
        src={fundingData.poster}
        height={230}
        w={"100%"}
        objectFit="cover"
        filter={brightness}
      />
      <Box w={"100%"} display="flex" px={4} mx={2} mt={3} mb={4}>
        <Box
          maxH={7}
          backgroundColor="white"
          border={"1px solid"}
          borderColor={"gray.200"}
          borderRadius={17}
          px={3}
          py={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow={"base"}
          mr={3}
        >
          <Text fontSize={12}>{categoryBadge}</Text>
        </Box>

        <Text fontSize={17} as={"b"} flex={1}>
          {fundingData.name}
        </Text>
      </Box>
      <Center display={"flex"} w={"100%"} gap={10} px={3} pb={3}>
        <Center display="flex" flexDirection={"column"}>
          <Center fontSize={14}>현재 구매된 조각</Center>
          <Center>
            <Box fontSize={22} pr={2}>
              {fundingData.nowCoinCount}
            </Box>
            <Box fontSize={12}>조각</Box>
          </Center>
        </Center>
        <Center display="flex" flexDirection={"column"}>
          <Center fontSize={14}>투자자</Center>
          <Center>
            <Box fontSize={22} pr={2}>
              (받아오기)
            </Box>
            <Box fontSize={12}>명</Box>
          </Center>
        </Center>
        <Center display="flex" flexDirection={"column"}>
          <Center fontSize={14}>남은 시간</Center>
          <Center fontSize={22}>D-{dateDiff}</Center>
        </Center>
      </Center>
      <Box display={"flex"} alignItems={"center"} w={"100%"} px={7}>
        <Progress
          value={progress}
          size={"md"}
          sx={{
            width: "100%", // 너비를 100%로 설정하여 부모 컨테이너를 꽉 채우도록 함
            "& > div": {
              backgroundColor: `${statusColor}`, // 진행 막대의 색상을 직접 지정
            },
          }}
        />
        <Text fontSize={14} ml={5} color={"gray.500"}>
          {progress}%
        </Text>
      </Box>
    </Box>
  );
};
