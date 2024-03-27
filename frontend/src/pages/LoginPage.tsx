import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  AbsoluteCenter,
  Center,
  Input,
  useToast,
} from "@chakra-ui/react";
import LoginUser from "../assets/loginuser.png";
import kakao from "../assets/kakaologin.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginInterface } from "../type/login";
import { LoginAxios, ProfileAxios } from "../api/user";
import useUserInfo from "../store/useUserInfo";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUserInfo();
  const toast = useToast();

  const [values, setValues] = useState<LoginInterface>({
    username: "",
    password: "",
  });
  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginDone = async (res: any) => {
    sessionStorage.setItem("accessToken", res.headers.authorization);
    try {
      const res = await ProfileAxios();
      toast({
        duration: 2000,
        isClosable: true,
        position: "top",
        render: () => (
          <Flex
            color="white"
            mt={"50px"}
            bg="blue.300"
            p={"1rem"}
            borderRadius={"0.7rem"}
            alignItems={"center"}
          >
            <CheckCircleIcon boxSize={5} color={"white"} ml={"0.5rem"} />
            <Center ml={"1rem"}>
              <Text as={"b"}>로그인 성공</Text>
            </Center>
          </Flex>
        ),
      })
      setUserInfo({
        profileUrl: "",
        nickname: res.data.data.memberUserMypageResponseDtoList[0].nickname,
        walletBalance:
          res.data.data.memberUserMypageResponseDtoList[0].walletBalance,
        isLogin: true,
      });
      navigate("../");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

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
          w={"340px"}
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.5rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
          placeholder="아이디를 입력하세요"
          name="username"
          onChange={handleSetValue}
        />

        <Input
          w={"340px"}
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.7rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleSetValue}
        />

        <Box
          w={"340px"}
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.7rem"}
          fontSize={"sm"}
          borderColor={"blue.300"}
          border={"1px"}
          bgColor={"blue.300"}
          ml={"0.5rem"}
          onClick={() =>
            LoginAxios(values)
              .then((res) => loginDone(res))
              .catch(() =>
                toast({
                  duration: 2000,
                  isClosable: true,
                  position: "top",
                  render: () => (
                    <Flex
                      color="white"
                      mt={"50px"}
                      bg="#C70000"
                      p={"1rem"}
                      borderRadius={"0.7rem"}
                      alignItems={"center"}
                    >
                      <WarningTwoIcon
                        boxSize={5}
                        color={"white"}
                        ml={"0.5rem"}
                      />
                      <Center ml={"1rem"}>
                        <Text as={"b"}>로그인 실패</Text>
                      </Center>
                    </Flex>
                  ),
                })
              )
          }
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
