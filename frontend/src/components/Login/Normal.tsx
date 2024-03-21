import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Normal() {
  const [isFilled, setisFilled] = useState(false);
  return (
    <Box p={"1rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.2rem"}>
          개인 회원가입
        </Text>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            아이디*
          </Text>
          <Flex>
            <Input
              px={"1rem"}
              py={"0.4rem"}
              rounded={"0.7rem"}
              mt={"0.5rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.300"}
              placeholder="아이디를 입력하세요"
              mr={"0.5rem"}
            />
            <Button h={"40px"} w={"15px"} colorScheme="blue" variant="outline" mt={"0.5rem"}>
              확인
            </Button>
          </Flex>

          
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비밀번호*
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="비밀번호를 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            이름*
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="이름을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            이메일
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="이메일을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1.5rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            계좌번호
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
            <Input
              minW={"200px"}
              px={"1rem"}
              py={"0.4rem"}
              rounded={"0.7rem"}
              mt={"0.5rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.300"}
              placeholder="계좌번호를 입력하세요"
            />
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
