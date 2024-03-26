import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { BottomButtonNavbar } from "../../Common/Navigation/BottomButtonNavbar";
import { useState } from "react";

export const ArtCharge = () => {
  //충전 인덱스
  const [value, setValue] = useState<string>("");

  const handleCharge = () => {};

  //데이터

  const artCoinArr = [
    {
      art: "10",
      money: "10,000",
    },
    {
      art: "50",
      money: "50,000",
    },
    {
      art: "100",
      money: "100,000",
    },
    {
      art: "500",
      money: "500,000",
    },
    {
      art: "1,000",
      money: "1,000,000",
    },
    {
      art: "5,000",
      money: "5,000,000",
    },
  ];

  return (
    <Box mb={70}>
      <Box px={8} pb={2} fontWeight={"bold"} fontSize={"14"}>
        충전하실 아트를 선택하세요
      </Box>
      <Center>
        <RadioGroup value={value} onChange={setValue}>
          <Stack direction="column">
            <Grid templateRows="reapeat(8, 1fr)" gap={3}>
              <Flex
                w={"85vw"}
                ml={8}
                borderTop={"1px solid"}
                borderBottom={"1px solid"}
                borderTopColor={"gray.200"}
                borderBottomColor={"gray.200"}
                px={4}
                py={2}
              >
                <Center w={"50%"} fontWeight={"bold"}>
                  아트
                </Center>
                <Center w={"50%"} fontWeight={"bold"}>
                  결제 금액
                </Center>
              </Flex>
              {artCoinArr.map((item) => (
                <GridItem
                  w={"100%"}
                  borderRadius={"3xl"}
                  backgroundColor={value === item.art ? "blue.100" : "white"}
                >
                  <Radio px={4} py={3} value={item.art}>
                    <Flex w={"85vw"}>
                      <Center fontWeight={"bold"} w={"50%"}>
                        {item.art} 코인
                      </Center>
                      <Center fontWeight={"bold"} w={"50%"}>
                        {item.money} 원
                      </Center>
                    </Flex>
                  </Radio>
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </RadioGroup>
      </Center>
      <BottomButtonNavbar
        text="충전하기"
        category=""
        hanldeButton={handleCharge}
      />
    </Box>
  );
};
