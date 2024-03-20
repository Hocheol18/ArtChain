import { Box, Flex, Text } from "@chakra-ui/react";

export default function MarketTradeConfirm() {
  return (
    <Box p={"1.5rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.7rem"}>
          모네에서 앤디워홀까지
        </Text>
        <Text as={"b"} fontSize={"1.7rem"}>
          {" "}
          : 부산전
        </Text>
        <Text as={"b"} fontSize={"1.3rem"} mt={"1rem"}>
          {" "}
          대원미디어
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          거래 ID
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          #1314
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          거래분류
        </Text>
        <Flex mt={"0.2rem"}>
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            bg={"blue.300"}
          >
            <Text as={"b"} color={"white.100"}>
              판매완료
            </Text>
          </Box>
        </Flex>

        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          조각수
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          8295조각
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          총 가격
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          10,850 아트
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          조각 당 가격
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          1.31 아트
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          판매자 지갑
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          0xF48eDbbD8b15aE1025865bb95056b8C97f3852F8
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          구매자 지갑
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          0xF48eDbbD8b15aE1025865bb95056b8C97f3852F8
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          시간
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          2024.03.13 14:43:45
        </Text>
        <Text as={"b"} fontSize={"1.2rem"} mt={"1rem"}>
          {" "}
          상세 링크
        </Text>
        <Text as={"b"} fontSize={"1rem"}>
          {" "}
          0x0cbd1756693df7874030ab7b92419e0f3953f153d754c49d1f731fc320bd0469
        </Text>        
      </Flex>
    </Box>
  );
}
