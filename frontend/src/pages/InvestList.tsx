import React from "react";
import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import { TopNavBar } from "../components/Common/Navigation/TopNavBar";
import { BottomNavBar } from "../components/Common/Navigation/BottomNavBar";
import { useMediaQuery } from "react-responsive";
import { InvestListItem } from "../components/Invest/InvestListItem";

export const InvestList = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  console.log(isDesktop);
  return (
    <div>
      <SimpleGrid spacing={10} padding={7}>
        <InvestListItem />
        <InvestListItem />
        <InvestListItem />
        <InvestListItem />
      </SimpleGrid>
    </div>
  );
};
