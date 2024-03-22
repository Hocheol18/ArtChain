import { Box, Text } from "@chakra-ui/react";

interface Props {
  onCheck: (whatCheck: string) => void;
  check: string;
}

export const MypieceTopNav = ({ onCheck, check }: Props) => {
  const handleClick = (whatCheck: string) => {
    onCheck(whatCheck);
  };

  return (
    <>
      {check === "invest" ? (
        <Box px={"6%"} py={"5%"}>
          <Text as={"b"} fontSize={"lg"} onClick={() => handleClick("invest")}>
            나의 투자
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            ml={"1rem"}
            onClick={() => handleClick("transaction")}
          >
            나의 거래
          </Text>
        </Box>
      ) : (
        <Box px={"6%"} py={"5%"}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            onClick={() => handleClick("invest")}
          >
            나의 투자
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            onClick={() => handleClick("transaction")}
            ml={"1rem"}
          >
            나의 거래
          </Text>
        </Box>
      )}
    </>
  );
};
