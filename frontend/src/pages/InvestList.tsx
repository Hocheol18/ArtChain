import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";

export const InvestList = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="logo" />
      </Box>
      <div>투자리스트 페이지</div>
      <Box>
        <BottomNavBar navType="invest" />
      </Box>
    </div>
  );
};
