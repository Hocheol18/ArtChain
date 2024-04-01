import { useEffect, useState } from "react";
import { CommonTopBox } from "../components/ChargeAndExchange/CommonTopBox";
import { ArtExchange } from "../components/ChargeAndExchange/Exchange/ArtExchange";
import { History } from "../components/ChargeAndExchange/History";
import { Box } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";

export const Exchange = () => {
  const handleExchange = () => {};

  const [check, setCheck] = useState<string>("one");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };

  return (
    <Box>
      <CommonTopBox
        text1="아트 환전"
        text2="환전 내역"
        handleCheck={handleCheck}
        check={check}
      />

      {check === "one" ? <ArtExchange /> : <History type="환전" />}

      <BottomButtonNavbar
        text="환전하기"
        category=""
        hanldeButton={handleExchange}
      />
    </Box>
  );
};
