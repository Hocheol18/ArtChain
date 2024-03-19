import pencil from "../../../assets/pencil.png";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function MarketSell() {
  return (
    <Flex justifyContent={"end"} mt={"0.8rem"} mr={"0.7rem"}>
      <Box
        px={"0.6rem"}
        py={"0.3rem"}
        rounded={"0.7rem"}
        boxShadow={"xl"}
        fontSize={"xs"}
        border={"1px"}
        borderColor={"gray.300"}
        ml={"0.5rem"}
        bgColor={"blue.300"}
      >
        <Flex>
          <Image src={pencil} boxSize={"1rem"}></Image>
          <Text as={"b"} color={"white.100"} ml={"0.2rem"}>
            보유 조각 판매
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
