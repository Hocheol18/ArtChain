import { Box, Flex } from "@chakra-ui/react";
import { CommonnTopNav } from "./CommonTopNav";
import useUserInfo from "../../store/useUserInfo";
import { useEffect } from "react";

interface Props {
  text1: string;
  text2: string;
  handleCheck: (whatCheck: string) => void;
  check: string;
}

export const CommonTopBox = ({ text1, text2, handleCheck, check }: Props) => {
  const { userInfo } = useUserInfo();

  return (
    <>
      <Flex px={6} pt={5} pb={1} justifyContent={"space-between"}>
        <Box fontWeight={"bold"} fontSize={"22"}>
          보유아트
        </Box>
        <Flex>
          <Box fontWeight={"bold"} fontSize={"22"}>
            {userInfo.walletBalance}
          </Box>
          <Box fontSize={"22"} ml={3}>
            아트
          </Box>
        </Flex>
      </Flex>
      <CommonnTopNav
        text1={text1}
        text2={text2}
        onCheck={handleCheck}
        check={check}
      />
    </>
  );
};
