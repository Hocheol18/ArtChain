import { Box, Center, Checkbox, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    setisAgree: (value: boolean) => void;
}

export default function Agreement({ setisAgree } : Props) {
  const [check, setCheck] = useState(false);
  return (
    <Box p={"1rem"}>
      <Flex direction={"column"}>
        <Text as={"b"} fontSize={"1.2rem"}>
          회원가입 약관 동의
        </Text>
        <Box position="relative" mt={"1rem"} mb={"1rem"}>
          <Divider borderColor={"gray.400"} />
        </Box>
        <Flex direction={"column"}>
          <Text fontSize={"1rem"}>
            아트체인 서비스 및 제품 (이하 서비스)를 이용해 주셔서 감사합니다. 본
            약관은 다양한 아트체인 서비스 이용과 관련하여 아트체인 서비스를
            제공하는 아트체인 주식회사(이하 '아트체인')와 이를 이용하는 아트체인
            서비스 회원 (이하 '회원') 또는 비회원과의 관계를 설정하며, 아울러
            아트체인 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고
            있습니다.
          </Text>
          <Box position="relative" mt={"1rem"} mb={"1rem"}>
            <Divider borderColor={"gray.400"} />
          </Box>
          <Text fontSize={"1rem"}>
            개인정보보호법에 따라 아트체인에 회원가입 신청하시는 분께 수집하는
            개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및
            이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내
            드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
          </Text>
          <Box position="relative" mt={"1rem"} mb={"1rem"}>
            <Divider borderColor={"gray.400"} />
          </Box>
          <Text fontSize={"1rem"}>
            주식회사 (아트체인)은 투자의 어떤 위험에 책임도 지지 않으며, 오로지
            중계 플랫폼(시스템)으로서 서비스를 제공할 뿐입니다. 모든 투자의
            책임은 투자자 본인에게 있으며, 아트체인은 어떠한 책임도 지지
            않습니다.
          </Text>
        </Flex>
        <Box position="relative" mt={"1rem"} mb={"1rem"}>
          <Divider borderColor={"gray.400"} />
        </Box>

        <Checkbox
          
          mt={"0.5rem"}
          onChange={() => {
            check ? setCheck(false) : setCheck(true);
          }}
        >
          약관에 동의합니다
        </Checkbox>

        {check ? (
          <Box
            px={"1rem"}
            py={"0.7rem"}
            rounded={"0.7rem"}
            mt={"0.8rem"}
            fontSize={"sm"}
            bgColor={"blue.300"}
            ml={"0.5rem"}
            mr={"0.5rem"}
            onClick={() => {setisAgree(false)}}
          >
            <Center color={"white.100"}>다음</Center>
          </Box>
        ) : (
          <Box
            px={"1rem"}
            py={"0.7rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            bgColor={"gray.300"}
            ml={"0.5rem"}
            mr={"0.5rem"}
          >
            <Center color={"black.100"}>다음</Center>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
