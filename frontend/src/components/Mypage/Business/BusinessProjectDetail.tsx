import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import falloutboy from "../../../assets/falloutboy.png";
import CommonNotice from "./CommonNotice";

interface Props {
    isNow : string;
}

export default function BusinessProjectDetail({ isNow } : Props) {
  return (
    <>
      <Flex ml={"1.5rem"} mt={"2rem"} w={"100%"} maxH={"160px"}>
        <Image w={"95px"} h={"160px"} src={falloutboy} />
        <Flex direction={"column"} justifyContent={"space-around"}>
          <CommonNotice isNow={isNow} />

          <Text ml={"0.5rem"} as={"b"} fontSize={"1.2rem"}>
            Fall Out Boy :: 2024 Seoul Concert
          </Text>
          <Flex>
            <Text color={"blue.300"} ml={"0.5rem"} as={"b"} fontSize={"1rem"}>
              9,000,000
            </Text>
            <Text color={"blue.300"} ml={"0.3rem"} as={"b"} fontSize={"1rem"}>
              원 모집
            </Text>
            <Text ml={"0.5rem"} color={"blue.400"} as={"b"} fontSize={"1rem"}>
              90%
            </Text>
          </Flex>
          <Flex>
            <Text ml={"0.5rem"} fontSize={"1rem"}>
              정산금액
            </Text>
            <Text ml={"0.5rem"} fontSize={"1rem"}>
              10,000,000
            </Text>
            <Text ml={"0.3rem"} fontSize={"1rem"}>
              원
            </Text>
          </Flex>
          <Flex>
            <Text ml={"0.5rem"} fontSize={"1rem"}>
              정산일
            </Text>
            <Text ml={"0.5rem"} fontSize={"1rem"}>
              2024/03/21
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {isNow === "wait" ? (
        <Flex justifyContent={"center"}>
          <Center
            mt={"0.3rem"}
            mr={"0.3rem"}
            px={"0.6rem"}
            py={"0.3rem"}
            rounded={"0.7rem"}
            fontSize={"xs"}
            ml={"0.5rem"}
            bgColor={"blue.100"}
            w={"90%"}
          >
            <Flex
            // onClick={() => {
            //   navigate("./enroll");
            // }}
            >
              <Text as={"b"} color={"blue.400"} ml={"0.2rem"}>
                정산 완료 신청
              </Text>
            </Flex>
          </Center>
        </Flex>
      ) : null}
    </>
  );
}
