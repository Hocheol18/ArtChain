import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import puzzle from "../../../assets/puzzle.svg";

export default function SellList() {
  return (
    <>
      <Box p={"0.5rem"}>
        <Box
          maxW={"160px"}
          h={"170px"}
          border={"1px"}
          borderColor={"gray.300"}
          borderRadius={"0.5rem"}
        >
          <Center
            maxW={"160px"}
            borderRadius={"0.5rem"}
            bgColor={"blue.100"}
            h={"70px"}
          >
            <Flex>
              <Image boxSize={"1.2rem"} src={puzzle}></Image>
              <Text
                as={"b"}
                color={"black.100"}
                fontSize={"0.9rem"}
                ml={"0.2rem"}
              >
                26 조각
              </Text>
            </Flex>
          </Center>
          <Flex>
            <Flex direction={"column"} p={"0.5rem"}>
              <Text fontSize={"0.7rem"}>총 가격</Text>
              <Text fontSize={"0.7rem"} mt={"0.1rem"}>
                조각 당 가격
              </Text>
              <Text fontSize={"0.7rem"} mt={"0.1rem"}>
                판매자 주소
              </Text>
            </Flex>
            <Flex direction={"column"} p={"0.5rem"}>
              <Text as={"b"} fontSize={"0.7rem"}>
                30 아트
              </Text>
              <Text as={"b"} fontSize={"0.7rem"} mt={"0.1rem"}>
                1.15 아트
              </Text>
              <Text as={"b"} fontSize={"0.7rem"} mt={"0.1rem"}>
                bw12wdf...
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"}>
            <Box
              w={"140px"}
              border={"1px"}
              borderColor={"gray.300"}
              borderRadius={"0.5rem"}
              textAlign={"center"}
              bgColor={"blue.300"}
            >
              <Text as={"b"} fontSize={"0.8rem"} color={"white"}>
                구매
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      
    </>
  );
}
