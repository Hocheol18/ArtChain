import { useState } from "react";
import MainCarousel from "../components/Main/MainCarousel";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Poster from "../components/Main/Poster";
import Marketplace from "../components/Main/Marketplace";
import justin from "../assets/poster.png";
import uni from "../assets/universe.png";
import { useNavigate } from "react-router-dom";
// import { PostFunding } from "../api/invest";
// import { PostSettlement } from "../api/settlement";
import { PutSignUpPermissionAxios } from "../api/user";

export default function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const params = {
        memberId: 48,
        permissionFlag: "HOLD",
      };

      const responseData = await PutSignUpPermissionAxios(params); // 수정된 formData를 전달
      console.log("Received Response:", responseData);
      navigate("/main"); // 응답을 받은 후 navigate를 실행합니다.
    } catch (error) {
      console.error("Error fetching business page data:", error);
    }
  };
  // const navigate = useNavigate();
  // const [poster, setPoster] = useState<File>();
  // const [description, setDescription] = useState<File>();

  // const handleButtonClick = async () => {
  //   try {
  //     const params = {
  //       name: "아메리칸 팝아트 거장전",
  //       category: "EXHIBITION",
  //       recruitStart: "2024-01-01",
  //       recruitEnd: "2024-04-01",
  //       settlement: "2024-05-01",
  //       goalCoinCount: 2000,
  //       totalBudget: 20000000,
  //       unitPrice: 10000,
  //       bep: 20000000,
  //       scheduleList: [
  //         { scheduleName: "1차 어쩌구", scheduleDate: "2024-03-01" },
  //       ],
  //       expectedReturnList: [
  //         { spectatorNum: 10000, expectedReturn: 3 },
  //         { spectatorNum: 20000, expectedReturn: 5 },
  //         { spectatorNum: 30000, expectedReturn: 7 },
  //       ],
  //       saleList: [
  //         { mainVariety: "티켓 비용", subVariety: "전시회", percentage: 80 },
  //       ],
  //       costList: [{ mainVariety: "대관료", subVariety: "인사동" }],
  //     };

  //     const formData = new FormData();
  //     if (poster) {
  //       formData.append("poster", poster);
  //     }
  //     if (description) {
  //       formData.append("descriptionImg", description);
  //     }
  //     // 먼저 dto를 formData에 추가해야 합니다.
  //     const json = JSON.stringify(params);
  //     const blob = new Blob([json], { type: "application/json" });
  //     formData.append("dto", blob);

  //     // 수정된 formData를 PostSettlement 함수에 전달
  //     const responseData = await PostFunding(formData);

  //     console.log("Received Response:", responseData);
  //     navigate("/main"); // 응답을 받은 후 navigate를 실행합니다.
  //   } catch (error) {
  //     console.error("Error fetching business page data:", error);
  //   }
  // };

  // const onChangePoster = (e) => {
  //   e.preventDefault();

  //   if (e.target.files) {
  //     const uploadFile = e.target.files[0];
  //     setPoster(uploadFile);
  //   }
  // };
  // const onChangeDescription = (e) => {
  //   e.preventDefault();

  //   if (e.target.files) {
  //     const uploadFile = e.target.files[0];
  //     setDescription(uploadFile);
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
        {/* <input type="file" name="poster" id="" onChange={onChangePoster} />
        <input
          type="file"
          name="description"
          id=""
          onChange={onChangeDescription}
        /> */}
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
