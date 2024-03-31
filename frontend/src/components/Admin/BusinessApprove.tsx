import { Grid, GridItem, Select } from "@chakra-ui/react";
import React from "react";

export default function BusinessApprove() {
  return (
    <>
      <Grid templateColumns="1.5fr 3fr 0.5fr 0.5fr" gap={3}>
        <GridItem
          w="100%"
          h="10"
          fontSize={"xs"}
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
          fontSize={"xs"}
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
          fontSize={"xs"}
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
          fontSize={"xs"}
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
          fontSize={"xs"}
        >
          대원미디어
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={"xs"}
        >
          123-45-67890
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={"xs"}
        >
          2024.03.14
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          fontSize={"xs"}
        >
          <Select
            placeholder="선택"
            width={"20"}
            h={"30px"}
            borderColor={"blue.300"}
            mr={"0.2rem"}
          >
            <option value="option1">승인</option>
            <option value="option2">반려</option>
          </Select>
        </GridItem>
      </Grid>
    </>
  );
}
