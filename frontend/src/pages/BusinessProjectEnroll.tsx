import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import FileUploadButton from "../components/Mypage/Business/FileUploadButton";
import InputComponent from "../components/Mypage/Business/InputComponent";

export default function BusinessProjectEnroll() {
  return (
    <>
      <Box p={"1.5rem"} mb={"3rem"}>
        <Box>
          <Text as={"b"} fontSize={"1.5rem"}>
            프로젝트 등록
          </Text>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 이름
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="프로젝트 이름을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            포스터
          </Text>

          <Box mt={"0.5rem"}>
            <FileUploadButton />
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"} w={"100%"}>
          <Text as={"b"} fontSize={"1rem"}>
            카테고리
          </Text>
          <Select
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="선택"
            mt={"0.5rem"}
            mr={"0.5rem"}
          >
            <option value="option1">SKT</option>
            <option value="option2">KT</option>
            <option value="option3">LGU+</option>
          </Select>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            목표 금액
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            일정
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"1rem"}>
          <Input
            h={"2rem"}
            w={"45%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="모집 시작"
          />
          <Box w={"45%"}>
            <Input
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="Select Date and Time"
              size="sm"
              type="datetime-local"
            />
          </Box>
        </Flex>
        <Flex justifyContent={"space-between"} mt={"1rem"}>
          <Input
            h={"2rem"}
            w={"45%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="모집 종료"
          />
          <Box w={"45%"}>
            <Input
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="Select Date and Time"
              size="sm"
              type="datetime-local"
            />
          </Box>
        </Flex>
        <Flex justifyContent={"space-between"} mt={"1rem"}>
          <Input
            h={"2rem"}
            w={"45%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="정산 예정일"
          />
          <Box w={"45%"}>
            <Input
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="Select Date and Time"
              size="sm"
              type="datetime-local"
            />
          </Box>
        </Flex>

        <InputComponent first="일정 입력(선택)" second="" check={true} />

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 설명 이미지
          </Text>

          <Box mt={"0.5rem"}>
            <FileUploadButton />
          </Box>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            매출 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"1rem"}>
          <Input
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="종류를 입력하세요"
          />

          <Input
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="매출 비율을 입력하세요"
          />
        </Flex>
        <InputComponent
          first="종류를 입력하세요"
          second="매출 비율을 입력하세요"
          check={false}
        />

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비용 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"1rem"}>
          <Input
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="종류를 입력하세요"
          />

          <Input
            h={"2rem"}
            w={"48%"}
            rounded={"0.7rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.400"}
            placeholder="비용 내용을 입력하세요"
          />
        </Flex>
        <InputComponent
          first="종류를 입력하세요"
          second="비용 내용을 입력하세요"
          check={false}
        />

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            총 예산 규모
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            객단가
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            추정 손익분기점
          </Text>
          <Input
            px={"1rem"}
            py={"0.4rem"}
            rounded={"0.7rem"}
            mt={"0.5rem"}
            fontSize={"sm"}
            border={"1px"}
            borderColor={"gray.300"}
            placeholder="금액을 입력하세요"
          />
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            예상 수익률
          </Text>
          <Flex justifyContent={"space-between"} mt={"1rem"}>
            <Input
              h={"2rem"}
              w={"48%"}
              rounded={"0.7rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="관객수"
            />

            <Input
              h={"2rem"}
              w={"48%"}
              rounded={"0.7rem"}
              fontSize={"sm"}
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="%"
            />
          </Flex>
          <InputComponent
            first="관객수"
            second="%"
            check={false}
          />
        </Box>
      </Box>

      <BottomButtonNavbar text="등록하기" hanldeButton={() => {}} />
    </>
  );
}
