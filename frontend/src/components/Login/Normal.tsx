import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IsEnrollAxios, UserEnrollAxios } from "../../api/user";
import { UserErnollInterface } from "../../type/login.interface";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

export default function Normal() {
  const navigate = useNavigate();
  const [isFilled, setisFilled] = useState(false);
  const toast = useToast();
  const [num, setNum] = useState("");

  const [values, setValues] = useState<UserErnollInterface>({
    memberId: "",
    password: "",
    name: "",
    email: "",
    bankName: "",
    bankAccount: "",
  });

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectSetValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const EnrollDone = () => {
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
            <Text as={"b"}>회원가입 성공</Text>
          </Center>
        </Flex>
      ),
    });
    navigate("../");
  };

  useEffect(() => {
    if (
      values.bankAccount.length >= 1 &&
      values.bankName.length >= 1 &&
      values.email.length >= 1 &&
      values.memberId.length >= 1 &&
      values.name.length >= 1 &&
      values.password.length >= 4
    ) {
      setisFilled(true);
    }
  }, [values]);

  // 휴대폰 번호 입력 함수
  useEffect(() => {
    const value = values.bankAccount;
    const numberLength = 11;

    let result;
    result = "";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }

      result += value[i];
    }

    setNum(result);
  }, [values.bankAccount]);

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
              name="memberId"
              onChange={handleSetValue}
            />
            <Button
              h={"40px"}
              w={"15px"}
              colorScheme="blue"
              variant="outline"
              mt={"0.5rem"}
              onClick={() =>
                IsEnrollAxios(values.memberId)
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err))
              }
            >
              확인
            </Button>
          </Flex>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비밀번호*
          </Text>
          <Input
            type="password"
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="비밀번호를 입력하세요 (4자 이상)"
            name="password"
            onChange={handleSetValue}
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
            name="name"
            onChange={handleSetValue}
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
            name="email"
            onChange={handleSetValue}
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
              name="bankName"
              onChange={selectSetValue}
            >
              <option value="국민은행">국민은행</option>
              <option value="하나은행">하나은행</option>
              <option value="기업은행">기업은행</option>
            </Select>
            <Input
              max="10"
              type="number"
              minW={"200px"}
              px={"1rem"}
              py={"0.4rem"}
              rounded={"0.7rem"}
              mt={"0.5rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.300"}
              placeholder="계좌번호를 입력하세요"
              name="bankAccount"
              onChange={handleSetValue}
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
            onClick={() =>
              UserEnrollAxios(values)
                .then(() => EnrollDone())
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
            <Center as={"b"} color={"white.100"}>
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
