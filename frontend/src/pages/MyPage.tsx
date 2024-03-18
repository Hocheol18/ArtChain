import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";

export const MyPage = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="back" />
      </Box>
      <div>마이페이지</div>
    </div>
  );
};
