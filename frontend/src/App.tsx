import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactNode } from "react";

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
      <Mobile>
        <div>ArtChain</div>
        <div>Mobile</div>
      </Mobile>
    </>
  );
}

export default App;
