import { Center, Flex, Image, Text } from "@chakra-ui/react";
import falloutboy from "../../../assets/falloutboy.png";
import CommonNotice from "./CommonNotice";
import { useEffect, useState } from "react";

interface Props {
  isNow: string;
}

export default function BusinessProjectDetail({ isNow }: Props) {
  const [badgeText, setBadgeText] = useState<string>("");

  useEffect(() => {
    switch (isNow) {
      case "now":
        setBadgeText("진행중");
        break;
      case "wait":
        setBadgeText("정산대기");

        break;
      case "":
        setBadgeText("정산완료");

        break;
    }
  }, [isNow]);

  return (
    <>
      <Center mx={"1"} mt={"2rem"} w={"100%"}>
        <Image w={"30"} h={"36"} src={falloutboy} />
        <Flex direction={"column"} justifyContent={"space-around"}>
          <CommonNotice text={badgeText} isNow={isNow} />

          <Text ml={"0.5rem"} as={"b"} fontSize={"1rem"}>
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
            <Text ml={"0.5rem"} fontSize={"0.9rem"}>
              정산금액
            </Text>
            <Text ml={"0.5rem"} fontSize={"0.9rem"}>
              10,000,000
            </Text>
            <Text ml={"0.3rem"} fontSize={"0.9rem"}>
              원
            </Text>
          </Flex>
          <Flex>
            <Text ml={"0.5rem"} fontSize={"0.9rem"}>
              정산일
            </Text>
            <Text ml={"0.5rem"} fontSize={"1rem"}>
              2024/03/21
            </Text>
          </Flex>
        </Flex>
      </Center>
      {isNow === "wait" ? (
        <Flex justifyContent={"center"} mt={2} mx={"1"}>
          <Center
            px={"0.6rem"}
            py={"0.5rem"}
            fontSize={"xs"}
            bgColor={"blue.100"}
            w={"100%"}
          >
            <Flex
            // onClick={() => {
            //   navigate("./enroll");
            // }}
            >
              <Text as={"b"} color={"blue.400"}>
                정산 완료 신청
              </Text>
            </Flex>
          </Center>
        </Flex>
      ) : null}
    </>
  );
}
