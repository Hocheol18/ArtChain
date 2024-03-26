import React, { useEffect, useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import Logo from "../../../assets/logo.svg";
import BackIcon from "../../../assets/back-icon.svg";
import { LoginTrueNavBar } from "./LoginTrueNavBar";
import { Link, useNavigate } from "react-router-dom";

interface NavProp {
  navType: string;
}

export const TopNavBar = ({ navType }: NavProp) => {
  const rightPadding = 15;
  const [leftPadding, setLeftPadding] = useState<number>(15);
  const [justifyCon, setJustifyCon] = useState<string>("space-between");

  //   로그인 유무
  const [isLogin, setIsLogin] = useState<boolean>(false);

  //유저의 코인 보유 수량
  const userCoin = 9999999;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); //뒤로가기
  };

  useEffect(() => {
    if (navType === "coinBack") {
      setLeftPadding(30);
    } else if (navType === "back") {
      setLeftPadding(30);
      setJustifyCon("start");
    }
  }, []);
  return (
    <div>
      <Box
        height={50}
        pl={leftPadding}
        pr={rightPadding}
        py=""
        display="flex"
        alignItems={"center"}
        justifyContent={justifyCon}
        borderBottom={"1px"}
        borderBottomColor="#EFF0F3"
      >
        {/* 네비바 타입이 "logo"일 때 */}
        {navType === "logo" ? (
          <>
            <Link to="/">
              <Button variant="unstyled">
                <Image src={Logo} />
              </Button>
            </Link>

            {/* 로그인 유무에 따라 바뀜 */}
            {isLogin ? (
              <LoginTrueNavBar userCoin={userCoin} />
            ) : (
              <Link to="/login">
                <Button variant={"ghost"}>
                  <Box>로그인</Box>
                </Button>
              </Link>
            )}
          </>
        ) : null}

        {/* 네비바 타입이 "coinBack"일 때 (뒤로가기 + (코인+프로필) or 로그인 버튼)*/}
        {navType === "coinBack" ? (
          <>
            <Button variant="unstyled" onClick={handleBack}>
              <Image src={BackIcon} />
            </Button>
            {/* 로그인 유무에 따라 바뀜 */}
            {isLogin ? (
              <LoginTrueNavBar userCoin={userCoin} />
            ) : (
              <Link to="/login">
                <Button variant={"ghost"}>
                  <Box>로그인</Box>
                </Button>
              </Link>
            )}
          </>
        ) : null}
        {/* 네비바 타입이 "back"일 때 */}
        {navType === "back" ? (
          <>
            <Button variant="unstyled" onClick={handleBack}>
              <Image src={BackIcon} />
            </Button>
          </>
        ) : null}
      </Box>
    </div>
  );
};
