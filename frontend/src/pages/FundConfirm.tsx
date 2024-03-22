import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import FileUploadButton from "../components/Mypage/Business/FileUploadButton";

export default function FundConfirm() {
  return (
    <>
      <Box p={"1.5rem"}>
        <Box>
          <Text as={"b"} fontSize={"1.5rem"}>
            대원미디어
          </Text>
        </Box>
        <Box mt={"0.5rem"}>
          <Text as={"b"} fontSize={"2.2rem"}>
            모네에서 앤디워홀까지 : 부산전
          </Text>
        </Box>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"}>
            정산 금액
          </Text>
          <Text fontSize={"1.5rem"}>100,000,000원</Text>
        </Flex>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"}>
            입금 날짜
          </Text>
          <Box w={"60%"}>
            <Input
              border={"1px"}
              borderColor={"gray.400"}
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
            />
          </Box>
        </Flex>
        <Flex justifyContent={"space-between"} mt={"3rem"}>
          <Text as={"b"} fontSize={"1.5rem"}>
            정산 자료
          </Text>
          <FileUploadButton />
        </Flex>
      </Box>
      <BottomButtonNavbar text="신청하기" hanldeButton={() => {}} />
    </>
  );
}
