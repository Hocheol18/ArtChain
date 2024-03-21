import { Box } from "@chakra-ui/react";
import { NoticeInvestItem } from "./NoticeInvestItem";

export const NoticeInvest = () => {
  return (
    <Box mb={"70px"}>
      <Box fontSize={"22"} fontWeight={"bold"} pl={6} mt={5} pb={5}>
        공지사항
      </Box>
      <Box>
        <NoticeInvestItem />
        <NoticeInvestItem />
        <NoticeInvestItem />
      </Box>
    </Box>
  );
};
