import { Box, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReadHistory } from "../../api/coin";
import { ReadHistoryResponse } from "../../type/coin.interface";
import { formatNumberWithComma } from "../Common/Comma";

interface Props {
  type: string;
}

export const History = ({ type }: Props) => {
  const [artHistory, setArtHistory] = useState<ReadHistoryResponse[]>();

  //history 내역 가져오기
  const getHistoryData = async () => {
    const res = await ReadHistory({ inoutFlag: type, page: 0, size: 10 });
    setArtHistory(res);
  };

  useEffect(() => {
    getHistoryData();
    console.log(artHistory);
  }, []);

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
        {artHistory?.length !== 0 ? (
          <>
            {artHistory?.map((item, index) => (
              <Flex
                direction={"column"}
                mx={6}
                py={2}
                gap={1}
                px={2}
                borderBottom={"1px solid"}
                borderBottomColor={"gray.100"}
                key={index}
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex direction={"column"}>
                    <Flex gap={5}>
                      {type === "충전" ? <Box>구매</Box> : <Box>수량</Box>}
                      <Flex gap={1}>
                        <Box fontWeight={"bold"}>
                          {formatNumberWithComma(item.coinAmount)}
                        </Box>
                        <Box>아트</Box>
                      </Flex>
                    </Flex>
                    <Flex gap={5}>
                      <Box>금액</Box>
                      <Flex gap={1}>
                        <Box fontWeight={"bold"}>
                          {formatNumberWithComma(item.currencyFlow)}
                        </Box>
                        <Box>원</Box>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Center
                    display={"flex"}
                    flexDirection={"column"}
                    textColor={"gray.500"}
                  >
                    <Box>{item.createAt.slice(0, 10)}</Box>
                    <Box>{item.createAt.slice(11, 19)}</Box>
                  </Center>
                </Flex>
              </Flex>
            ))}
          </>
        ) : (
          <Center py={14} textColor={"gray.400"} fontSize={"17"}>
            {type} 내역이 없습니다.
          </Center>
        )}
      </Flex>
    </div>
  );
};
