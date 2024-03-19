import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Spacer, border } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeIcon from "../../../assets/home-icon.svg";
import InvestIcon from "../../../assets/invest-icon.svg";
import MarketIcon from "../../../assets/market-icon.svg";
import MyIcon from "../../../assets/my-icon.svg";
import { BottomNavItem } from "./BottomNavItem";

interface Props {
  navType: string;
}

export const BottomNavBar = ({ navType }: Props) => {
  const [homeActive, setHomeActive] = useState<boolean>(false);
  const [investActive, setInvestActive] = useState<boolean>(false);
  const [marketActive, setMarketActive] = useState<boolean>(false);
  const [myActive, setMyActive] = useState<boolean>(false);

  useEffect(() => {
    console.log(navType);
    switch (navType) {
      case "home":
        setHomeActive(true);
        break;
      case "invest":
        setInvestActive(true);
        break;
      case "market":
        setMarketActive(true);
        break;
      case "my":
        setMyActive(true);
        break;
    }
  }, [navType]);

  return (
    <div>
      <Flex height="70" borderTop={"1px"} borderTopColor="#EFF0F3">
        <BottomNavItem text="홈" active={homeActive} />
        <BottomNavItem text="투자" active={investActive} />
        <BottomNavItem text="마켓" active={marketActive} />
        <BottomNavItem text="마이" active={myActive} />
      </Flex>
    </div>
  );
};
