import { Flex, Text, Image, Box } from "@chakra-ui/react";
import settings from "../assets/setting.svg";
import BusinessProjectDetail from "../components/Mypage/Business/BusinessProjectDetail";

export default function BusinessMyPage() {
  return (
    <>
      <Box mt={"1rem"} w={"85%"} ml={"1.5rem"} mr={"1.5rem"}>
        <Flex>
          <Text as={"b"} fontSize={"1.7rem"}>
            스튜디오드래곤님
          </Text>
          <Image boxSize={"1rem"} src={settings} ml={"0.5rem"} mt={"0.8rem"} />
        </Flex>
        <Flex mt={"0.5rem"} justifyContent={"space-between"}>
          <Text fontSize={"1.3rem"}>프로젝트 투자 현황</Text>
          <Box
            mt={"0.3rem"}
            mr={"0.3rem"}
            px={"0.6rem"}
            py={"0.3rem"}
            rounded={"0.7rem"}
            boxShadow={"xl"}
            fontSize={"xs"}
            ml={"0.5rem"}
            bgColor={"blue.300"}
          >
            <Flex
            // onClick={() => {
            //   navigate("./enroll");
            // }}
            >
              <Text color={"white.100"} ml={"0.2rem"}>
                프로젝트 등록
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box mb={"2rem"}>
          <BusinessProjectDetail isNow="now" />
          <BusinessProjectDetail isNow="wait" />
          <BusinessProjectDetail isNow="" />
        </Box>
      </Box>
    </>
  );
}
