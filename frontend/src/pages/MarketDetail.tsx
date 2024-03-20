import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SellList from "../components/Market/Detail/SellList";
import { useState } from "react";
import SellHistory from "../components/Market/Detail/SellHistory";

export default function MarketDeatil() {
  const id = useParams() as { id: string };

  const [check, setCheck] = useState("SellList");

  return (
    <>
      <Box p={"1rem"}>
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
      {check === "SellList" ? (
        <Flex p={"0.5rem"}>
          <SellList />
        </Flex>
      ) : (
        <SellHistory />
      )}
    </>
  );
}
