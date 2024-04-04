import { Flex, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  onCheck: (whatCheck: string) => void;
  check: string;
}

export const MypieceTopNav = ({ onCheck, check }: Props) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { userId } = useParams();
  const handleClick = (whatCheck: string) => {
    onCheck(whatCheck);
  };

  return (
    <>
      {check === "invest" ? (
        <Flex
          justifyContent={"space-between"}
          px={"20%"}
          py={5}
          backgroundColor={"white"}
        >
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"blue.400"}
            onClick={() => handleClick("invest")}
            borderBottom={"2px"}
            backgroundColor={"white"}
          >
            나의 투자
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}
            onClick={() => handleClick("transaction")}
          >
            나의 거래
          </Text>
        </Flex>
      ) : (
        <Flex
          justifyContent={"space-between"}
          backgroundColor={"white"}
          px={"20%"}
          py={5}
        >
          <Text
            as={"b"}
            fontSize={"lg"}
            color={"gray.400"}
            backgroundColor={"white"}
            onClick={() => handleClick("invest")}
          >
            나의 투자
          </Text>
          <Text
            as={"b"}
            fontSize={"lg"}
            onClick={() => handleClick("transaction")}
            color={"blue.400"}
            borderBottom={"2px"}
            backgroundColor={"white"}
          >
            나의 거래
          </Text>
        </Flex>
      )}
    </>
  );
};
