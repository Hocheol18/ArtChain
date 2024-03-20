import { Box, Center, Image, Input, Select, Text } from "@chakra-ui/react";
import puzzle from "../assets/puzzle.svg";

export default function MarketEnroll() {
  const total = "880";
  return (
    <>
      <Center h={"100px"}>
        <Image boxSize={"2.5rem"} src={puzzle}></Image>
        <Text as={"b"} color={"black.100"} fontSize={"1.5rem"} ml={"0.2rem"}>
          보유 조각 판매
        </Text>
      </Center>
      <Box ml={"2rem"} mr={"2rem"}>
        <Box>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            작품 선택
          </Text>
          <Select placeholder="조각 판매할 작품을 선택해주세요" mt={"0.5rem"}>
            <option value="option1">조각 1</option>
            <option value="option2">조각 2</option>
            <option value="option3">조각 3</option>
          </Select>
        </Box>
        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            보유 조각 수
          </Text>
          <Input bgColor={"gray.400"} disabled placeholder={total} size="md" />
        </Box>
        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            판매할 조각 수
          </Text>
          <Input
            type="number"
            placeholder="판매할 조각 수를 적어주세요"
            size="md"
            inputMode="numeric"
          />
        </Box>
        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            총 판매 가격
          </Text>
          
          <Input
            type="number"
            placeholder="판매할 조각의 총 가격을 적어주세요"
            size="md"
            inputMode="numeric"
          />
        </Box>
        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            한 조각당 가격
          </Text>
          <Input bgColor={"gray.400"} disabled placeholder={total} size="md" />
        </Box>
        <input type="number" inputMode="numeric" />
      </Box>
      
    </>
  );
}
