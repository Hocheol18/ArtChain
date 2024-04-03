import { Box, Button, Text, Image, Flex, Center } from "@chakra-ui/react";

import { useNavigate, Link } from "react-router-dom";
import DoughnutChart from "../components/Mypage/DoughnutChart";
import { MyPiece } from "./MyPiece";
import { getMyPieceCount } from "../api/mypage";
import { GetMyPieceCountList } from "../type/mypage.interface";
import { useEffect, useState } from "react";

export default function UserMyPage() {
  const [investTop3Data, setInvestTop3Data] = useState<GetMyPieceCountList[]>(
    []
  );

  const getInvestTop3 = async () => {
    const res = await getMyPieceCount();
    //해당 값을 넣어두고....
    setInvestTop3Data(res.pieceOwnerList);
  };

  useEffect(() => {
    getInvestTop3();
  }, []);

  const colorArr = ["blue.400", "blue.300", "blue.200", "gray.300"];

  return (
    <>
      <Flex direction={"column"} backgroundColor={"gray.100"} pb={6}>
        <Box fontSize={20} fontWeight={"bold"} mx={5} mt={5} mb={3}>
          정산 대기 중인 작품
        </Box>
        <Flex alignItems={"center"}>
          <Flex justifyContent={"center"} boxSize={"35%"} mx={6}>
            {investTop3Data?.length === 1 ? (
              <Box>정산 대기 중인 작품이 없습니다.</Box>
            ) : (
              <DoughnutChart data={investTop3Data} />
            )}
          </Flex>
          {investTop3Data.length === 1 ? (
            <Flex justifyContent={"flex-end"} mx={"auto"}>
              <Box
                as={Link}
                to="/invest-list"
                borderRadius={"lg"}
                p={2}
                backgroundColor={"blue.300"}
                textColor={"white"}
              >
                투자하러 가기
              </Box>
            </Flex>
          ) : (
            <Flex direction={"column"} mr={6} ml={2}>
              {investTop3Data?.map((item, index) => (
                <>
                  <Flex alignItems={"center"} py={1}>
                    <Box
                      w={"20px"}
                      h={"20px"}
                      borderRadius={"5px"}
                      bgColor={colorArr[index]}
                    />
                    <Text ml={"0.5rem"} fontSize={15}>
                      {item.fundingTitle}
                    </Text>
                  </Flex>
                </>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>

      {/* 나의 투자/ 나의 거래 탭 + 밑에 해당 컴포넌트 */}
      <MyPiece type="invest" />
    </>
  );
}
