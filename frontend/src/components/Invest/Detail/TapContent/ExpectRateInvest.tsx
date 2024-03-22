import { Box } from "@chakra-ui/react";
import { ExpectRateChart } from "./ExpectRateChart";

export const ExpectRateInvest = () => {
  return (
    <Box mb={"70px"} pb={3}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={2}>
        예상수익률
      </Box>
      <Box fontSize={"14"} px={6} textColor={"gray.500"} pb={5}>
        투자 상품의 예상 수익률을 확인할 수 있어요.
      </Box>
      <ExpectRateChart />
    </Box>
  );
};
