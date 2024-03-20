import React from "react";
import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";
import { useMediaQuery } from "react-responsive";
import { InvestListItem } from "../components/Invest/InvestList/InvestListItem";
import TopNav from "../components/Invest/InvestList/TopNav";
import TopSecondNav from "../components/Invest/InvestList/TopSecondNav";

export const InvestList = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  return (
    <div>
      <TopNav />
      <TopSecondNav />
      <SimpleGrid spacing={10} padding={7}>
        <InvestListItem />
        <InvestListItem />
        <InvestListItem />
        <InvestListItem />
      </SimpleGrid>
    </div>
  );
};
