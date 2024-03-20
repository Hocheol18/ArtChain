import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  AbsoluteCenter,
  Center,
  Input,
} from "@chakra-ui/react";
import LoginUser from "../assets/loginuser.png";
import kakao from "../assets/kakaologin.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Box p={"1rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.7rem"}>
          아트체인에서
        </Text>
        <Text as={"b"} fontSize={"1.7rem"}>
          {" "}
          새로운 투자를 시작해보세요
        </Text>
        <Image minW={"340px"} src={LoginUser} />
        <Box p={"1rem"} onClick={() => navigate("../signupoauth")}>
          <Image w={"340px"} src={kakao} />
        </Box>
        <Box position="relative" mt={"0.5rem"} mb={"1rem"}>
          <Divider borderColor={"gray.400"} />
          <AbsoluteCenter bg="white" px="5">
            OR
          </AbsoluteCenter>
        </Box>
        <Input
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.5rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
          placeholder="아이디를 입력하세요"
        />

        <Input
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.7rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
          placeholder="비밀번호를 입력하세요"
        />

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
          <Text
            onClick={() => {
              navigate("../signupnormal");
            }}
          >
            회원가입
          </Text>
          <Text
            ml={"1rem"}
            color={"blue.300"}
            onClick={() => {
              navigate("../loginbusiness");
            }}
          >
            기업회원이신가요?
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
