import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { PieceCommonTap } from "../PieceCommonTap";
import { MyTransactionItem } from "./MyTransactionItem";
import TmpImg from "../../../../assets/invest-poster-tmp-img.jpg";
import { useState } from "react";

export const MyTransaction = () => {
  //탭 선택한 거
  const [check, setCheck] = useState<string>("total");

  //작품 선택하는 거
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
  };

  //클릭하면 선택됨
  const handleItemClick = (item: string) => {
    setSelectedItem(item); // 선택된 항목 업데이트
    setIsDropDown(false); // 드롭다운 닫기
  };

  //임시
  const title = "스튜디오 지브리 애니메이션 거장 타카하타 이사오 전시";

  //카테고리(invest, market, ing)
  const type = "invest";

  //조각
  const piece = 522;
  //아트코인
  const artCoin = 522;

  //result: 구매/판매
  const result = "buy";

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
      {isDropDown ? (
        <>
          <div
            style={{
              display: "flex",
              border: "1px solid",
              marginBottom: "5px",
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              borderColor: "gray.200",
              flexDirection: "column",
              backgroundColor: "white",
              maxHeight: "200px",
              overflowY: "scroll",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <Center
                key={item}
                w={"100%"}
                height={"100px"}
                onClick={() => handleItemClick(`Item ${item}`)}
              >
                <Image
                  src={TmpImg}
                  objectFit="cover"
                  w={"80px"}
                  h={"90px"}
                  px={5}
                  py={4}
                />
                <Center w={"70%"} fontSize={"15"} fontWeight={"bold"} pr={5}>
                  {item}
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
              src={TmpImg}
              objectFit="cover"
              w={"80px"}
              h={"90px"}
              px={5}
              py={4}
            />
            <Center w={"70%"} fontSize={"15"} fontWeight={"bold"} pr={5}>
              {selectedItem || title}
            </Center>
          </Center>
        </>
      )}

      <PieceCommonTap tapArr={tapArr} handleCheck={handleCheck} check={check} />
      <Box my={7}>
        {/* map으로 돌리는 부분 */}
        <MyTransactionItem
          type="ing"
          piece={piece}
          artCoin={artCoin}
          result=""
        />
        <MyTransactionItem
          type="market"
          piece={piece}
          artCoin={artCoin}
          result="sell"
        />
        <MyTransactionItem
          type="market"
          piece={piece}
          artCoin={artCoin}
          result="buy"
        />
        <MyTransactionItem
          type={type}
          piece={piece}
          artCoin={artCoin}
          result=""
        />
      </Box>
    </>
  );
};
