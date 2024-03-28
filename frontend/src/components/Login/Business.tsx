import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessEnrollInterface } from "../../type/login";
import { BusinessEnrollAxios } from "../../api/user";

export default function Business() {
  const navigate = useNavigate();
  const [isFilled, setisFilled] = useState(false);
  const toast = useToast();

  const [values, setValues] = useState<BusinessEnrollInterface>({
    memberId: "",
    password: "",
    name: "",
    email: "",
    bankName: "",
    bankAccount: "",
    tel: "",
    businessRegistrationNumber: "",
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

  useEffect(() => {
    if (
      values.bankAccount.length >= 1 &&
      values.bankName.length >= 1 &&
      values.email.length >= 1 &&
      values.memberId.length >= 1 &&
      values.name.length >= 1 &&
      values.password.length >= 4 &&
      values.tel.length >= 1 &&
      values.businessRegistrationNumber.length >= 1
    ) {
      setisFilled(true);
    }
  }, [values]);

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

  return (
    <Box p={"1rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.2rem"}>
          기업 회원가입
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
            placeholder="비밀번호를 입력하세요"
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
        <Box ml={"0.2rem"} mt={"1.5rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            전화번호
          </Text>
          <Flex>
            <Select
              placeholder="통신사"
              mt={"0.5rem"}
              maxW={"120px"}
              mr={"0.5rem"}
              name="tel-select"
              onChange={selectSetValue}
            >
              <option value="option1">SKT</option>
              <option value="option2">KT</option>
              <option value="option3">LGU+</option>
            </Select>
            <Input
            type="number"
              minW={"200px"}
              px={"1rem"}
              py={"0.4rem"}
              rounded={"0.7rem"}
              mt={"0.5rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.300"}
              placeholder="전화번호를 입력하세요"
              name="tel"
              onChange={handleSetValue}
            />
          </Flex>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            사업자등록번호*
          </Text>
          <Input
          type="number"
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="사업자등록번호를 입력하세요"
            name="businessRegistrationNumber"
            onChange={handleSetValue}
          />
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
              BusinessEnrollAxios(values)
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
