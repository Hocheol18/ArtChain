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
      <Box position={"fixed"} w={"100%"}>
        <MypieceTopNav onCheck={handleCheck} check={check} />
      </Box>
      <Box px={"6%"} mt={20} overflowY={"auto"}>
        {check === "invest" ? <MyInvest /> : <MyTransaction />}
      </Box>
    </>
  );
};
