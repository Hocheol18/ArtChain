import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ProjectApporve() {
  const navigate = useNavigate();
  return (
    <>
      <Grid templateColumns="1.5fr 3fr 1fr" gap={3}>
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
        ></GridItem>

        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={"xs"}
        >
          대원미디어
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={"xs"}
        >
          모네에서 앤디워홀까지 : 부산전
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            width={"10px"}
            h={"20px"}
            bgColor={"blue.300"}
            textColor={"white"}
            fontSize={"xs"}
            _hover={{ bg: "blue.400" }} // 마우스 오버 시 색상
            _active={{ bg: "blue.500", borderColor: "blue.500" }} // 클릭 시 색상
            _focus={{ boxShadow: "none" }} // 클릭 후 포커스 상태 제거
            onClick={() => {
              navigate("./project/1");
            }}
          >
            보기
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}
