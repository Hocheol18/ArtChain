import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  AbsoluteCenter,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Business from "../assets/business.png";

export default function LoginBusiness() {
  const navigate = useNavigate();
  return (
    <Box p={"1rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.7rem"}>
          아트체인에서
        </Text>
        <Text as={"b"} fontSize={"1.7rem"}>
          {" "}
          작품을 완성해보세요
        </Text>
        <Flex justifyContent={"center"} mt={"1rem"} mb={"1rem"}>
          <Box w={"246px"} h={"266px"}>
            <Image src={Business} />
          </Box>
        </Flex>

        <Box
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.5rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
        >
          <Text as={"b"} color={"gray.400"}>
            아이디를 입력하세요
          </Text>
        </Box>
        <Box
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.7rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
        >
          <Text as={"b"} color={"gray.400"}>
            비밀번호를 입력하세요
          </Text>
        </Box>
        <Box
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.7rem"}
          fontSize={"sm"}
          borderColor={"blue.300"}
          border={"1px"}
          bgColor={"blue.300"}
          ml={"0.5rem"}
        >
          <Center as={"b"} color={"white"}>
            로그인
          </Center>
        </Box>
        <Flex justifyContent={"center"} mt={"0.5rem"}>
          <Text>회원가입</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
