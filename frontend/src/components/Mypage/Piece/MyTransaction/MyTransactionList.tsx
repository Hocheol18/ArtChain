import { Center, Box, Grid, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { MyTransactionListItem } from "./MyTransactionListItem";

export const MyTransactionList = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={7}
        px={6}
        pb={3}
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
      <Grid
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        justifyContent="center"
      >
        {/* map으로 반복문 돌리기 */}
        <Center>
          <MyTransactionListItem />
        </Center>
        <Center>
          <MyTransactionListItem />
        </Center>
        <Center>
          <MyTransactionListItem />
        </Center>
        <Center>
          <MyTransactionListItem />
        </Center>
        <Center>
          <MyTransactionListItem />
        </Center>
      </Grid>
    </>
  );
};
