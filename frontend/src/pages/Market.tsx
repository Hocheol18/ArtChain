import TopNav from "../components/Market/Main/TopNav";
import Content from "../components/Market/Main/Content";
import TopSecondNav from "../components/Market/Main/TopSecondNav";
import { useState } from "react";
import MarketSell from "../components/Market/Main/MarketSell";
import useUserInfo from "../store/useUserInfo";
import { Box } from "@chakra-ui/react";

export default function Martet() {
  const [statusTopNav, setTopNav] = useState<string>("ALL");
  const [statusTopSecondNav, setSecondTopNav] = useState<string>("최신순");
  const { userInfo } = useUserInfo();

  return (
    <>
      <TopNav statusTopNav={statusTopNav} setTopNav={setTopNav} />
      <TopSecondNav
        first="전체"
        second="정산이전"
        third="정산완료"
        forth=""
        isCheck={true}
        statusTopSecondNav={statusTopSecondNav}
        setSecondTopNav={setSecondTopNav}
      />
      <Box mt={"0.8rem"}>{userInfo.isLogin ? <MarketSell /> : null}</Box>

      <Content first={statusTopNav} second={statusTopSecondNav} />
    </>
  );
}
