import { Box, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { InvestListItem } from "../components/Invest/InvestList/InvestListItem";
import TopNav from "../components/Invest/InvestList/TopNav";
import TopSecondNav from "../components/Invest/InvestList/TopSecondNav";

export const InvestList = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  return (
    <Box>
      <TopNav />
      <TopSecondNav />
      <SimpleGrid spacing={10} padding={7}>
        <InvestListItem />
        <InvestListItem />
        <InvestListItem />
        <InvestListItem />
      </SimpleGrid>
    </Box>
  );
};
