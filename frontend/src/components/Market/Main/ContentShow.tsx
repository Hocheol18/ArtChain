import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";
import dummy from "../../../assets/dummy.png";
import { useNavigate } from "react-router-dom";
import { getMarketMainDisplayListInterface } from "../../../type/market.interface";
import { formatNumberWithComma } from "../../Common/Comma";

export default function ContentShow({
  id,
  name,
  poster,
  category,
  status,
  nowCoinCount,
  settlement,
}: getMarketMainDisplayListInterface) {
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

  const navigate = useNavigate();

  return (
    <>
      <Box
        maxH={"150px"}
        boxShadow="lg"
        rounded="xl"
        bg="white"
        onClick={() => navigate(`/market/piece/${id}`)}
      >
        <Flex>
          <AspectRatio w={"120px"} ratio={4 / 3}>
            <Image rounded={"2xl"} src={poster}></Image>
          </AspectRatio>

          <Flex direction={"column"} ml={"0.8rem"} mb={"0.5rem"}>
            <Flex mt={"1rem"}>
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
                bgColor={"blue.300"}
                ml={"0.5rem"}
              >
                <Text as={"b"} color={"white.100"}>
                  정산이전
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
                  {formatNumberWithComma(nowCoinCount)} 조각
                </Text>
                <Text fontSize={"0.8rem"} mt={"0.3rem"}>
                  {settlement}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
