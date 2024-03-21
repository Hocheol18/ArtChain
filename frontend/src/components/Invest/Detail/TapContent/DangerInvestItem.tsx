import { useEffect, useState } from "react";
import Icon1 from "../../../../assets/invest-danger-icon-1.svg";
import Icon2 from "../../../../assets/invest-danger-icon-2.svg";
import Icon3 from "../../../../assets/invest-danger-icon-3.svg";
import Icon4 from "../../../../assets/invest-danger-icon-4.svg";
import Icon5 from "../../../../assets/invest-danger-icon-5.svg";

import { Image, Box } from "@chakra-ui/react";

interface Props {
  img: string;
  title: string;
  text: string;
}

export const DangerInvestItem = ({ img, title, text }: Props) => {
  const [imgStr, setImgStr] = useState();

  useEffect(() => {
    switch (img) {
      case "Icon1":
        setImgStr(Icon1);
        break;
      case "Icon2":
        setImgStr(Icon2);
        break;
      case "Icon3":
        setImgStr(Icon3);
        break;
      case "Icon4":
        setImgStr(Icon4);
        break;
      case "Icon5":
        setImgStr(Icon5);
        break;
    }
  }, []);

  return (
    <Box
      border={"1px solid"}
      borderRadius={25}
      display={"flex"}
      alignItems={"center"}
      px={2}
      py={2}
    >
      <Box pl={2} pr={4}>
        <Image
          src={imgStr}
          w={"35px"}
          border={"1px solid"}
          p={1}
          borderRadius={30}
        />
      </Box>
      <Box display={"flex"} flexDir={"column"} flex={1}>
        <Box fontWeight={"bold"}>{title}</Box>

        <Box fontSize={"15"}>{text}</Box>
      </Box>
    </Box>
  );
};
