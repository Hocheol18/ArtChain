import { Box, Center } from "@chakra-ui/react";
import { NoticeInvestItem } from "./NoticeInvestItem";
import { Notice } from "../../../../type/invest.interface";

interface Props {
  entId: number;
  noticeList: Notice[];
}

export const NoticeInvest = ({ entId, noticeList }: Props) => {
  return (
    <Box mb={"70px"}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={5}>
        공지사항
      </Box>
      <Box>
        {noticeList.length !== 0 ? (
          noticeList.map((notice) => (
            <>
              <NoticeInvestItem notice={notice} entId={entId} />
            </>
          ))
        ) : (
          <Center py={14}>공지사항이 없습니다</Center>
        )}
      </Box>
    </Box>
  );
};
