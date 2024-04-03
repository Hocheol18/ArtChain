import { Box, Flex } from "@chakra-ui/react";
import { ExpectRateChart } from "./ExpectRateChart";
import {
  ExpectedReturn,
  GetFundingResponse,
} from "../../../../type/invest.interface";
import { formatNumberWithComma } from "../../../Common/Comma";

interface Props {
  data: GetFundingResponse;
}

export const ExpectRateInvest = ({ data }: Props) => {
  return (
    <Box backgroundColor={"white"} py={8} boxShadow={"lg"}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={2}>
        예상수익률
      </Box>
      <Box fontSize={"14"} px={6} textColor={"gray.500"} pb={3}>
        투자 상품의 예상 수익률을 확인할 수 있어요.
      </Box>
      {/* 차트 */}
      <ExpectRateChart expectedReturnList={data.expectedReturnList} />

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

        {data.expectedReturnList &&
          data.expectedReturnList.map((item, index) => (
            <Flex justifyContent={"space-between"} py={1}>
              <Box textColor={"gray.400"} key={index}>
                {formatNumberWithComma(item.spectatorNum)} 명 이상
              </Box>
              <Box>{formatNumberWithComma(item.expectedReturn)}%</Box>
            </Flex>
          ))}
      </Box>
    </Box>
  );
};
