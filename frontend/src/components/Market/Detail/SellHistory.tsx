import { Box, Flex, Text } from "@chakra-ui/react";
import SellHistoryChart from "./SellHistoryChart";
import { useNavigate } from "react-router-dom";

export default function SellHistory() {
  const navigate = useNavigate();
  return (
    <>
      <Box position={"sticky"} left={"1px"}>
        <Box ml={"1rem"} maxW={"360px"}>
          <SellHistoryChart />
        </Box>
        <Box ml={"1rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1.2rem"}>
            일일 1조각당 평균 가격
          </Text>
        </Box>
      </Box>
      <Box ml={"1rem"}>
        <Box
          w={"820px"}
          borderBottom={"2px"}
          borderTop={"2px"}
          color={"gray.300"}
          mt={"1rem"}
        >
          <Flex minW={"600px"} overflowX={"scroll"} mt={"0.1rem"} mb={"0.1rem"}>
            <Text as={"b"} color={"black.100"} ml={"4rem"}>
              거래분류
            </Text>
            <Text as={"b"} color={"black.100"} ml={"1.5rem"}>
              조각수
            </Text>
            <Text as={"b"} color={"black.100"} ml={"1.5rem"}>
              조각당가격
            </Text>
            <Text as={"b"} color={"black.100"} ml={"1.5rem"}>
              총가격
            </Text>
            <Text as={"b"} color={"black.100"} ml={"3rem"}>
              판매자
            </Text>
            <Text as={"b"} color={"black.100"} ml={"4rem"}>
              구매자
            </Text>
            <Text as={"b"} color={"black.100"} ml={"8rem"}>
              시간
            </Text>
          </Flex>
        </Box>
        {/* 판매 */}
        <Flex mt={"0.5rem"} w={"900px"}>
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            bg={"blue.300"}
          >
            <Text as={"b"} color={"white.100"} onClick={() => {navigate("../market/tradeconfirm/1")}}>
              보기
            </Text>
          </Box>
          <Text as={"b"} color={"blue.400"} ml={"2rem"}>
            판매
          </Text>
          <Text as={"b"} color={"balck.100"} ml={"2.8rem"}>
            8290
          </Text>
          <Text as={"b"} color={"black.100"} ml={"3.5rem"}>
            1.31
          </Text>
          <Text as={"b"} color={"black.100"} ml={"3rem"}>
            10,850
          </Text>
          <Text as={"b"} color={"black.100"} ml={"2.5rem"}>
            bc1qwer..
          </Text>
          <Text as={"b"} color={"black.100"} ml={"2.5rem"}>
            bc1daxq..
          </Text>
          <Text as={"b"} color={"black.100"} ml={"3.5rem"}>
            2024.03.13 03:03:33
          </Text>
        </Flex>
        {/* 등록 */}
        <Flex mt={"0.5rem"} w={"900px"}>
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            bg={"blue.300"}
          >
            <Text as={"b"} color={"white.100"} onClick={() => {navigate("../market/tradenow/1")}}>
              보기
            </Text>
          </Box>
          <Text as={"b"} color={"gray.400"} ml={"2rem"}>
            등록
          </Text>
          <Text as={"b"} color={"balck.100"} ml={"2.8rem"}>
            8290
          </Text>
          <Text as={"b"} color={"black.100"} ml={"3.5rem"}>
            1.31
          </Text>
          <Text as={"b"} color={"black.100"} ml={"3rem"}>
            10,850
          </Text>
          <Text as={"b"} color={"black.100"} ml={"2.5rem"}>
            bc1qwer..
          </Text>
          <Text as={"b"} color={"black.100"} ml={"4rem"}>
            ..
          </Text>
          <Text as={"b"} color={"black.100"} ml={"6rem"}>
            2024.03.13 03:03:33
          </Text>
        </Flex>
      </Box>
    </>
  );
}
