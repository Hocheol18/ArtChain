import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SellList from "../components/Market/Detail/SellList";
import { useEffect, useState } from "react";
import SellHistory from "../components/Market/Detail/SellHistory";
import TopSecondNav from "../components/Market/Main/TopSecondNav";
import { getMarketSellingDisplayList } from "../api/market";

export default function MarketDeatil() {
  const id = useParams() as { id: string };
  useEffect(() => {
    getMarketSellingDisplayList({
      fundingId: Number(id.id),
      sortFlag: "높은가격순",
      page: 0,
      size: 6,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  const [check, setCheck] = useState("SellList");

  return (
    <>
      {check === "SellList" ? (
        <>
          <Box p={"1rem"} position={"sticky"} left={"1px"}>
            <Text as={"b"} fontSize={"lg"} onClick={() => setCheck("SellList")}>
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
          <Flex justifyContent={"end"}>
            <TopSecondNav
              first="최신순"
              second="높은 가격 순"
              third="낮은 가격 순"
              forth=""
              isCheck={true}
              statusTopSecondNav=""
              setSecondTopNav={() => {}}
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
        <Grid
          templateColumns="repeat(auto-fill, minmax(160px, 1fr))"
          mt={"0.5rem"}
          p={"1rem"}
        >
          <SellList />
        </Grid>
      ) : (
        <SellHistory />
      )}
    </>
  );
}
