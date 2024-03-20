import { Box, Center, Flex, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Oauth() {
  const [isFilled, setIsfilled] = useState();
  return (
    <Box p={"1rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.2rem"}>
          개인 회원가입
        </Text>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            이름*
          </Text>
          <Box
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
          >
            <Text as={"b"} color={"gray.400"}>
              이름을 입력하세요
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            이메일
          </Text>
          <Box
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
          >
            <Text as={"b"} color={"gray.400"}>
              이메일을 입력하세요
            </Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1.5rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            계좌번호를 입력하세요
          </Text>
          <Flex>
            <Select
              placeholder="은행 선택"
              mt={"0.5rem"}
              maxW={"120px"}
              mr={"0.5rem"}
            >
              <option value="option1">국민은행</option>
              <option value="option2">하나은행</option>
              <option value="option3">기업은행</option>
            </Select>
            <Box
              minW={"200px"}
              px={"1rem"}
              py={"0.4rem"}
              rounded={"0.7rem"}
              mt={"0.5rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.300"}
            >
              <Text as={"b"} color={"gray.400"}>
                계좌번호를 입력하세요
              </Text>
            </Box>
          </Flex>
        </Box>
        {isFilled ? (
          <Box
            px={"1rem"}
            py={"0.7rem"}
            rounded={"0.7rem"}
            mt={"1rem"}
            fontSize={"sm"}
            borderColor={"blue.300"}
            border={"1px"}
            bgColor={"blue.300"}
            ml={"0.5rem"}
          >
            <Center as={"b"} color={"white"}>
              회원가입
            </Center>
          </Box>
        ) : (
          <Box
            px={"1rem"}
            py={"0.7rem"}
            rounded={"0.7rem"}
            mt={"1rem"}
            fontSize={"sm"}
            bgColor={"gray.300"}
            ml={"0.5rem"}
          >
            <Center as={"b"} color={"white.100"}>
              회원가입
            </Center>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
