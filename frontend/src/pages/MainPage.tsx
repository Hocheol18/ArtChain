import MainCarousel from "../components/Main/MainCarousel";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Poster from "../components/Main/Poster";
import Marketplace from "../components/Main/Marketplace";
import justin from "../assets/poster.png";
import uni from "../assets/universe.png";
import { useNavigate } from "react-router-dom";
import {
  getMyPieceDropDown,
  getMyPieceList,
  getMyInvestmentHistory,
  getMyPieceCount,
} from "../api/mypage";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <MainCarousel />
      <Box mt={"1rem"}>
        <Text as={"b"} ml={"1.5rem"} fontSize={"2rem"}>
          진행 중인 투자 작품
        </Text>
      </Box>
      <Poster
        src="https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8+%ED%8C%9D%EC%95%84%ED%8A%B8+%EA%B1%B0%EC%9E%A5%EC%A0%84/8bafba98-76b0-4cfa-89c6-0a1a96311f89_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8_%ED%8C%9D%EC%95%84%ED%8A%B8_%EA%B1%B0%EC%9E%A5%EC%A0%84.gif"
        text="아메리칸 팝아트 거장전"
      />
      <Poster
        src="https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/hello_kitty/hellokitty.gif"
        text="Hello Kitty"
      />
      <Box
        px={"1rem"}
        py={"0.7rem"}
        rounded={"0.7rem"}
        mt={"1.5rem"}
        fontSize={"sm"}
        bgColor={"blue.100"}
        ml={"0.5rem"}
        mr={"0.5rem"}
      >
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../invest-list");
          }}
        >
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
        mb={"4rem"}
      >
        <Center
          color={"blue.400"}
          as="b"
          fontSize={"1.1rem"}
          onClick={() => {
            navigate("../market");
          }}
        >
          마켓 보러 가기
        </Center>
      </Box>
    </>
  );
}
