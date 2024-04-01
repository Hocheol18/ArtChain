import { Flex, Box, Image, CloseButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MarketIcon from "../../../../assets/market-icon.svg";
import InvestIcon from "../../../../assets/invest-icon.svg";
import ArtCoinIcon from "../../../../assets/artcoin-icon.svg";
import PieceIcon from "../../../../assets/my-icon.svg";
import { GetMyPieceListResponse } from "../../../../type/mypage.interface";

interface Props {
  transaction: GetMyPieceListResponse;
}

export const MyTransactionItem = ({ transaction }: Props) => {
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    switch (transaction.transactionType) {
      case "투자":
        setCategory("투자");
        break;
      case "거래":
        setCategory("마켓");
        break;
      case "판매중":
        setCategory("마켓");
        break;
    }
  }, [transaction]);

  return (
    <>
      <Box
        borderBottom={"1px solid"}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        mb={4}
        pb={4}
        borderBottomColor={"gray.200"}
        px={1}
      >
        <Flex justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Box
              display={"flex"}
              px={"0.6rem"}
              py={"0.1rem"}
              borderRadius={"15"}
              boxShadow={"md"}
              border={"1px"}
              borderColor={"gray.300"}
              paddingX={2}
              paddingY={1}
              mx={"0.5rem"}
              alignItems={"center"}
            >
              <Box w={17}>
                {transaction.tradeFlag === "투자" ? (
                  <Image
                    src={InvestIcon}
                    filter="invert(29%) sepia(3%) saturate(1413%) hue-rotate(169deg) brightness(94%) contrast(85%)}"
                  />
                ) : (
                  <Image src={MarketIcon} />
                )}
              </Box>
              <Box fontSize={14} textColor={"gray.500"}>
                {category}
              </Box>
            </Box>
            {transaction.tradeFlag === "구매" ? (
              <Box
                borderRadius={"15"}
                color={"#D90000"}
                paddingX={2}
                paddingY={1}
              >
                {transaction.tradeFlag}
              </Box>
            ) : transaction.tradeFlag === "판매" ? (
              <Box
                borderRadius={"15"}
                color={"blue.300"}
                paddingX={2}
                paddingY={1}
              >
                {transaction.tradeFlag}
              </Box>
            ) : null}
          </Flex>
          <Flex alignItems={"center"}>
            <button
              style={{
                padding: "0px 10px",
                backgroundColor: "#E7EFF8",
                borderRadius: "15%",
                color: "#014BA0",
                fontSize: "15px",
              }}
            >
              상세보기
            </button>
            {transaction.transactionType === "판매중" ? (
              <CloseButton ml={1} size={"sm"} />
            ) : null}
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Flex flex={1} gap={2}>
            <Box display={"flex"} alignItems={"center"}>
              <Image
                src={PieceIcon}
                filter={
                  "invert(19%) sepia(100%) saturate(1891%) hue-rotate(201deg) brightness(90%) contrast(99%)"
                }
                w={25}
                h={25}
              />
              <Box fontSize={15}>{transaction.pieceCount}</Box>
              <Box fontSize={15}>조각</Box>
            </Box>
            <Box display={"flex"} flex={1} alignItems={"center"}>
              <Image src={ArtCoinIcon} w={27} />
              <Box fontSize={15}>{transaction.coinCount}</Box>
              <Box fontSize={15}>코인</Box>
            </Box>
          </Flex>
          <Box fontSize={"14"}>
            {transaction.createdAt.slice(0, 10)}{" "}
            {transaction.createdAt.slice(11, 19)}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
