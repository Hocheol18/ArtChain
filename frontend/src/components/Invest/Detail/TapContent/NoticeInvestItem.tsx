import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Notice } from "../../../../type/invest.interface";

interface Props {
  notice: Notice;
}

export const NoticeInvestItem = ({ notice }: Props) => {
  if (!notice) {
    return null;
  }

  const fundingId: number = notice.fundingId;
  const noticeId: number = notice.id;

  const url = `/invest/${fundingId}/notice/${noticeId}`;

  return (
    <Box as={Link} to={url}>
      <Box px={6}>
        <Flex
          direction={"column"}
          py={3}
          gap={1}
          borderBottom={"1px"}
          borderBottomColor={"gray.400"}
        >
          <Box fontSize={"15"} fontWeight={"bold"}>
            {notice.title}
          </Box>

          <Flex>
            <Box fontSize={"14"} mr={3} textColor={"gray.500"}>
              (날짜도주세용)
            </Box>
            <Box
              fontSize={"14"}
              textColor={"gray.500"}
              backgroundColor={"gray.200"}
              borderRadius={5}
              px={2}
            >
              {notice.entName}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
