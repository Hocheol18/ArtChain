import { Flex, Text, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SellEnrollHistory() {
  const navigate = useNavigate();
  return (
    <>
      {/* 등록 */}
      <Flex mt={"0.5rem"} w={"800px"}>
        <Box mr={"1.2rem"}>
          <Box
            px={"0.6rem"}
            py={"0.1rem"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            bg={"blue.300"}
          >
            <Text
              as={"b"}
              color={"white.100"}
              onClick={() => {
                navigate("../market/tradenow/1");
              }}
            >
              보기
            </Text>
          </Box>
        </Box>
        <Center w={"4rem"}>
          <Text as={"b"} color={"gray.400"}>
            판매
          </Text>
        </Center>
        <Center w={"5rem"}>
          <Text as={"b"} color={"balck.100"}>
            8290
          </Text>
        </Center>
        <Center w={"6rem"}>
          <Text as={"b"} color={"black.100"}>
            1.31
          </Text>
        </Center>
        <Center w={"6rem"}>
          <Text as={"b"} color={"black.100"}>
            10,850
          </Text>
        </Center>
        <Center w={"6rem"}>
          <Text as={"b"} color={"black.100"}>
            bc1qwer..
          </Text>
        </Center>
        <Center w={"7rem"}>
          <Text as={"b"} color={"black.100"}>
            bc1daxq..
          </Text>
        </Center>
        <Center w={"12rem"}>
          <Text as={"b"} color={"black.100"}>
            2024.03.13 03:03:33
          </Text>
        </Center>
      </Flex>
    </>
  );
}
