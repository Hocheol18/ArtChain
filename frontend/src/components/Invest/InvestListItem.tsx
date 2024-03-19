import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import tmpImg from "../../assets/invest-poster-tmp-img.jpg";

export const InvestListItem = () => {
  return (
    <div>
      <Box border={"1px solid"} borderRadius="15" display="flex">
        <Image
          src={tmpImg}
          w={118 / 330}
          h={145}
          mr={15}
          objectFit="cover"
          borderTopLeftRadius="15"
          borderBottomLeftRadius="15"
        />
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="row">
            <Box
              backgroundColor="white"
              border={"1px solid"}
              borderRadius={17}
              px={3}
              py={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={12}>전시</Text>
            </Box>
            <Box
              backgroundColor="white"
              border={"1px solid"}
              borderRadius={17}
              px={3}
              py={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={12} as={"b"}>
                진행중
              </Text>
            </Box>
          </Box>

          <Text fontSize={15} as={"b"}>
            The Power Of Space 전시
          </Text>
          <Box>퍼센트</Box>
          <Box display="flex">
            <Text color={"gray.500"} fontSize={14}>
              총 발행 조각
            </Text>
            <Text color={"gray.500"} fontSize={14} as={"b"}>
              30,000 조각
            </Text>
          </Box>
          <Box display={"flex"}>
            <Text color={"gray.500"} fontSize={14}>
              모집 종료
            </Text>
            <Text color={"gray.500"} fontSize={14} as={"b"}>
              D-4
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
