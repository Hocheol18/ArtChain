import { useEffect, useState } from "react";
import MyInvestDetail from "./MyInvestDetail";
import { Box, Center, Flex, useEditable } from "@chakra-ui/react";
import { PieceCommonTap } from "../PieceCommonTap";
import { getMyInvestmentHistory } from "../../../../api/mypage";
import { GetMyIntegratedList } from "../../../../type/mypage.interface";

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

  const getMyInvestList = async (check: string) => {
    const res = await getMyInvestmentHistory({ status: check });
    setMyIntegratedList(res.myIntegratedList);
  };

  const [checkParam, setCheckParam] = useState<string>("ALL");
  const [myIntegratedList, setMyIntegratedList] = useState<
    GetMyIntegratedList[]
  >([]);

  useEffect(() => {
    switch (check) {
      case "total":
        setCheckParam("ALL");
        getMyInvestList("ALL");
        break;
      case "ing":
        setCheckParam("RECRUITMENT_STATUS");
        getMyInvestList("RECRUITMENT_STATUS");
        break;
      case "end":
        setCheckParam("PENDING_SETTLEMENT");
        getMyInvestList("PENDING_SETTLEMENT");
        break;
      case "complete":
        setCheckParam("SETTLED");
        getMyInvestList("SETTLED");
        break;
    }
  }, [check]);

  return (
    <>
      <PieceCommonTap tapArr={tapArr} handleCheck={handleCheck} check={check} />
      <Flex mt={5} direction={"column"} gap={4}>
        {myIntegratedList.length < 1 ? (
          <Center py={20}>투자한 작품이 없습니다.</Center>
        ) : (
          myIntegratedList.map((item) => (
            <MyInvestDetail myIntegratedData={item} />
          ))
        )}
      </Flex>
    </>
  );
};
