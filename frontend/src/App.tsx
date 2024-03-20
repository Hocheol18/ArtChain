import { useMediaQuery } from "react-responsive";
import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { InvestList } from "./pages/InvestList";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/LoginPage";
import { MyPage } from "./pages/MyPage";
import { CoinCharge } from "./pages/CoinCharge";
import { CommonPage } from "./pages/CommonPage";
import { Theme } from "./theme/theme";
import Market from "./pages/Market";

import MarketDetail from "./pages/MarketDetail";
import { InvestDetail } from "./pages/InvestDetail";
import MarketTradeConfirm from "./pages/MarketTradeConfrim";
import MarketTradeNow from "./pages/MarketTradeNow";
import MarketEnroll from "./pages/MarketEnroll";
import LoginBusiness from "./pages/LoginBusiness";

function App() {
  const Desktop = ({ children }: { children: ReactNode }) => {
    const isDesktop = useMediaQuery({ minWidth: 501 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }: { children: ReactNode }) => {
    const isMobile = useMediaQuery({ maxWidth: 500 });
    return isMobile ? children : null;
  };

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
              데스크탑
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
                    <CommonPage
                      topNavType="logo"
                      bottomNavType="home"
                      buttonText=""
                    >
                      <MainPage />
                    </CommonPage>
                  }
                />
                {/* 로그인 페이지 */}
                <Route
                  path="/login"
                  element={
                    <CommonPage
                      topNavType="back"
                      bottomNavType=""
                      buttonText=""
                    >
                      <LoginPage />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/loginbusiness"
                  element={
                    <CommonPage
                      topNavType="back"
                      bottomNavType=""
                      buttonText=""
                    >
                      <LoginBusiness />
                    </CommonPage>
                  }
                ></Route>

                {/* 마이페이지 */}
                <Route
                  path="/mypage"
                  element={
                    <CommonPage
                      topNavType="back"
                      bottomNavType="my"
                      buttonText=""
                    >
                      <MyPage />
                    </CommonPage>
                  }
                ></Route>
                {/* 코인 충전 */}
                <Route path="/coin-charge" element={<CoinCharge />}></Route>
                {/* 투자리스트 */}
                <Route
                  path="/invest-list"
                  element={
                    <CommonPage
                      topNavType="logo"
                      bottomNavType="invest"
                      buttonText=""
                    >
                      <InvestList />
                    </CommonPage>
                  }
                />
                {/* 투자  */}
                <Route
                  path="/invest/:id"
                  element={
                    <CommonPage topNavType="coinBack" bottomNavType="invest">
                      <InvestDetail />
                    </CommonPage>
                  }
                />

                {/* 마켓 */}
                <Route
                  path="/market"
                  element={
                    <CommonPage
                      topNavType="logo"
                      bottomNavType="market"
                      buttonText=""
                    >
                      <Market />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/:id"
                  element={
                    <CommonPage
                      topNavType="coinBack"
                      bottomNavType="market"
                      buttonText=""
                    >
                      <MarketDetail />
                    </CommonPage>
                  }
                ></Route>

                <Route
                  path="/market/tradenow/:id"
                  element={
                    <CommonPage
                      topNavType="back"
                      bottomNavType="button"
                      buttonText="구입하기"
                    >
                      <MarketTradeNow />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/tradeconfirm/:id"
                  element={
                    <CommonPage
                      topNavType="back"
                      bottomNavType="market"
                      buttonText=""
                    >
                      <MarketTradeConfirm />
                    </CommonPage>
                  }
                ></Route>
                <Route
                  path="/market/enroll"
                  element={
                    <CommonPage
                      topNavType="back"
                      bottomNavType="button"
                      buttonText="등록"
                    >
                      <MarketEnroll />
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
