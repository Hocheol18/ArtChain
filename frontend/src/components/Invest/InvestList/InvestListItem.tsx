import React, { useEffect, useState } from "react";
import { Box, Image, Text, Progress } from "@chakra-ui/react";
import tmpImg from "../../../assets/invest-poster-tmp-img.jpg";
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
  // ing, end, complete
  const [statusBadge, setStatusBadge] = useState("");
  const [statusColor, setStatusColor] = useState("blue.300");
  const [brightness, setBrightness] = useState("brightness(100%)");

  //진행률
  const progress = parseFloat(
    ((nowCoinCount / goalCoinCount) * 100).toFixed(1)
  );

  const today = new Date();

  useEffect(() => {
    switch (progressStatus) {
      case "RECRUITMENT_STATUS":
        setStatusColor("blue.300");
        setBrightness("brightness(100%)");
        setStatusBadge("진행중");
        break;
      case "PENDING_SETTLEMENT" || "RECRUITMENT_FAILED":
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
  }, []);

  return (
    <div>
      <Box
        as={Link}
        to="/invest/1"
        border={"1px solid"}
        borderColor={"gray.100"}
        borderRadius="15"
        display="flex"
        boxShadow={"lg"}
      >
        <Image
          src={tmpImg}
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
              <Text fontSize={12}>{category}</Text>
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
            <Text fontSize={14} ml={5} as={"b"} color={"gray.500"}>
              {progress} %
            </Text>
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
              D-4
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
