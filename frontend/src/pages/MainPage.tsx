import { useState } from "react";
import MainCarousel from "../components/Main/MainCarousel";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Poster from "../components/Main/Poster";
import Marketplace from "../components/Main/Marketplace";
import justin from "../assets/poster.png";
import uni from "../assets/universe.png";
import { useNavigate } from "react-router-dom";
import { PutFundingStatus } from "../api/invest";

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const params = {
        fundingId: 19,
        progressStatus: "RECRUITMENT_STATUS",
      };

      const responseData = await PutFundingStatus(params); // 수정된 formData를 전달
      console.log("Received Response:", responseData);
      navigate("/main"); // 응답을 받은 후 navigate를 실행합니다.
    } catch (error) {
      console.error("Error fetching business page data:", error);
    }
  };
  // const [file, setFile] = useState<File>();
  // const navigate = useNavigate();

  // const handleButtonClick = async () => {
  //   try {
  //     if (!file) {
  //       throw new Error("파일이 첨부되지 않았습니다.");
  //     }

  //     const params = {
  //       fundingId: 19,
  //       settlementPrice: 1000000,
  //       returnRate: 5,
  //       depositDate: "20240315",
  //     };

  //     const formData = new FormData();
  //     formData.append("file", file); // 파일 추가
  //     formData.append("dto", JSON.stringify(params)); // dto 키에 JSON 문자열로 변환된 params 추가

  //     const responseData = await PostSettlement(formData); // 수정된 formData를 전달
  //     console.log("Received Response:", responseData);
  //     navigate("/main"); // 응답을 받은 후 navigate를 실행합니다.
  //   } catch (error) {
  //     console.error("Error fetching business page data:", error);
  //   }
  // };

  // const onChangeImg = (e) => {
  //   e.preventDefault();

  //   if (e.target.files) {
  //     const uploadFile = e.target.files[0];
  //     setFile(uploadFile);
  //   }
  // };

  return (
    <>
      <MainCarousel />
      <Box mt={"1rem"}>
        <Text as={"b"} ml={"1.5rem"} fontSize={"2rem"}>
          진행 중인 투자 작품
        </Text>
        <button onClick={() => navigate("/admin")}>ADMIN</button>
        {/* <input type="file" name="file" id="" onChange={onChangeImg} /> */}
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
