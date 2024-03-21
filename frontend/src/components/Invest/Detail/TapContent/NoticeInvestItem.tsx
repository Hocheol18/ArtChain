import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const NoticeInvestItem = () => {
  return (
    <Box as={Link} to="/invest/1/notice/1">
      <Box px={6}>
        <Flex
          direction={"column"}
          py={3}
          gap={1}
          borderBottom={"1px"}
          borderBottomColor={"gray.400"}
        >
          <Box fontSize={"15"} fontWeight={"bold"}>
            앙리마티스: 러브 앤 재즈 투자상품 상세정보 공개
          </Box>

          <Flex>
            <Box fontSize={"14"} mr={3} textColor={"gray.500"}>
              2023-05-02
            </Box>
            <Box
              fontSize={"14"}
              textColor={"gray.500"}
              backgroundColor={"gray.200"}
              borderRadius={5}
              px={2}
            >
              (주)씨씨오씨엠
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
