import { Center, Grid, GridItem, Select } from "@chakra-ui/react";
import {
  PutSignUpPermissionAxios,
  SignUpPermissionListAxios,
} from "../../api/user";
import { useEffect, useState } from "react";
import { getEnrollList } from "../../type/admin.interface";
import formatDate from "../Common/Datetime";
import React from "react";

export default function BusinessApprove() {
  const [values, setValues] = useState<getEnrollList[]>([]);
  const [cnt, setCnt] = useState<number>(0);

  useEffect(() => {
    SignUpPermissionListAxios()
      .then((res) => setValues(res))
      .catch((err) => console.log(err));
  }, [cnt]);

  const handleCompany = (
    e: React.ChangeEvent<HTMLSelectElement>,
    comId: number
  ) => {
    const value = e.target.value;
    PutSignUpPermissionAxios({ memberId: comId, permissionFlag: value }).then(
      () => {
        setCnt(cnt + 1);
      }
    );
  };

  return (
    <>
      {values.length >= 1 ? (
        <Grid templateColumns="1.5fr 3fr 0.5fr 0.5fr" gap={3}>
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
            사업자등록번호
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
            등록 날짜
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
            승인
          </GridItem>

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
                {data.name}
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={"xs"}
              >
                {data.businessRegistrationNumber}
              </GridItem>
              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={"xs"}
              >
                {formatDate(data.createdAt)}
              </GridItem>

              <GridItem
                w="100%"
                h="10"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                fontSize={"xs"}
              >
                <Select
                  placeholder="선택"
                  width={"20"}
                  h={"30px"}
                  borderColor={"blue.300"}
                  mr={"0.2rem"}
                  name="isApporve"
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    handleCompany(event, data.id);
                  }}
                >
                  <option value="Y">승인</option>
                  <option value="N">반려</option>
                </Select>
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
