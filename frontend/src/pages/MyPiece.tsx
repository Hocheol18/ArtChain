import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MypieceTopNav } from "../components/Mypage/Piece/MypieceTopNav";
import { MyInvest } from "../components/Mypage/Piece/MyInvest/MyInvest";
import { MyTransactionList } from "../components/Mypage/Piece/MyTransaction/MyTransactionList";
import { MyTransaction } from "../components/Mypage/Piece/MyTransaction/MyTransaction";

interface Props {
  type: string;
}

export const MyPiece = ({ type }: Props) => {
  const [check, setCheck] = useState("invest");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };

  useEffect(() => {
    switch (type) {
      case "invest":
        setCheck("invest");
        break;
      case "transaction-list":
        setCheck("transaction");
        break;
      case "transaction":
        setCheck("transaction");
        break;
    }
  }, [type]);

  return (
    <>
      <Box position={"fixed"} w={"100%"}>
        <MypieceTopNav onCheck={handleCheck} check={check} />
      </Box>
      <Box px={"6%"} mt={20} overflowY={"auto"}>
        {type === "invest" ? (
          <MyInvest />
        ) : type === "transaction-list" ? (
          <MyTransactionList />
        ) : (
          <MyTransaction />
        )}
      </Box>
    </>
  );
};
