import { Box, Image, Progress, Text } from "@chakra-ui/react";
import TmpImg from "../../../assets/invest-poster-tmp-img.jpg";
import { useState } from "react";

export const InvestDetailHeader = () => {
  const [statusColor, setStatusColor] = useState("blue.300");
  return (
    <div>
      <Box>
        <Image src={TmpImg} height={230} w={"100%"} objectFit="cover" />
        <Box display="flex" flexDirection={"row"}>
          <Box>공연</Box>
          <Box>제목</Box>
        </Box>
        <Box display="flex" flexDirection={"row"}>
          <Box display="flex" flexDirection={"column"}>
            <Box>구매조각</Box>
            <Box>22,500 조각</Box>
          </Box>
          <Box display="flex" flexDirection={"column"}>
            <Box>투자자</Box>
            <Box>182명</Box>
          </Box>
          <Box display="flex" flexDirection={"column"}>
            <Box>남은시간</Box>
            <Box>D-3</Box>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Progress
            value={80}
            size={"sm"}
            sx={{
              width: "100%", // 너비를 100%로 설정하여 부모 컨테이너를 꽉 채우도록 함
              "& > div": {
                backgroundColor: `${statusColor}`, // 진행 막대의 색상을 직접 지정
              },
            }}
          />
          <Text fontSize={14} ml={5} color={"gray.500"}>
            80%
          </Text>
        </Box>
      </Box>
    </div>
  );
};
