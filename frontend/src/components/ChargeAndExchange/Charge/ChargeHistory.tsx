import { Box, Flex } from "@chakra-ui/react";

interface Props {
  type: string;
}

export const ChargeHistory = ({ type }: Props) => {
  return (
    <div>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={12}
        px={3}
        pt={2}
        pb={6}
      >
        <Box>이더스캔에서 자세히 보기</Box>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#014BA0",
            color: "white",
            borderRadius: "10%",
          }}
        >
          바로가기
        </button>
      </Flex>
      <Flex direction={"column"}>
        {/* 이 아래로 map 사용하면 됨 */}
        <Flex
          direction={"column"}
          mx={6}
          py={2}
          gap={1}
          px={2}
          borderBottom={"1px solid"}
          borderBottomColor={"gray.100"}
        >
          <Flex justifyContent={"space-between"}>
            <Flex gap={5}>
              {type === "charge" ? <Box>구매</Box> : <Box>수량</Box>}
              <Flex gap={1}>
                <Box fontWeight={"bold"}>100</Box>
                <Box>아트</Box>
              </Flex>
            </Flex>
            <Box textColor={"gray.500"}>2024.03.13</Box>
          </Flex>
          <Flex gap={5}>
            <Box>금액</Box>
            <Flex gap={1}>
              <Box fontWeight={"bold"}>10,000</Box>
              <Box>원</Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
