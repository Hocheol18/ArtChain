import { Box, Flex } from "@chakra-ui/react";
import { ExpectRateChart } from "./ExpectRateChart";

export const ExpectRateInvest = () => {
  const data = [
    {
      audienceNum: "6만명 미만",
      expectRate: 7,
    },
    {
      audienceNum: "8만명 미만",
      expectRate: 10,
    },
    {
      audienceNum: "8만명 이상",
      expectRate: 15,
    },
  ];

  return (
    <Box mb={"70px"} pb={3}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={2}>
        예상수익률
      </Box>
      <Box fontSize={"14"} px={6} textColor={"gray.500"} pb={3}>
        투자 상품의 예상 수익률을 확인할 수 있어요.
      </Box>
      {/* 차트 */}
      <ExpectRateChart />

      {/* 관람객/예상수익률 표 */}
      <Box px={6} display={"flex"} flexDirection={"column"}>
        <Flex justifyContent={"space-between"} py={3}>
          <Box
            px={5}
            backgroundColor={"gray.400"}
            textColor={"white"}
            fontSize={"17px"}
            py={0.5}
            borderRadius={"lg"}
          >
            관객수
          </Box>
          <Box
            px={5}
            backgroundColor={"gray.400"}
            textColor={"white"}
            py={0.5}
            borderRadius={"lg"}
          >
            예상 수익률
          </Box>
        </Flex>

        {data.map((item) => (
          <Flex justifyContent={"space-between"} py={1}>
            <Box textColor={"gray.400"}>{item.audienceNum}</Box>
            <Box>{item.expectRate}%</Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
