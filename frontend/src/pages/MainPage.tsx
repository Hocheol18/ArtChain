import React from "react";
import { useMediaQuery } from "react-responsive";

export const MainPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 501 });

  return <div>디스이스메인페이지</div>;
};
