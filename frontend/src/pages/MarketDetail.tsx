import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SellList from "../components/Market/Detail/SellList";
import { useEffect, useState } from "react";
import SellHistory from "../components/Market/Detail/SellHistory";
import TopSecondNav from "../components/Market/Main/TopSecondNav";
import { getMarketSellingDisplayListInterface } from "../type/market.interface";
import { getMarketSellingDisplayList } from "../api/market";
import useUserInfo from "../store/useUserInfo";
import MarketSell from "../components/Market/Main/MarketSell";

export default function MarketDeatil() {
  const id = useParams() as { id: string };
  const [statusTopSecondNav, setSecondTopNav] = useState<string>("최신순");
  const [marketDetails, setMarketDetail] = useState<
    getMarketSellingDisplayListInterface[]
  >([]);
  const { userInfo } = useUserInfo();

  useEffect(() => {
    getMarketSellingDisplayList({
      fundingId: Number(id.id),
      sortFlag: statusTopSecondNav,
      page: 0,
      size: 6,
    })
      .then((res) => setMarketDetail(res.data.data))
      .catch((err) => console.log(err));
  }, [statusTopSecondNav]);

  const [check, setCheck] = useState("SellList");

  useEffect(() => {
    console.log(marketDetails);
  }, [marketDetails]);

  return (
    <>
      {check === "SellList" ? (
        <>
          <Flex
            ml={"1rem"}
            mt={"1rem"}
            position={"sticky"}
            left={"1px"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text
                as={"b"}
                fontSize={"lg"}
                onClick={() => setCheck("SellList")}
              >
                판매 리스트
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                ml={"1rem"}
                onClick={() => setCheck("SellHistory")}
              >
                조각 거래 내역
              </Text>
            </Box>
            <Box>{userInfo.isLogin ? <MarketSell /> : null}</Box>
          </Flex>

          <Flex justifyContent={"end"} mt={"0.5rem"}>
            <TopSecondNav
              first="최신순"
              second="높은가격순"
              third="낮은가격순"
              forth=""
              isCheck={true}
              statusTopSecondNav={statusTopSecondNav}
              setSecondTopNav={setSecondTopNav}
            />
          </Flex>
        </>
      ) : (
        <Box p={"1rem"} position={"sticky"} left={"1px"}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            onClick={() => setCheck("SellList")}
          >
            판매 리스트
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            onClick={() => setCheck("SellList")}
            ml={"1rem"}
          >
            조각 거래 내역
          </Text>
        </Box>
      )}

      {check === "SellList" ? (
        <>
          {marketDetails.length >= 1 ? (
            <Grid
              templateColumns="repeat(auto-fill, minmax(160px, 1fr))"
              p={"0.8rem"}
            >
              {marketDetails.map(
                (data: getMarketSellingDisplayListInterface) => {
                  if (data.status !== "SOLD") {
                    return (
                      <SellList
                        key={data.id}
                        id={data.id}
                        fundingId={data.fundingId}
                        pieceCount={data.pieceCount}
                        totalCoin={data.totalCoin}
                        coinPerPiece={data.coinPerPiece}
                        sellerId={data.sellerId}
                        sellerAddress={data.sellerAddress}
                        status={data.status}
                        contractAddress={data.contractAddress}
                        
                      />
                    );
                  }
                }
              )}
            </Grid>
          ) : (
            <Center h={"500px"}>
              <Text fontSize={"1.5rem"}>현재 판매중인 상품이 없습니다</Text>
            </Center>
          )}
        </>
      ) : (
        <SellHistory fundingId={Number(id.id)} page={0} size={6} />
      )}
    </>
  );
}
