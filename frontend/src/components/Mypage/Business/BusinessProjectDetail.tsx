import { Center, Flex, Image, Text } from "@chakra-ui/react";
import falloutboy from "../../../assets/falloutboy.png";
import CommonNotice from "./CommonNotice";
import { useEffect, useState } from "react";
import { BusinessMyPageFunding } from "../../../type/mypage.interface";
import { formatNumberWithComma } from "../../Common/Comma";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  projectData: BusinessMyPageFunding;
}

export default function BusinessProjectDetail({ projectData }: Props) {
  const [badgeText, setBadgeText] = useState<string>("");
  const [badgeColor, setBadgeColor] = useState<string>("");

  useEffect(() => {
    console.log(projectData.progressStatus);

    switch (projectData.progressStatus) {
      case "RECRUITMENT_STATUS":
        setBadgeText("진행중");
        setBadgeColor("blue.300");
        break;
      case "PENDING_SETTLEMENT":
        setBadgeText("모집성공");
        setBadgeColor("gray.500");
        break;
      case "RECRUITMENT_FAILED":
        setBadgeText("모집실패");
        setBadgeColor("red");
        break;
      case "SETTLED":
        setBadgeText("정산완료");
        setBadgeColor("blue.200");
        break;
      case "BEFORE_RECRUITMENT":
        setBadgeText("모집이전");
        setBadgeColor("gray.400");
        break;
    }
  }, []);

  const navigate = useNavigate();

  const handleUrl = () => {
    if (projectData.progressStatus !== "BEFORE_RECRUITMENT")
      navigate(`/invest/${projectData.id}`);
  };

  const url = `/businessconfirm/${projectData.id}`;

  return (
    <>
      <Center mx={"1"} mt={"2rem"} w={"100%"} gap={3} onClick={handleUrl}>
        <Image w={"24"} h={"36"} src={projectData.poster} objectFit={"cover"} />
        <Flex direction={"column"} justifyContent={"space-around"}>
          <CommonNotice text={badgeText} color={badgeColor} />

          <Text ml={"0.5rem"} as={"b"} fontSize={"1rem"}>
            {projectData.name}
          </Text>
          <Flex>
            <Text color={"blue.300"} ml={"0.5rem"} as={"b"} fontSize={"1rem"}>
              {formatNumberWithComma(projectData.nowCoinCount)}
            </Text>
            <Text color={"blue.300"} ml={"0.3rem"} as={"b"} fontSize={"1rem"}>
              원 모집
            </Text>
            <Text ml={"0.5rem"} color={"blue.400"} as={"b"} fontSize={"1rem"}>
              {projectData.share}%
            </Text>
          </Flex>
          <Flex>
            <Text ml={"0.5rem"} fontSize={"0.9rem"}>
              모집금액
            </Text>
            <Text ml={"0.5rem"} fontSize={"0.9rem"}>
              {formatNumberWithComma(projectData.goalCoinCount)}
            </Text>
            <Text ml={"0.3rem"} fontSize={"0.9rem"}>
              원
            </Text>
          </Flex>
          <Flex>
            <Text ml={"0.5rem"} fontSize={"0.9rem"}>
              모집완료일
            </Text>
            <Text ml={"0.5rem"} fontSize={"1rem"}>
              {projectData.recruitEnd}
            </Text>
          </Flex>
        </Flex>
      </Center>
      {projectData.progressStatus === "PENDING_SETTLEMENT" ? (
        <Flex
          justifyContent={"center"}
          mt={2}
          mx={"auto"}
          w={270}
          as={Link}
          to={url}
        >
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
