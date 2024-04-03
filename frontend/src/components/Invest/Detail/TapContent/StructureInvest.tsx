import { Box, Text, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import {
  Cost,
  GetFundingResponse,
  Sale,
} from "../../../../type/invest.interface";
import { formatNumberWithComma } from "../../../Common/Comma";

interface Props {
  data: GetFundingResponse;
}
export const StructureInvest = ({ data }: Props) => {
  const descstr1: string =
    "프로젝트의 손익(총 매출-총 비용)을 손익배당비율에 따라 배당합니다.";

  const descstr2_1: string = `매출-비용 > 0일 경우 수익 배분`;
  const descstr2_2: string = `매출-비용 < 0일 경우 원금 손실 발생`;

  return (
    <Box backgroundColor={"white"} py={8} boxShadow={"lg"}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={5}>
        투자구조
      </Box>
      <Box display={"flex"} flexDirection={"column"} px={6} gap={7}>
        <Flex direction={"column"} gap={2}>
          <Box fontSize={17}>{descstr1}</Box>
          <Flex direction={"column"}>
            <Text fontSize={15} color={"gray.500"}>
              {descstr2_1}
            </Text>
            <Text fontSize={15} color={"gray.500"}>
              {descstr2_2}
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Box fontSize={"19"} fontWeight={"bold"} pb={3}>
            매출 구성
          </Box>
          <Flex
            backgroundColor={"gray.100"}
            borderRadius={10}
            pt={3}
            px={4}
            direction={"column"}
          >
            {/* 아래 이 부분 반복할 부분 */}
            {data.saleList.map((sale) => (
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                pb={4}
              >
                <Flex direction={"column"}>
                  <Box>{sale.mainVariety}</Box>
                  <UnorderedList>
                    <ListItem ml={"10"} fontSize={"14"} py={1}>
                      {sale.subVariety}
                    </ListItem>
                  </UnorderedList>
                </Flex>
                <Box fontSize={"15"} fontWeight={"bold"}>
                  {sale.percentage}%
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box>
          <Box fontSize={"19"} fontWeight={"bold"} pb={3}>
            비용 구성
          </Box>
          <Flex
            backgroundColor={"gray.100"}
            borderRadius={10}
            pt={3}
            px={4}
            direction={"column"}
          >
            {/* 아래 이 부분 반복할 부분 */}
            {data.costList.map((item) => (
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                pb={3}
              >
                <Flex direction={"column"}>
                  <Box>{item.mainVariety}</Box>
                  <UnorderedList>
                    <ListItem ml={"10"} fontSize={"14"} py={1}>
                      {item.subVariety}
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Flex
          borderTop={"1px solid"}
          borderTopColor={"gray.400"}
          direction={"column"}
          gap={2}
          py={3}
        >
          <Flex justifyContent={"space-between"}>
            <Box>총 예산규모</Box>
            <Box fontWeight={"bold"}>
              {formatNumberWithComma(data.totalBudget)}원
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box>객단가</Box>
            <Box fontWeight={"bold"}>
              {formatNumberWithComma(data.unitPrice)}원
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box>추정 손익분기점</Box>
            <Box fontWeight={"bold"}>{formatNumberWithComma(data.bep)}명</Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
