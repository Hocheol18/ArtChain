import { useState } from "react";
import MyInvestDetail from "./MyInvestDetail";
import { Box, Flex } from "@chakra-ui/react";
import { PieceCommonTap } from "../PieceCommonTap";

export const MyInvest = () => {
  //탭 선택한 거
  const [check, setCheck] = useState<string>("total");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };

  const tapArr = [
    {
      name: "전체",
      check: "total",
    },
    {
      name: "진행중",
      check: "ing",
    },
    {
      name: "모집종료",
      check: "end",
    },
    {
      name: "정산완료",
      check: "complete",
    },
  ];

  return (
    <>
      <PieceCommonTap tapArr={tapArr} handleCheck={handleCheck} check={check} />
      <Flex mt={5} direction={"column"} gap={4}>
        <MyInvestDetail isNow="now" />
        <MyInvestDetail isNow="wait" />
        <MyInvestDetail isNow="end" />
      </Flex>
    </>
  );
};
