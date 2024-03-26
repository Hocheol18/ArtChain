import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";

interface Props {
  artNum: number;
  value: number;
}

export const InvestArt = ({ artNum, value }: Props) => {
  return (
    <div>
      <Box
        mx={7}
        pt={3}
        pb={7}
        px={3}
        borderBottom={"1px solid"}
        borderBottomStyle="dashed"
        borderBottomColor={"gray.400"}
      >
        <SimpleGrid columns={3} alignItems={"center"} spacingX={1}>
          <Box fontSize={"17"} fontWeight={"bold"}>
            현재 아트 잔액
          </Box>
          <Box
            fontSize={"17"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"right"}
          >
            {artNum}
          </Box>
          <Box display={"flex"} justifyContent={"right"}>
            <Button
              variant="unstyled"
              px={3}
              backgroundColor="blue.300"
              color={"white"}
            >
              충전
            </Button>
          </Box>
          <Box fontSize={"17"} fontWeight={"bold"}>
            투자 후 잔액
          </Box>
          <Box
            fontSize={"17"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"right"}
            textColor={"blue.200"}
          >
            {Number.isNaN(value) ? artNum - 0 : artNum - value}
          </Box>
        </SimpleGrid>
        <Flex justifyContent={"left"} alignItems={"center"}></Flex>
        <Box></Box>
      </Box>
    </div>
  );
};
