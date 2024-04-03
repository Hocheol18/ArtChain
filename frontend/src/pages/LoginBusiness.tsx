import { Box, Flex, Text, Image, Center, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Business from "../assets/business.png";
import { LoginInterface } from "../type/login.interface";
import { useEffect, useState } from "react";
import { useLoginWithMetamask } from "../components/Common/LoginWithMetamask";

export default function LoginBusiness() {
  const navigate = useNavigate();
  const [values, setValues] = useState<LoginInterface>({
    username: "",
    password: "",
  });
  const { LoginWithMetamask } = useLoginWithMetamask(values, true);

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      LoginWithMetamask();
    }
  };

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
          onChange={handleSetValue}
          name="username"
        />

        <Input
          type="password"
          w={"340px"}
          px={"1rem"}
          py={"0.7rem"}
          rounded={"0.7rem"}
          mt={"0.7rem"}
          fontSize={"sm"}
          border={"1px"}
          borderColor={"gray.300"}
          ml={"0.5rem"}
          placeholder="비밀번호를 입력하세요"
          onChange={handleSetValue}
          name="password"
          onKeyDown={onKeyPress}
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
          onClick={() => LoginWithMetamask()}
        >
          <Center as={"b"} color={"white"}>
            로그인
          </Center>
        </Box>
        <Flex
          justifyContent={"center"}
          mt={"0.5rem"}
          onClick={() => {
            navigate("../businessenroll");
          }}
        >
          <Text>회원가입</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
