import { Box, Center, Flex, Input } from "@chakra-ui/react";
interface Props {
  TokenAmount: number;
  setTokenAmount: (tokenAmount: number) => void;
}

export const ArtExchange = ({ TokenAmount, setTokenAmount }: Props) => {
  const artNum = 50000;
  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (newValue > artNum) {
      setTokenAmount(artNum);
    } else {
      setTokenAmount(newValue);
    }
  };

  return (
    <div>
      <Box
        px={7}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Input
          w={250}
          py={14}
          value={TokenAmount || ""}
          onChange={handleSetValue}
          type="number"
          placeholder="몇 아트를 환전할까요?"
          variant="unstyled"
          inputMode="numeric"
          fontSize={"25"}
          fontWeight={"bold"}
          textAlign={"center"}
          max={artNum} // 최대값 설정
          sx={{
            "::placeholder": {
              textAlign: "center",
              textColor: "#9FA0A2",
            },
          }}
        />
        {Number.isNaN(TokenAmount) || TokenAmount === undefined ? null : (
          <Box fontSize={"25"} fontWeight={"bold"}>
            아트
          </Box>
        )}
      </Box>
      <Center display={"flex"} justifyContent={"space-around"} fontSize={"20"}>
        <Box>환전 될 금액</Box>
        <Flex>
          <Box fontWeight={"bold"}>
            {Number.isNaN(TokenAmount) || TokenAmount === undefined
              ? 0
              : TokenAmount * 1000}
          </Box>

          <Box ml={3}>원</Box>
        </Flex>
      </Center>
    </div>
  );
};
