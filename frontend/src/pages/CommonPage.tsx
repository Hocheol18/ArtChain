import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";
import { useMediaQuery } from "react-responsive";

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
  const isDesktop = useMediaQuery({ minWidth: 701 });

  useEffect(() => {}, [topNavType, bottomNavType]);

  return (
    <Box display="flex" flexDirection="column">
      {/* 상단네비바가 없으면 없게 */}
      {topNavType === "" ? null : (
        <Box position={"fixed"} top={0} w={"100%"} zIndex={2}>
          <TopNavBar navType={topNavType} />
        </Box>
      )}

      {/* 하단 네비바가 없으면 없게 */}
      {bottomNavType === "" ? (
        <Box flex={1} mt={50}>
          {children}
        </Box>
      ) : (
        <>
          <Box flex={1} mt={50} mb="70px">
            {children}
          </Box>
          <Box
            position={"fixed"}
            bottom={0}
            width={isDesktop ? "390px" : "100%"}
          >
            <BottomNavBar navType={bottomNavType} />
          </Box>
        </>
      )}
    </Box>
  );
};
