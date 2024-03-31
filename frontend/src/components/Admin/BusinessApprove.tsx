import { Button, Grid, GridItem, Select } from "@chakra-ui/react";
import React from "react";

export default function BusinessApprove() {
  return (
    <>
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
          justifyContent="center"
        >
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
          justifyContent="center"
        >
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
          justifyContent="center"
        >
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
          justifyContent="center"
        >
          승인
        </GridItem>

        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          대원미디어
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          123-45-67890
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          2024.03.14
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}
        >
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
    </>
  );
}
