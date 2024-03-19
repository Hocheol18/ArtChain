import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";
import { useMediaQuery } from "react-responsive";
import { MainPage } from "./MainPage";

interface CommonProps {
  topNavType: string;
  bottomNavType: string;
  children: React.ReactNode;
}

export const CommonPage = ({
  topNavType,
  bottomNavType,
  children,
}: CommonProps) => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  useEffect(() => {}, [topNavType, bottomNavType]);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* 상단네비바가 없으면 없게 */}
      {topNavType === "" ? null : (
        <Box>
          <TopNavBar navType={topNavType} />
        </Box>
      )}
      <Box flex={1} overflowY="auto" mb="70px">
        {children}
      </Box>
      {/* 하단 네비바가 없으면 없게 */}
      {bottomNavType === "" ? null : (
        <Box position={"fixed"} bottom={0} width={isDesktop ? "390px" : "100%"}>
          <BottomNavBar navType={bottomNavType} />
        </Box>
      )}
    </Box>
  );
};
