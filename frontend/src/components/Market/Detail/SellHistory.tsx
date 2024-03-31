import { Box, Center, Flex, Text } from "@chakra-ui/react";
import SellHistoryChart from "./SellHistoryChart";
import SellHistoryComponent from "../History/SellHistroyComponent";
import SellEnrollHistory from "../History/SellEnrollHistory";
import {
  getMarketHistoryDisplayListAxiosInterface,
  getMarketHistoryDisplayListInterface,
} from "../../../type/market.interface";
import { useEffect, useState } from "react";
import { getMarketHistoryDisplayList } from "../../../api/market";

export default function SellHistory(
  params: getMarketHistoryDisplayListAxiosInterface
) {
  useEffect(() => {
    getMarketHistoryDisplayList({
      fundingId: params.fundingId,
      page: params.page,
      size: params.size,
    })
      .then((res) => setContents(res.data.data))
      .catch((err) => console.log(err));
  }, [params.fundingId]);

  const [contents, setContents] = useState<
    getMarketHistoryDisplayListInterface[]
  >([]);

  return (
    <>
      <Box position={"sticky"} left={"1px"}>
        <Box ml={"1.5rem"} w={"90%"}>
          <SellHistoryChart />
        </Box>
        <Box ml={"1rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1.2rem"}>
            일일 1조각당 평균 가격
          </Text>
        </Box>
      </Box>
      <Box ml={"1rem"}>
        <Box
          w={"800px"}
          borderBottom={"2px"}
          borderTop={"2px"}
          color={"gray.300"}
          mt={"1rem"}
        >
          <Flex minW={"600px"} overflowX={"scroll"} mt={"0.1rem"} mb={"0.1rem"}>
            <Center w={"4rem"} ml={"4rem"}>
              <Text as={"b"} color={"black.100"}>
                거래분류
              </Text>
            </Center>
            <Center w={"5rem"}>
              <Text as={"b"} color={"black.100"}>
                조각수
              </Text>
            </Center>
            <Center w={"6rem"}>
              <Text as={"b"} color={"black.100"}>
                조각당가격
              </Text>
            </Center>
            <Center w={"6rem"}>
              <Text as={"b"} color={"black.100"}>
                총가격
              </Text>
            </Center>
            <Center w={"6rem"}>
              <Text as={"b"} color={"black.100"}>
                판매자
              </Text>
            </Center>
            <Center w={"7rem"}>
              <Text as={"b"} color={"black.100"}>
                구매자
              </Text>
            </Center>
            <Center w={"12rem"}>
              <Text as={"b"} color={"black.100"}>
                시간
              </Text>
            </Center>
          </Flex>
        </Box>
        {contents.length >= 1 ?
          <>
            {contents.map((data: getMarketHistoryDisplayListInterface) => {
              if (data.status === "SOLD") {
                return (
                  <SellHistoryComponent
                    key={data.id}
                    id={data.id}
                    fundingId={data.fundingId}
                    pieceCount={data.pieceCount}
                    totalCoin={data.totalCoin}
                    coinPerPiece={data.coinPerPiece}
                    sellerId={data.sellerId}
                    sellerAddress={data.sellerAddress}
                    buyerId={data.buyerId}
                    buyerAddress={data.buyerAddress}
                    status={data.status}
                    historyTime={data.historyTime}
                  />
                );
              } else if (data.status === "LISTED") {
                return (
                  <SellEnrollHistory
                    key={data.id}
                    id={data.id}
                    fundingId={data.fundingId}
                    pieceCount={data.pieceCount}
                    totalCoin={data.totalCoin}
                    coinPerPiece={data.coinPerPiece}
                    sellerId={data.sellerId}
                    sellerAddress={data.sellerAddress}
                    buyerId={data.buyerId}
                    buyerAddress={data.buyerAddress}
                    status={data.status}
                    historyTime={data.historyTime}
                  />
                );
              }
            })
            }</> : <Center h={"300px"}><Text fontSize={"1.5rem"}>거래내역이 없습니다</Text></Center>}


      </Box>
    </>
  );
}
