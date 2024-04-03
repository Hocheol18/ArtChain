import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeIcon from "../../../assets/home-icon.svg";
import InvestIcon from "../../../assets/invest-icon.svg";
import MarketIcon from "../../../assets/market-icon.svg";
import MyIcon from "../../../assets/my-icon.svg";
import useUserInfo from "../../../store/useUserInfo";
import { useCustomToast } from "../Toast";

interface BottomNavProps {
  text: string;
  active: boolean;
}

export const BottomNavItem = ({ text, active }: BottomNavProps) => {
  //active에 따라 바뀌는 css
  const [borderColor, setBorderColor] = useState<string>("white");
  const [ImgColor, setImgColor] = useState<string>("");

  //이미지아이콘
  const [imgIcon, setImgIcon] = useState<string>("");

  const [toLink, setToLink] = useState<string>("");

  const { userInfo } = useUserInfo();

  const toastFunction = useCustomToast();

  useEffect(() => {
    if (active) {
      setBorderColor("#014BA0");
      setImgColor(
        "invert(19%) sepia(100%) saturate(1891%) hue-rotate(201deg) brightness(90%) contrast(99%)"
      );
    } else {
      setBorderColor("white");
      setImgColor("");
    }
  }, [active]);

  useEffect(() => {
    switch (text) {
      case "홈":
        setImgIcon(HomeIcon);
        setToLink("/main");
        break;
      case "투자":
        setImgIcon(InvestIcon);
        setToLink("/invest-list");
        break;
      case "마켓":
        setImgIcon(MarketIcon);
        setToLink("/market/1");
        break;
      case "마이":
        setImgIcon(MyIcon);
        // console.log(userInfo.isLogin);
        // console.log(userInfo.userId);

        if (userInfo.isLogin) {
          if (userInfo.isBusiness) {
            setToLink("/businesspage");
          } else {
            setToLink("/mypage");
          }
        } else {
          setToLink("/login");
        }
        break;
    }
  }, [text, userInfo.isLogin, userInfo.isBusiness]);

  const handleToast = () => {
    if (text === "마이" && userInfo.isLogin === false) {
      toastFunction("로그인이 필요한 서비스입니다.", false);
    }
  };

  return (
    <Box
      as={Link}
      to={toLink}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      borderBottom={"4px solid"}
      borderBottomColor={borderColor}
      flex={1}
      mx={2}
      pt={2}
      justifyContent={"center"}
      onClick={handleToast}
    >
      <Image src={imgIcon} filter={ImgColor} />
      <Box fontSize={"12"}>{text}</Box>
    </Box>
  );
};
