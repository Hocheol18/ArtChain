import { Box, Center } from "@chakra-ui/react";
import { NoticeInvestItem } from "./NoticeInvestItem";
import { GetFundingResponse, Notice } from "../../../../type/invest.interface";

interface Props {
  data: GetFundingResponse;
}

export const NoticeInvest = ({ data }: Props) => {
  return (
    <Box backgroundColor={"white"} py={8} boxShadow={"lg"}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={5}>
        공지사항
      </Box>
      <Box>
        {data.noticeList.length !== 0 ? (
          data.noticeList.map((notice) => (
            <>
              <NoticeInvestItem notice={notice} />
            </>
          ))
        ) : (
          <Center py={14}>공지사항이 없습니다</Center>
        )}
      </Box>
    </Box>
  );
};
