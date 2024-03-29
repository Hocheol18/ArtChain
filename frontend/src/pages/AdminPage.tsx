import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const AdminPage = () => {
  return (
    <div>
      <Box>
        <Flex justifyContent={"space-between"} px={"20%"} py={5}>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}>
            {" "}
            기업 승입
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            프로젝트 승인
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}>
            정산 승인
          </Text>
        </Flex>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};
