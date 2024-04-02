import { Center, Flex, Image, Text } from "@chakra-ui/react";
import falloutboy from "../../../assets/falloutboy.png";
import CommonNotice from "./CommonNotice";
import { useEffect, useState } from "react";
import { BusinessMyPageFunding } from "../../../type/mypage.interface";

interface Props {
  projectData: BusinessMyPageFunding;
}

export default function BusinessProjectDetail({ projectData }: Props) {
  const [badgeText, setBadgeText] = useState<string>("");

  useEffect(() => {
    switch (projectData.progressStatus) {
      case "RECRUITMENT_STATUS":
        setBadgeText("진행중");
        break;
      case "PENDING_SETTLEMENT":
        setBadgeText("모집성공");

        break;
      case "RECRUITMENT_FAILED":
        setBadgeText("모집실패");
        break;
      case "SETTLED":
        setBadgeText("정산완료");
        break;
    }
  }, []);

  return (
    <>
      <Center mx={"1"} mt={"2rem"} w={"100%"}>
        <Image w={"30"} h={"36"} src={falloutboy} />
        <Flex direction={"column"} justifyContent={"space-around"}>
          <CommonNotice text={badgeText} isNow={projectData.progressStatus} />

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
      {projectData.progressStatus === "PENDING_SETTLEMENT" ? (
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
