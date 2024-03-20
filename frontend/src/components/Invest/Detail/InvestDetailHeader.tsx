import {
  Box,
  Center,
  Image,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import TmpImg from "../../../assets/invest-poster-tmp-img.jpg";
import { useState } from "react";

export const InvestDetailHeader = () => {
  const [statusColor, setStatusColor] = useState("blue.300");
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pb={5}
        borderBottom={"1px solid"}
        borderBottomColor={"gray.300"}
      >
        <Image src={TmpImg} height={230} w={"100%"} objectFit="cover" />
        <Box display="flex" mx={2} mt={3} mb={4}>
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
            <Text fontSize={12}>전시</Text>
          </Box>

          <Text fontSize={17} as={"b"} flex={1}>
            스튜디오 지브리 애니메이션 거장 타카하타 이사오 전시
          </Text>
        </Box>
        <Center display={"flex"} w={"100%"} gap={10} px={3} pb={3}>
          <Center display="flex" flexDirection={"column"}>
            <Center fontSize={14}>현재 구매된 조각</Center>
            <Center>
              <Box fontSize={22} pr={2}>
                22,500
              </Box>
              <Box fontSize={12}>조각</Box>
            </Center>
          </Center>
          <Center display="flex" flexDirection={"column"}>
            <Center fontSize={14}>투자자</Center>
            <Center>
              <Box fontSize={22} pr={2}>
                182
              </Box>
              <Box fontSize={12}>명</Box>
            </Center>
          </Center>
          <Center display="flex" flexDirection={"column"}>
            <Center fontSize={14}>남은시간</Center>
            <Center fontSize={22}>D-3</Center>
          </Center>
        </Center>
        <Box display={"flex"} alignItems={"center"} w={"100%"} px={7}>
          <Progress
            value={80}
            size={"md"}
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
