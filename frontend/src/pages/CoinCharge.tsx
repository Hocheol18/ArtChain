import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";

export const CoinCharge = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="back" />
      </Box>
      <div>코인 충전 페이지</div>
    </div>
  );
};
