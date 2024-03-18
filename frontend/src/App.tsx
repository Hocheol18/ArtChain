import { useMediaQuery } from "react-responsive";
import { ReactNode } from "react";
import { TopNavBar } from "./components/Common/Navigation/TopNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { InvestList } from "./pages/InvestList";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from "./pages/LoginPage";
import { MyPage } from "./pages/MyPage";
import { CoinCharge } from "./pages/CoinCharge";

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
      <ChakraProvider>
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
              <div>ArtChain</div>
              <div>Desktop</div>
            </div>
          </div>
        </Desktop>
      </ChakraProvider>
      {/* 모바일 */}
      <ChakraProvider>
        <Mobile>
          <div style={{ backgroundColor: "white", height: "100dvh" }}>
            {/* NavBar
          <TopNavBar /> */}
            <BrowserRouter>
              <Routes>
                {/* 메인페이지 */}
                <Route path="/" element={<MainPage />} />

                {/* 로그인 페이지 */}
                <Route path="/login" element={<LoginPage />}></Route>

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />}></Route>

                {/* 코인 충전 */}
                <Route path="/coin-charge" element={<CoinCharge />}></Route>

                {/* 투자리스트 */}
                <Route path="/invest-list" element={<InvestList />} />

                {/* 투자  */}
              </Routes>
            </BrowserRouter>
          </div>
        </Mobile>
      </ChakraProvider>
    </>
  );
}

export default App;
