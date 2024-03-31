import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { PieceCommonTap } from "../PieceCommonTap";
import { MyTransactionItem } from "./MyTransactionItem";
import TmpImg from "../../../../assets/invest-poster-tmp-img.jpg";
import { useState } from "react";

export const MyTransaction = () => {
  //탭 선택한 거
  const [check, setCheck] = useState<string>("total");

  const handleCheck = (whatCheck: string) => {
    setCheck(whatCheck);
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
          <Center
            display={"flex"}
            border={"1px solid"}
            mb={5}
            boxShadow={"lg"}
            borderRadius={"lg"}
            borderColor={"gray.200"}
            flexDirection={"column"}
            onClick={handleDropDown}
            backgroundColor={"white"}
          >
            <Center>
              <Image
                src={TmpImg}
                objectFit="cover"
                w={"80px"}
                h={"90px"}
                px={5}
                py={4}
              />
              <Center w={"70%"} fontSize={"15"} fontWeight={"bold"} pr={5}>
                {title}
              </Center>
            </Center>
            <Center>
              <Image
                src={TmpImg}
                objectFit="cover"
                w={"80px"}
                h={"90px"}
                px={5}
                py={4}
              />
              <Center w={"70%"} fontSize={"15"} fontWeight={"bold"} pr={5}>
                {title}
              </Center>
            </Center>
          </Center>
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
              {title}
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
