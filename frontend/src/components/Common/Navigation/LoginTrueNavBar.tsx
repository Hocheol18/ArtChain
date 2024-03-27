import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import AddCoinIcon from "../../../assets/add-coin-icon.svg";
import ProfileIcon from "../../../assets/profile-icon.svg";
import { Link } from "react-router-dom";

interface Prop {
  userCoin: number;
}

export const LoginTrueNavBar = ({ userCoin }: Prop) => {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      width={150}
      justifyContent={"space-between"}
    >
      <Box position={"relative"}>
        <Link to="/charge">
          <Image
            boxSize={9}
            src={AddCoinIcon}
            position="absolute"
            top="-9px"
            left="-5px"
          />
        </Link>
        <Text
          textAlign={"center"}
          ml={4}
          pl={3}
          fontSize={12}
          width={24}
          border="1px solid"
          borderRadius={"lg"}
          borderColor="#DBDDE0"
        >
          {userCoin}
        </Text>
      </Box>

      <Link to="/mypage">
        <Image boxSize={8} src={ProfileIcon} />
        {/* <Avatar boxSize="8" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
      </Link>
    </Box>
  );
};
