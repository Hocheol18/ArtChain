import React from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";

export const LoginPage = () => {
  return (
    <div>
      <Box>
        <TopNavBar navType="logo" />
      </Box>
      <div>로그인페이지</div>
    </div>
  );
};
