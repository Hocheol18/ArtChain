import { Button, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

export default function SettlementDetail() {
  return (
    <>
      <Flex direction={"column"} px={5}>
        <Flex
          borderY={"1px solid"}
          borderColor={"gray.200"}
          direction={"column"}
        >
          <Text as={"b"} fontSize={"22"} py={3}>
            대원미디어
          </Text>
          <Text as={"b"} fontSize={"28"} py={3}>
            모네에서 앤디워홀까지 : 부산전
          </Text>
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            정산 금액
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            1,000,000,000원
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            입금 날짜
          </Text>
          <Text as={"b"} fontSize={"28"} py={5}>
            2024.04.01
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text as={"b"} fontSize={"28"} py={5}>
            정산 자료
          </Text>
          <a href="#">
            <Button
              bgColor={"blue.300"}
              textColor={"white"}
              py={5}
              px={6}
              _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
              _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
              _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
            >
              다운로드
            </Button>
          </a>
        </Flex>
      </Flex>

      <Flex px={6} direction={"row-reverse"}>
        <Button
          bgColor={"blue.300"}
          textColor={"white"}
          ml={4}
          px={6}
          _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
          _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
          _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
        >
          확인
        </Button>
        <Select placeholder="선택" width={"20"}>
          <option value="option1">승인</option>
          <option value="option2">반려</option>
        </Select>
      </Flex>
    </>
  );
}
