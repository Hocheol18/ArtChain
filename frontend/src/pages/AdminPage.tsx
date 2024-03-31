import React from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Select,
  Button,
} from "@chakra-ui/react";

export const AdminPage = () => {
  return (
    <div>
      <Box>
        <Flex justifyContent={"space-between"} px={"10%"} py={5}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}>
            {" "}
            기업 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            프로젝트 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            정산 승인
          </Text>
        </Flex>
      </Box>

      <Grid templateColumns="1.5fr 2.5fr 1fr 1fr" gap={3}>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          회사명
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          사업자등록번호
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          등록 날짜
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          승인
        </GridItem>

        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          대원미디어
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          123-45-67890
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          2024.03.14
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}>
          <Select placeholder="선택" width={"20"}>
            <option value="option1">승인</option>
            <option value="option2">반려</option>
          </Select>
          <Button
            bgColor={"blue.300"}
            textColor={"white"}
            p={2}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
          >
            확인
          </Button>
        </GridItem>
      </Grid>

      <Box>
        <Flex justifyContent={"space-between"} px={"10%"} py={5}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            {" "}
            기업 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}>
            프로젝트 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            정산 승인
          </Text>
        </Flex>
      </Box>

      <Grid templateColumns="1.5fr 3fr 1fr" gap={3}>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          회사명
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          프로젝트명
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center"></GridItem>

        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          대원미디어
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          모네에서 앤디워홀까지 : 부산전
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Button
            bgColor={"blue.300"}
            textColor={"white"}
            p={2}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
          >
            보기
          </Button>
        </GridItem>
      </Grid>
      <Box>
        <Flex justifyContent={"space-between"} px={"10%"} py={5}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            {" "}
            기업 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            프로젝트 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}>
            정산 승인
          </Text>
        </Flex>
      </Box>

      <Grid templateColumns="1.5fr 3fr 3fr 1fr" gap={3}>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          회사명
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          프로젝트명
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center">
          정산 금액
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          fontSize={"medium"}
          as={"b"}
          borderY={"1px solid"}
          borderColor={"gray.200"}
          display="flex"
          alignItems="center"
          justifyContent="center"></GridItem>

        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          대원미디어
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          모네에서 앤디워홀까지 : 부산전
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          1,000,000,000원
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Button
            bgColor={"blue.300"}
            textColor={"white"}
            p={2}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
          >
            보기
          </Button>
        </GridItem>
      </Grid>

      {/* <Box>
        <Flex justifyContent={"space-between"} px={"10%"} py={5}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            {" "}
            기업 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            프로젝트 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}>
            정산 승인
          </Text>
        </Flex>
      </Box>
      <Flex direction={"column"} px={5}>
        <Flex
          borderY={"1px solid"}
          borderColor={"gray.200"}
          direction={"column"}>
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
      </Flex> */}
    </div>
  );
};
