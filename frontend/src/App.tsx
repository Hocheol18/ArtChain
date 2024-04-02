import { useMediaQuery } from "react-responsive";
import { ReactNode, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { InvestList } from "./pages/InvestList";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/LoginPage";

import { CommonPage } from "./pages/CommonPage";
import { Theme } from "./theme/theme";
import Market from "./pages/Market";

import MarketDetail from "./pages/MarketDetail";
import { InvestDetail } from "./pages/InvestDetail";
import MarketTradeConfirm from "./pages/MarketTradeConfrim";
import MarketTradeNow from "./pages/MarketTradeNow";
import MarketEnroll from "./pages/MarketEnroll";
import LoginBusiness from "./pages/LoginBusiness";

import UserEnrollWithOauth from "./pages/UserEnrollWithOauth";
import UserENrollWIthNormal from "./pages/UserEnrollWithNormal";
import BusinessEnroll from "./pages/BusinessEnroll";
import UserMyPage from "./pages/UserMyPage";
import { InvestNoticeDetail } from "./pages/InvestNoticeDetail";
import BusinessMyPage from "./pages/BusinessMyPage";
import FundConfirm from "./pages/FundConfirm";
import BusinessProjectEnroll from "./pages/BusinessProjectEnroll";

import { Invest } from "./pages/Invest";
import { Charge } from "./pages/Charge";
import { Exchange } from "./pages/Exchange";
import FirstMainPage from "./pages/FirstMainPage";
import { AdminPage } from "./pages/AdminPage";

import SettlementDetail from "./components/Admin/SettlementDetail";
import ProjectConfirm from "./components/Admin/ProjectConfirm";

interface SseFundingRecruitEndResultListItem {
  isRecruitSuccess: boolean;
  fundingContractAddress: string;
}

interface SseFundingRecruitEndResultList {
  fundingRecruitResultList: Array<SseFundingRecruitEndResultListItem>;
}

function App() {
  const Desktop = ({ children }: { children: ReactNode }) => {
    const isDesktop = useMediaQuery({ minWidth: 701 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }: { children: ReactNode }) => {
    const isMobile = useMediaQuery({ maxWidth: 700 });
    return isMobile ? children : null;
  };

  useEffect(() => {
    // Establish the connection to the server endpoint
    const eventSource = new EventSource(
      "https://j10a708.p.ssafy.io:443/api/sse/subscribe"
    );

    // Listen for messages
    eventSource.addEventListener('DUMMY', (event: MessageEvent) => {
      // JSON.parse를 사용하지 않고, 직접 event.data를 사용
      const data: string = event.data;
    
      console.log('Received event data:', data);
    });

    eventSource.addEventListener("fundingProgressStatusCron", (event) => {
      // JSON 문자열을 객체로 변환
      const data: SseFundingRecruitEndResultList = JSON.parse(event.data);

      console.log("Received event data:", data);
    });

    // Clean up the connection when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <>
      {/* 데스크탑 버전 */}
      <ChakraProvider theme={Theme}>
        <Desktop>
          <div style={{ backgroundColor: "#001a38", height: "100dvh" }}>
            <div
              style={{
                width: "390px",
                margin: "0 auto",
                backgroundColor: "white",
                height: "100dvh",
              }}
            >
              <BrowserRouter>
                <Routes>
                  {/* 메인페이지 */}
                  <Route
                    path="/"
                    element={
                      <CommonPage topNavType="logo" bottomNavType="">
                        <FirstMainPage />
                      </CommonPage>
                    }
                  ></Route>
                  {/* 메인 - 홈 */}
                  <Route
                    path="/main"
                    element={
                      <CommonPage topNavType="logo" bottomNavType="home">
                        <MainPage />
                      </CommonPage>
                    }
                  />
                  {/* 로그인 페이지 */}
                  <Route
                    path="/login"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <LoginPage />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/loginbusiness"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <LoginBusiness />
                      </CommonPage>
                    }
                  ></Route>
                  {/* 회원 가입 페이지 */}
                  <Route
                    path="/signupoauth"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <UserEnrollWithOauth />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/signupnormal"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <UserENrollWIthNormal />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/businessenroll"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <BusinessEnroll />
                      </CommonPage>
                    }
                  ></Route>

                  {/* 투자리스트 */}
                  <Route
                    path="/invest-list"
                    element={
                      <CommonPage topNavType="logo" bottomNavType="invest">
                        <InvestList />
                      </CommonPage>
                    }
                  />
                  {/* 투자  */}
                  <Route
                    path="/invest/:fundingId"
                    element={
                      <CommonPage topNavType="coinBack" bottomNavType="">
                        <InvestDetail />
                      </CommonPage>
                    }
                  />

                  {/* 작품 공지사항 상세보기 */}
                  <Route
                    path="/invest/:fundingId/notice/:noticeId"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <InvestNoticeDetail />
                      </CommonPage>
                    }
                  />

                  {/* 마켓 */}
                  <Route
                    path="/market"
                    element={
                      <CommonPage topNavType="logo" bottomNavType="market">
                        <Market />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/market/:id"
                    element={
                      <CommonPage topNavType="coinBack" bottomNavType="market">
                        <MarketDetail />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/market/tradenow/:id"
                    element={
                      <CommonPage topNavType="back" bottomNavType="market">
                        <MarketTradeNow />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/market/tradeconfirm/:id"
                    element={
                      <CommonPage topNavType="back" bottomNavType="market">
                        <MarketTradeConfirm />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/market/enroll"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <MarketEnroll />
                      </CommonPage>
                    }
                  ></Route>
                  {/* 마이페이지 */}
                  <Route
                    path="/mypage"
                    element={
                      <CommonPage topNavType="logo" bottomNavType="my">
                        <UserMyPage />
                      </CommonPage>
                    }
                  ></Route>

                  {/* 나의 조각-나의 투자 */}
                  {/* <Route
                  path="/mypiece/:userId"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="my">
                      <MyPiece type="invest" />
                    </CommonPage>
                  }
                ></Route> */}

                  {/* 나의 조각-나의 거래 리스트 */}
                  {/* <Route
                  path="/mypiece/:userId/transaction-list"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="my">
                      <MyPiece type="transaction-list" />
                    </CommonPage>
                  }
                ></Route> */}

                  {/* 나의 조각-나의 거래 리스트 항목 */}
                  {/* <Route
                  path="/mypiece/:userId/transaction/:transactionId"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="my">
                      <MyPiece type="transaction" />
                    </CommonPage>
                  }
                ></Route> */}

                  {/* 기업 마이페이지 */}
                  <Route
                    path="/businesspage"
                    element={
                      <CommonPage topNavType="back" bottomNavType="my">
                        <BusinessMyPage />
                      </CommonPage>
                    }
                  ></Route>
                  <Route
                    path="/businessconfirm/:id"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <FundConfirm />
                      </CommonPage>
                    }
                  ></Route>

                  <Route
                    path="/businessproject"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <BusinessProjectEnroll />
                      </CommonPage>
                    }
                  ></Route>

                  {/* 투자하기 페이지 */}
                  <Route
                    path="/invest-buy/:fundingId"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <Invest />
                      </CommonPage>
                    }
                  ></Route>

                  {/* 충전하기 페이지 */}
                  <Route
                    path="/charge"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <Charge />
                      </CommonPage>
                    }
                  ></Route>

                  {/* 환전하기 페이지 */}
                  <Route
                    path="/exchange"
                    element={
                      <CommonPage topNavType="back" bottomNavType="">
                        <Exchange />
                      </CommonPage>
                    }
                  ></Route>
                  {/* 관리자 페이지 */}
                  <Route path="/admin" element={<AdminPage />}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </Desktop>
      </ChakraProvider>
      {/* 모바일 */}
      <ChakraProvider theme={Theme}>
        <Mobile>
          <div style={{ backgroundColor: "white", height: "100dvh" }}>
            {/* NavBar
          <TopNavBar /> */}
            <BrowserRouter>
              <Routes>
                {/* 메인페이지 */}
                <Route
                  path="/"
                  element={
                    <CommonPage topNavType="logo" bottomNavType="">
                      <FirstMainPage />
                    </CommonPage>
                  }
                ></Route>
                {/* 메인 - 홈 */}
                <Route
                  path="/main"
                  element={
                    <CommonPage topNavType="logo" bottomNavType="home">
                      <MainPage />
                    </CommonPage>
                  }
                />
                {/* 로그인 페이지 */}
                <Route
                  path="/login"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <LoginPage />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/loginbusiness"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <LoginBusiness />
                    </CommonPage>
                  }
                ></Route>
                {/* 회원 가입 페이지 */}
                <Route
                  path="/signupoauth"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <UserEnrollWithOauth />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/signupnormal"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <UserENrollWIthNormal />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/businessenroll"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <BusinessEnroll />
                    </CommonPage>
                  }
                ></Route>

                {/* 투자리스트 */}
                <Route
                  path="/invest-list"
                  element={
                    <CommonPage topNavType="logo" bottomNavType="invest">
                      <InvestList />
                    </CommonPage>
                  }
                />
                {/* 투자  */}
                <Route
                  path="/invest/:fundingId"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="">
                      <InvestDetail />
                    </CommonPage>
                  }
                />

                {/* 작품 공지사항 상세보기 */}
                <Route
                  path="/invest/:fundingId/notice/:noticeId"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <InvestNoticeDetail />
                    </CommonPage>
                  }
                />

                {/* 마켓 */}
                <Route
                  path="/market"
                  element={
                    <CommonPage topNavType="logo" bottomNavType="market">
                      <Market />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/:id"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="market">
                      <MarketDetail />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/tradenow/:id"
                  element={
                    <CommonPage topNavType="back" bottomNavType="market">
                      <MarketTradeNow />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/tradeconfirm/:id"
                  element={
                    <CommonPage topNavType="back" bottomNavType="market">
                      <MarketTradeConfirm />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/enroll"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <MarketEnroll />
                    </CommonPage>
                  }
                ></Route>
                {/* 마이페이지 */}
                <Route
                  path="/mypage"
                  element={
                    <CommonPage topNavType="logo" bottomNavType="my">
                      <UserMyPage />
                    </CommonPage>
                  }
                ></Route>

                {/* 나의 조각-나의 투자 */}
                {/* <Route
                  path="/mypiece/:userId"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="my">
                      <MyPiece type="invest" />
                    </CommonPage>
                  }
                ></Route> */}

                {/* 나의 조각-나의 거래 리스트 */}
                {/* <Route
                  path="/mypiece/:userId/transaction-list"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="my">
                      <MyPiece type="transaction-list" />
                    </CommonPage>
                  }
                ></Route> */}

                {/* 나의 조각-나의 거래 리스트 항목 */}
                {/* <Route
                  path="/mypiece/:userId/transaction/:transactionId"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="my">
                      <MyPiece type="transaction" />
                    </CommonPage>
                  }
                ></Route> */}

                {/* 기업 마이페이지 */}
                <Route
                  path="/businesspage"
                  element={
                    <CommonPage topNavType="back" bottomNavType="my">
                      <BusinessMyPage />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/businessconfirm/:id"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <FundConfirm />
                    </CommonPage>
                  }
                ></Route>

                <Route
                  path="/businessproject"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <BusinessProjectEnroll />
                    </CommonPage>
                  }
                ></Route>

                {/* 투자하기 페이지 */}
                <Route
                  path="/invest-buy/:fundingId"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <Invest />
                    </CommonPage>
                  }
                ></Route>

                {/* 충전하기 페이지 */}
                <Route
                  path="/charge"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <Charge />
                    </CommonPage>
                  }
                ></Route>

                {/* 환전하기 페이지 */}
                <Route
                  path="/exchange"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <Exchange />
                    </CommonPage>
                  }
                ></Route>
                {/* 관리자 페이지 */}
                <Route
                  path="/admin"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <AdminPage />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/admin/settlement/:id"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <SettlementDetail />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/admin/project/:id"
                  element={
                    <CommonPage topNavType="back" bottomNavType="">
                      <ProjectConfirm />
                    </CommonPage>
                  }
                ></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </Mobile>
      </ChakraProvider>
    </>
  );
}

export default App;
