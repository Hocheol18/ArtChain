import { Box, Flex, Image, Text } from "@chakra-ui/react";

import dummy from "../../../assets/dummy.png";
import { getMarketMainDisplayListInterface } from "../../../type/market.interface";
import { useNavigate } from "react-router-dom";

export default function ContentEnd({
  id,
  name,
  poster,
  category,
  status,
  nowCoinCount,
  settlement,
}: getMarketMainDisplayListInterface) {
  const navigate = useNavigate();
  switch (category) {
    case "SHOW":
      category = "공연";
      break;
    case "MOVIE":
      category = "영화";
      break;
    case "EXHIBITION":
      category = "전시";
      break;
  }

  return (
    <Box
      maxH={"150px"}
      boxShadow="lg"
      rounded="xl"
      bg="white"
      onClick={() => navigate(`/market/${id}`)}
    >
      <Flex>
        <Image
          maxW={"120px"}
          rounded={"2xl"}
          src={dummy}
          filter="blur(2px)"
        ></Image>
        <Flex direction={"column"} ml={"1rem"}>
          <Flex mt={"0.8rem"}>
            <Box
              px={"0.5rem"}
              py={"0.1rem"}
              rounded={"0.7rem"}
              border={"1px"}
              borderColor={"gray.300"}
              fontSize={"xs"}
            >
              <Text color={"black.100"}>{category}</Text>
            </Box>
            <Box
              px={"0.5rem"}
              py={"0.1rem"}
              rounded={"0.7rem"}
              boxShadow={"xl"}
              fontSize={"xs"}
              bgColor={"gray.500"}
              ml={"0.5rem"}
            >
              <Text as={"b"} color={"white.100"}>
                정산완료
              </Text>
            </Box>
          </Flex>

          <Flex mt={"1rem"} ml={"0.2rem"}>
            <Text as={"b"} color={"black.100"} fontSize={"0.8rem"}>
              {name}
            </Text>
          </Flex>
          <Flex>
            <Flex direction={"column"}>
              <Text fontSize={"0.8rem"} mt={"0.6rem"}>
                총 조각 갯수
              </Text>
              <Text fontSize={"0.8rem"} mt={"0.3rem"}>
                정산 예상일
              </Text>
            </Flex>
            <Flex direction={"column"} ml={"1rem"}>
              <Text fontSize={"0.8rem"} mt={"0.6rem"}>
                {nowCoinCount} 조각
              </Text>
              <Text fontSize={"0.8rem"} mt={"0.3rem"}>
                {settlement}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
