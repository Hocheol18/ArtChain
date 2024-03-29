import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { GetFundingResponse } from "../../../type/invest.interface";

interface Props {
  fundingData: GetFundingResponse;
}

export const InvestDetailHeaderInfo = ({ fundingData }: Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} mx={5} my={5}>
      <Box display={"flex"}>
        <Box fontSize={15} as="b" minW={"130px"}>
          총 발행 조각
        </Box>
        <Box fontSize={15}>{fundingData.goalCoinCount}</Box>
      </Box>
      <Box display={"flex"}>
        <Box fontSize={15} as="b" minW={"130px"}>
          투자 기간
        </Box>
        <Box fontSize={15}>
          {fundingData.recruitStart} ~ {fundingData.recruitEnd}
        </Box>
      </Box>
      <Box display={"flex"}>
        <Box fontSize={15} as="b" minW={"130px"}>
          예산 정산 날짜
        </Box>
        <Box fontSize={15}>{fundingData.settlement}</Box>
      </Box>
    </Box>
  );
};
