import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { MypieceTopNav } from "../components/Mypage/Piece/MypieceTopNav";
import { MyInvest } from "../components/Mypage/Piece/MyInvest/MyInvest";
import { MyTransaction } from "../components/Mypage/Piece/MyTransaction/MyTransaction";

export const MyPiece = () => {
  const [check, setCheck] = useState("invest");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };
  return (
    <>
      <MypieceTopNav onCheck={handleCheck} check={check} />
      <Box px={"6%"}>
        {check === "invest" ? <MyInvest /> : <MyTransaction />}
      </Box>
    </>
  );
};
