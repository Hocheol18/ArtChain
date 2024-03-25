import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { MyTransactionTap } from "./MyTransactionTap";
import { MyTransactionItem } from "./MyTransactionItem";

export const MyTransaction = () => {
  return (
    <div>
      <Flex>
        <Box>이미지</Box>
        <Box>제목</Box>
      </Flex>
      <MyTransactionTap />
      <Box>
        {/* map으로 돌리는 부분 */}
        <MyTransactionItem />
      </Box>
    </div>
  );
};
