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
        setInvestActive(false);
        setMarketActive(false);
        setMyActive(false);
        break;
      case "invest":
        setHomeActive(false);
        setInvestActive(true);
        setMarketActive(false);
        setMyActive(false);
        break;
      case "market":
        setHomeActive(false);
        setInvestActive(false);
        setMarketActive(true);
        setMyActive(false);
        break;
      case "my":
        setHomeActive(false);
        setInvestActive(false);
        setMarketActive(false);
        setMyActive(true);
        break;
    }
  }, [navType]);

  console.log("invest: " + investActive);
  console.log("home: " + homeActive);

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
