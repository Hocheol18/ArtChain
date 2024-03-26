import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { MyTransactionTap } from "./MyTransactionTap";
import { MyTransactionItem } from "./MyTransactionItem";
import TmpImg from "../../../../assets/invest-poster-tmp-img.jpg";

export const MyTransaction = () => {
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

  return (
    <>
      <Center
        display={"flex"}
        border={"1px solid"}
        mb={5}
        boxShadow={"lg"}
        borderRadius={"lg"}
        borderColor={"gray.200"}
      >
        <Image
          src={TmpImg}
          objectFit="cover"
          height={140}
          w={200}
          px={5}
          py={4}
        />
        <Center fontSize={"18"} fontWeight={"bold"} pr={5}>
          {title}
        </Center>
      </Center>

      <MyTransactionTap />
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
