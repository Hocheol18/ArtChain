import React, { useEffect, useState } from "react";
import { Box, Image, Text, Progress } from "@chakra-ui/react";
import tmpImg from "../../../assets/invest-poster-tmp-img.jpg";

export const InvestListItem = () => {
  // ing, end, complete
  const [statusBadge, setStatusBadge] = useState("ing");
  const [statusColor, setStatusColor] = useState("blue.300");
  const [brightness, setBrightness] = useState("brightness(100%)");

  useEffect(() => {
    switch (statusBadge) {
      case "ing":
        setStatusColor("blue.300");
        setBrightness("brightness(100%)");
        break;
      case "end":
        setStatusColor("gray.500");
        setBrightness("brightness(70%)");
        break;
      case "complete":
        setStatusColor("blue.200");
        setBrightness("brightness(50%)");
        break;
    }
  }, [statusBadge]);

  return (
    <div>
      <Box
        border={"1px solid"}
        borderColor={"gray.100"}
        borderRadius="15"
        display="flex"
        boxShadow={"lg"}
      >
        <Image
          src={tmpImg}
          w={120}
          minH={150}
          mr={3}
          objectFit="cover"
          borderTopLeftRadius="15"
          borderBottomLeftRadius="15"
          filter={brightness}
        />
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          pr={3}
          justifyContent={"space-around"}
        >
          <Box display="flex" flexDirection="row">
            <Box
              backgroundColor="white"
              border={"1px solid"}
              borderColor={"gray.200"}
              borderRadius={17}
              px={3}
              py={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow={"base"}
              mr={1}
            >
              <Text fontSize={12}>전시</Text>
            </Box>
            <Box
              backgroundColor={statusColor}
              borderRadius={17}
              px={3}
              py={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow={"base"}
            >
              <Text fontSize={12} as={"b"} color={"white"}>
                진행중
              </Text>
            </Box>
          </Box>

          <Text fontSize={15} as={"b"}>
            The Power Of Space 전시
          </Text>
          <Box display={"flex"} alignItems={"center"}>
            <Progress
              value={80}
              size={"sm"}
              sx={{
                width: "100%", // 너비를 100%로 설정하여 부모 컨테이너를 꽉 채우도록 함
                "& > div": {
                  backgroundColor: `${statusColor}`, // 진행 막대의 색상을 직접 지정
                },
              }}
            />
            <Text fontSize={14} ml={5} as={"b"} color={"gray.500"}>
              80%
            </Text>
          </Box>
          <Box display="flex" justifyContent={"space-between"}>
            <Text color={"gray.500"} fontSize={14}>
              총 발행 조각
            </Text>
            <Text color={"gray.500"} fontSize={14} as={"b"}>
              30,000 조각
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
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
