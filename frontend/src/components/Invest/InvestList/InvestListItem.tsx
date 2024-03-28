import React, { useEffect, useState } from "react";
import { Box, Image, Text, Progress, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  entId: number;
  name: string;
  poster: string;
  goalCoinCount: number;
  nowCoinCount: number;
  contractAddress: string;
  category: string;
  progressStatus: string;
  recruitEnd: string;
  recruitStart: string;
  settlement: string;
}

export const InvestListItem = ({
  id,
  entId,
  name,
  poster,
  goalCoinCount,
  nowCoinCount,
  contractAddress,
  category,
  recruitEnd,
  recruitStart,
  settlement,
  progressStatus,
}: Props) => {
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
    ((nowCoinCount / goalCoinCount) * 100).toFixed(1)
  );

  const path = `/invest/${id}`;

  //오늘 날짜
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: string = ("0" + (1 + today.getMonth())).slice(-2);
  const day: string = ("0" + today.getDate()).slice(-2);

  //오늘 날짜 yyyy-mm-dd
  const date: string = year + "-" + month + "-" + day;

  //모집 종료 디데이 구하기
  const oldDate = new Date(recruitEnd);
  const newDate = new Date(date);
  //getTime()으로 밀리세컨드 값 차이를 구한 뒤
  const diff = Math.abs(newDate.getTime() - oldDate.getTime());
  //(1000 * 60 * 60 * 24) - 1일 밀리세컨드 값 - 로 나누면 날짜 값을 구할 수 있음
  const dateDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));

  //상태가 바뀔 때마다
  useEffect(() => {
    switch (progressStatus) {
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
  }, [progressStatus]);

  //카테고리 바뀔 때마다
  useEffect(() => {
    switch (category) {
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
  }, [category]);

  return (
    <div>
      <Box
        as={Link}
        to={path}
        border={"1px solid"}
        borderColor={"gray.100"}
        borderRadius="15"
        display="flex"
        boxShadow={"lg"}
      >
        <Image
          src={poster}
          alt={poster}
          w={120}
          minH={150}
          mr={3}
          objectFit="cover"
          borderTopLeftRadius="15"
          borderBottomLeftRadius="15"
          filter={brightness}
        />
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          pr={3}
          justifyContent={"space-around"}
        >
          <Box display="flex" flexDirection="row">
            <Box
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
              mr={1}
            >
              <Text fontSize={12}>{categoryBadge}</Text>
            </Box>
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
              <Text fontSize={12} as={"b"} color={"white"}>
                {statusBadge}
              </Text>
            </Box>
          </Box>

          <Text fontSize={15} as={"b"}>
            {name}
          </Text>
          <Box display={"flex"} alignItems={"center"}>
            <Progress
              value={progress}
              size={"sm"}
              sx={{
                width: "100%", // 너비를 100%로 설정하여 부모 컨테이너를 꽉 채우도록 함
                "& > div": {
                  backgroundColor: `${statusColor}`, // 진행 막대의 색상을 직접 지정
                },
              }}
            />
            <Center minW={12} fontSize={14} ml={5} as={"b"} color={"gray.500"}>
              {progress} %
            </Center>
          </Box>
          <Box display="flex" justifyContent={"space-between"}>
            <Text color={"gray.500"} fontSize={14}>
              총 발행 조각
            </Text>
            <Text color={"gray.500"} fontSize={14} as={"b"}>
              {goalCoinCount} 조각
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text color={"gray.500"} fontSize={14}>
              모집 종료
            </Text>
            <Text color={"gray.500"} fontSize={14} as={"b"}>
              D-
              {dateDiff}
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
