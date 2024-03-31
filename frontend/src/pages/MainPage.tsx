import MainCarousel from "../components/Main/MainCarousel";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Poster from "../components/Main/Poster";
import Marketplace from "../components/Main/Marketplace";
import justin from "../assets/poster.png";
import uni from "../assets/universe.png";
import { useNavigate } from "react-router-dom";
import { DeleteFundingNotice } from "../api/invest";

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      // PostFundingNotice 함수 호출 시 필요한 파라미터를 구성합니다.
      const params = {
        fundingId: "1", // 예시 ID, 실제 값으로 대체해야 합니다.
        fundingNoticeId: "4",
        // notice: {
        //   // 예시 notice 객체, 실제 값으로 구성해야 합니다.
        //   title: "다시 수정된 공지사항",
        //   content: "펀딩에 대한 다시 수정된 공지사항입니다.",
        // },
      };

      // 구성한 파라미터를 전달하여 함수를 호출합니다.
      const responseData = await DeleteFundingNotice(params);
      console.log("Received Response:", responseData);
      navigate("/main"); // 응답을 받은 후 navigate를 실행합니다.
    } catch (error) {
      console.error("Error fetching business page data:", error);
    }
  };

  return (
    <>
      <MainCarousel />
      <Box mt={"1rem"}>
        <Text as={"b"} ml={"1.5rem"} fontSize={"2rem"}>
          진행 중인 투자 작품
        </Text>
        <button onClick={() => navigate("/admin")}>ADMIN</button>
        <button onClick={handleButtonClick}>Axios Test</button>
      </Box>
      <Poster />
      <Poster />
      <Box
        px={"1rem"}
        py={"0.7rem"}
        rounded={"0.7rem"}
        mt={"1.5rem"}
        fontSize={"sm"}
        bgColor={"blue.100"}
        ml={"0.5rem"}
        mr={"0.5rem"}>
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../invest-list");
          }}>
          더 많은 작품 투자하러 가기
        </Center>
      </Box>
      <Box mt={"1rem"}>
        <Text as={"b"} ml={"1.5rem"} fontSize={"2rem"}>
          마켓
        </Text>
      </Box>

      <Center p={"1rem"}>
        <Flex wrap={"wrap"} justifyContent={"flex-start"} w={"390px"}>
          <Marketplace img={justin} text="2024 딜라이트 서울" />
          <Marketplace img={uni} text="모네에서 앤디워홀까지:부산전" />
          <Marketplace img={justin} text="ㅗㅑ" />
          <Marketplace img={uni} text="ㅗㅑ" />
        </Flex>
      </Center>

      <Box
        px={"1rem"}
        py={"0.7rem"}
        rounded={"0.7rem"}
        fontSize={"sm"}
        bgColor={"blue.100"}
        ml={"0.5rem"}
        mr={"0.5rem"}
        mb={"4rem"}>
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../market");
          }}>
          마켓 보러 가기
        </Center>
      </Box>
    </>
  );
}
