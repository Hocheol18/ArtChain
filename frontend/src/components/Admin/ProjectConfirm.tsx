import { Box, Flex, Text } from "@chakra-ui/react";

export default function ProjectConfirm() {
  return (
    <>
      <Box p={"1.5rem"} mb={"3rem"}>
        <Box>
          <Text as={"b"} fontSize={"1.5rem"}>
            프로젝트 등록
          </Text>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 이름
          </Text>
          <Text fontSize={"1rem"}>프로젝트명들어갈곳</Text>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            포스터
          </Text>

          <Box mt={"0.5rem"}>사진들어갈 곳</Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"} w={"100%"}>
          <Text as={"b"} fontSize={"1rem"}>
            카테고리
          </Text>
          <Box mt={"0.5rem"}>카테고리들어갈곳</Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            목표 금액
          </Text>
          <Box mt={"0.5rem"}>금액 들어갈곳</Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            일정
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>일정 들어갈 곳</Text>
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            프로젝트 설명 이미지
          </Text>

          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>이미지 들어갈 곳</Text>
          </Box>
        </Box>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            매출 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>매출 구성 들어갈 곳</Text>
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            비용 구성
          </Text>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>비용 구성 들어갈곳</Text>
          </Box>
        </Flex>

        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            총 예산 규모
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>예산 들어갈 곳</Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            객단가
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>객단가 들어갈 곳</Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            추정 손익분기점
          </Text>
          <Box ml={"0.2rem"} mt={"0.5rem"}>
            <Text fontSize={"1rem"}>손익분기점 들어갈곳</Text>
          </Box>
        </Box>
        <Box ml={"0.2rem"} mt={"1rem"}>
          <Text as={"b"} fontSize={"1rem"}>
            예상 수익률
          </Text>
          <Flex justifyContent={"space-between"}>
            <Box ml={"0.2rem"} mt={"0.5rem"}>
              <Text fontSize={"1rem"}>수익률 들어갈 곳</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
