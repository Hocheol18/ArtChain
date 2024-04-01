import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { PieceCommonTap } from "../PieceCommonTap";
import { MyTransactionItem } from "./MyTransactionItem";
import TmpImg from "../../../../assets/invest-poster-tmp-img.jpg";
import { useEffect, useState } from "react";
import { getMyPieceDropDown, getMyPieceList } from "../../../../api/mypage";
import {
  GetMyPieceDropDown,
  GetMyPieceListResponse,
} from "../../../../type/mypage.interface";

export const MyTransaction = () => {
  //탭 선택한 거
  const [check, setCheck] = useState<string>("total");

  //선택한 작품
  const [selectedItem, setSelectedItem] = useState<GetMyPieceDropDown>();

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };

  //클릭하면 선택됨
  const handleItemClick = (item: GetMyPieceDropDown) => {
    setSelectedItem(item); // 선택된 항목 업데이트
    myPieceList("ALL", item);
    setIsDropDown(false); // 드롭다운 닫기
  };

  //카테고리(invest, market, ing)
  const type = "invest";

  //조각
  const piece = 522;
  //아트코인
  const artCoin = 522;

  //result: 구매/판매
  const result = "buy";

  //드롭다운 리스트 배열
  const [dropDownList, setDropDownList] = useState<GetMyPieceDropDown[]>([]);

  //나의 거래 드롭다운 리스트 가져오기
  const myPieceDropDownList = async () => {
    const res = await getMyPieceDropDown();
    setDropDownList(res);
    setSelectedItem(res[0]);
    myPieceList("ALL", res[0]);
  };

  //작품별 거래 내역 보기
  const [transactionList, setTransactionList] = useState<
    GetMyPieceListResponse[]
  >([]);

  //작품별 거래 내역 리스트 가져오기
  const myPieceList = async (
    filter: string,
    select: GetMyPieceDropDown | undefined
  ) => {
    if (select) {
      const res = await getMyPieceList({
        fundingId: select.fundingId,
        filterFlag: filter,
        page: 0,
        size: 10,
      });

      console.log(res);

      setTransactionList(res);
    }
  };

  useEffect(() => {
    myPieceDropDownList();
  }, []);

  useEffect(() => {
    switch (check) {
      case "total":
        myPieceList("ALL", selectedItem);

        break;
      case "invest":
        myPieceList("투자", selectedItem);
        break;
      case "transaction":
        myPieceList("마켓", selectedItem);
        break;
      case "sell":
        myPieceList("판매중", selectedItem);
        break;
    }
  }, [check]);

  const tapArr = [
    {
      name: "전체",
      check: "total",
    },
    {
      name: "투자",
      check: "invest",
    },
    {
      name: "거래",
      check: "transaction",
    },
    {
      name: "판매중",
      check: "sell",
    },
  ];

  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <>
      {dropDownList.length !== 0 ? (
        isDropDown ? (
          <>
            <div
              style={{
                display: "flex",
                border: "1px solid",
                marginBottom: "5px",
                boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                borderColor: "#EEF0F3",
                flexDirection: "column",
                backgroundColor: "white",
                maxHeight: "180px",
                overflowY: "scroll",
              }}
            >
              {dropDownList?.map((item, index) => (
                <Center
                  key={index}
                  w={"100%"}
                  height={"100px"}
                  onClick={() => handleItemClick(item)}
                >
                  <Image
                    src={item.poster}
                    objectFit="cover"
                    w={"80px"}
                    h={"90px"}
                    px={5}
                    py={4}
                  />
                  <Center w={"70%"} fontSize={"15"} fontWeight={"bold"} pr={5}>
                    {item.fundingName}
                  </Center>
                </Center>
              ))}
            </div>
          </>
        ) : (
          <>
            <Center
              display={"flex"}
              border={"1px solid"}
              mb={5}
              boxShadow={"lg"}
              borderRadius={"lg"}
              borderColor={"gray.200"}
              onClick={handleDropDown}
            >
              <Image
                src={selectedItem?.poster}
                objectFit="cover"
                w={"80px"}
                h={"90px"}
                px={5}
                py={4}
              />
              <Center w={"70%"} fontSize={"15"} fontWeight={"bold"} pr={5}>
                {selectedItem?.fundingName}
              </Center>
            </Center>
          </>
        )
      ) : (
        <Center py={10} textColor={"gray.400"} fontWeight={"bold"}>
          거래한 작품이 없습니다.
        </Center>
      )}
      <PieceCommonTap tapArr={tapArr} handleCheck={handleCheck} check={check} />
      <Box my={7}>
        {/* map으로 돌리는 부분 */}
        {transactionList.length !== 0 ? (
          transactionList.map((item, index) => (
            <MyTransactionItem transaction={item} />
          ))
        ) : (
          <Center py={"20%"} textColor={"gray.400"}>
            내역이 없습니다.
          </Center>
        )}
      </Box>
    </>
  );
};
