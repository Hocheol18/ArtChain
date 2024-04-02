import { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import BusinessApprove from "../components/Admin/BusinessApprove";
import ProjectApporve from "../components/Admin/ProjectApprove";
import SettlementApprove from "../components/Admin/SettlementApprove";

export const AdminPage = () => {
  const [isCheck, setIsCheck] = useState<string>("business");

  return (
    <>
      {isCheck === "business" ? (
        <>
          {" "}
          <Box>
            <Flex justifyContent={"space-between"} px={"10%"} py={5}>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"blue.400"}
                borderBottom={"2px"}
                backgroundColor={"white"}
              >
                {" "}
                기업 승인
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                backgroundColor={"white"}
                onClick={() => setIsCheck("project")}
              >
                프로젝트 승인
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                backgroundColor={"white"}
                onClick={() => setIsCheck("settlement")}
              >
                정산 승인
              </Text>
            </Flex>
          </Box>{" "}
          <BusinessApprove />{" "}
        </>
      ) : isCheck === "project" ? (
        <>
          {" "}
          <Box>
            <Flex justifyContent={"space-between"} px={"10%"} py={5}>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                backgroundColor={"white"}
                onClick={() => setIsCheck("business")}
              >
                {" "}
                기업 승인
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"blue.400"}
                borderBottom={"2px"}
                backgroundColor={"white"}
              >
                프로젝트 승인
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                backgroundColor={"white"}
                onClick={() => setIsCheck("settlement")}
              >
                정산 승인
              </Text>
            </Flex>
          </Box>
          <ProjectApporve />{" "}
        </>
      ) : (
        <>
          {" "}
          <Box>
            <Flex justifyContent={"space-between"} px={"10%"} py={5}>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                backgroundColor={"white"}
                onClick={() => setIsCheck("business")}
              >
                {" "}
                기업 승인
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"gray.400"}
                backgroundColor={"white"}
                onClick={() => setIsCheck("project")}
              >
                프로젝트 승인
              </Text>
              <Text
                as={"b"}
                fontSize={"lg"}
                color={"blue.400"}
                borderBottom={"2px"}
                backgroundColor={"white"}
              >
                정산 승인
              </Text>
            </Flex>
          </Box>
          <SettlementApprove />{" "}
        </>
      )}
    </>
  );
};
