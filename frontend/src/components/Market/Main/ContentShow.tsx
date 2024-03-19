import {
  Box,
  Flex,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import dummy from "../../../assets/dummy.png";

export default function ContentShow() {
  return (
    <>
      
        <Box maxH={"150px"} boxShadow="lg" rounded="xl" bg="white">
          <Flex>
            <Image maxW={"120px"} rounded={"2xl"} src={dummy}></Image>
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
                  <Text color={"black.100"}>전시</Text>
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

              <Text
                as={"b"}
                color={"black.100"}
                fontSize={"0.8rem"}
                mt={"1rem"}
              >
                THE TWILIGHT ZONE
              </Text>
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
                    30,000 조각
                  </Text>
                  <Text fontSize={"0.8rem"} mt={"0.3rem"}>
                    D - 25
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
    
    </>
  );
}
