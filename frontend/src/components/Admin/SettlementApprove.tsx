import { Button, Center, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSettlementList } from "../../type/admin.interface";
import { GetSettlementList } from "../../api/Settlement";
import React from "react";
import { formatNumberWithComma } from "../Common/Comma";

export default function SettlementApprove() {
  const navigate = useNavigate();
  const [values, setValues] = useState<getSettlementList[]>([]);
  useEffect(() => {
    GetSettlementList()
      .then((res) => {if (res !== null) {setValues(res.settlementList) }})
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {values.length >= 1 ? (
        <Grid templateColumns="1.5fr 3fr 3fr 1fr" gap={3}>
          <GridItem
            w="100%"
            h="10"
            fontSize={"xs"}
            as={"b"}
            borderY={"1px solid"}
            borderColor={"gray.200"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            회사명
          </GridItem>
          <GridItem
            w="100%"
            h="10"
            fontSize={"xs"}
            as={"b"}
            borderY={"1px solid"}
            borderColor={"gray.200"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            프로젝트명
          </GridItem>
          <GridItem
            w="100%"
            h="10"
            fontSize={"xs"}
            as={"b"}
            borderY={"1px solid"}
            borderColor={"gray.200"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            정산 금액
          </GridItem>
          <GridItem
            w="100%"
            h="10"
            fontSize={"xs"}
            as={"b"}
            borderY={"1px solid"}
            borderColor={"gray.200"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></GridItem>

          {values.map((data) => (
            <React.Fragment key={data.id}>
              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={"xs"}
              >
                {data.entName}
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={"xs"}
              >
                {data.fundingTitle}
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={"xs"}
              >
                {formatNumberWithComma(data.settlementPrice)}원
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr={"0.8rem"}
              >
                <Button
                  bgColor={"blue.300"}
                  textColor={"white"}
                  width={"10px"}
                  h={"20px"}
                  fontSize={"xs"}
                  _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
                  _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
                  _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
                  onClick={() => {
                    navigate(`./settlement/${data.id}`);
                  }}
                >
                  보기
                </Button>
              </GridItem>
            </React.Fragment>
          ))}
        </Grid>
      ) : (
        <Center as="b" fontSize={"1.5rem"} h={"600px"}>
          데이터가 없습니다
        </Center>
      )}
    </>
  );
}
