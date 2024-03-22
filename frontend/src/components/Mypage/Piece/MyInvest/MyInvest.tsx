import React from "react";
import TopSecondNav from "../../../Market/Main/TopSecondNav";
import MyInvestDetail from "./MyInvestDetail";
import { Box } from "@chakra-ui/react";

export const MyInvest = () => {
  return (
    <>
      <TopSecondNav
        first="전체"
        second="진행중"
        third="모집종료"
        forth="정산완료"
        isCheck={false}
      />
      <Box mt={"2rem"}>
        <MyInvestDetail isNow="now" />
        <MyInvestDetail isNow="wait" />
        <MyInvestDetail isNow="end" />
      </Box>
    </>
  );
};
