import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SellList from "../components/Market/Detail/SellList";

export default function MarketDeatil() {
  const id = useParams() as { id: string };
  console.log(id);
  return (
    <>
      <Box p={"1rem"}>
        <Text as={"b"} fontSize={"lg"}>
          판매 리스트
        </Text>
        <Text as={"b"} fontSize={"lg"} color={"gray.400"} ml={"1rem"}>
          조각 거래 내역
        </Text>
      </Box>
      <Flex p={"0.5rem"}>
        <SellList />
      </Flex>
    </>
  );
}
