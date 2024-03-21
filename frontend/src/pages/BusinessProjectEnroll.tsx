import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";

export default function BusinessProjectEnroll() {
  return (
    <>
      <Box p={"1.5rem"}>
        <Box>
          <Text as={"b"} fontSize={"1.5rem"}>
            프로젝트 등록
          </Text>
        </Box>
        <Box mt={"0.5rem"}>
          <Text as={"b"} fontSize={"2.2rem"}>
            모네에서 앤디워홀까지 : 부산전
          </Text>
        </Box>
      </Box>

      <BottomButtonNavbar text="등록하기" hanldeButton={() => {}} />
    </>
  );
}
