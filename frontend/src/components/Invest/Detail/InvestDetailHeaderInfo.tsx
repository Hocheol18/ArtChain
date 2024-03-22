import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export const InvestDetailHeaderInfo = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} mx={5} my={5}>
      <Box display={"flex"}>
        <Box fontSize={15} as="b" minW={"130px"}>
          총 발행 조각
        </Box>
        <Box fontSize={15}>25,000</Box>
      </Box>
      <Box display={"flex"}>
        <Box fontSize={15} as="b" minW={"130px"}>
          투자 기간
        </Box>
        <Box fontSize={15}>2024.03.01 ~ 2024.03.29</Box>
      </Box>
      <Box display={"flex"}>
        <Box fontSize={15} as="b" minW={"130px"}>
          예산 정산 날짜
        </Box>
        <Box fontSize={15}>2025.01.27</Box>
      </Box>
    </Box>
  );
};
