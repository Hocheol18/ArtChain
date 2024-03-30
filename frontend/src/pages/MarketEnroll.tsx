import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import puzzle from "../assets/puzzle.svg";
import { postMarketEnroll } from "../api/market";
import { useEffect, useState } from "react";
import { postMarketEnrollInterface } from "../type/market.interface";
import { useNavigate, useParams } from "react-router-dom";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { addTradePost } from "../components/Market/addTradePost";


export default function MarketEnroll() {
  const id = useParams() as { id: string };
  const total = 880;
  const toast = useToast();
  const navigate = useNavigate();
  const [values, setValues] = useState<postMarketEnrollInterface>({
    fundingId: Number(id.id),
    contractAddress: "0xb889a3f84DD29f49C75e673cB1f0114cd3c27601",
    pieceCount: 0,
    totalCoin: 0,
    coinPerPiece: 0,
  });

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "pieceCount") {
      const numValue = Math.min(Number(value), total);

      setValues((prev) => ({
        ...prev,
        [name]: numValue,
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const [isFilled, setisFilled] = useState(false);

  useEffect(() => {
    if (values.pieceCount >= 1 && values.coinPerPiece >= 1) {
      setisFilled(true);
    }
  }, [values.coinPerPiece, values.pieceCount]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      ["totalCoin"]: values.coinPerPiece * values.pieceCount,
    }));
  }, [values.coinPerPiece, values.pieceCount]);

  const onSubmitButton = () => {
    addTradePost(values.contractAddress, values.pieceCount.toString(), values.coinPerPiece.toString())
    postMarketEnroll(values)
      .then(() => {
        toast({
          duration: 2000,
          isClosable: true,
          position: "top",
          render: () => (
            <Flex
              color="white"
              mt={"50px"}
              bg="blue.300"
              p={"1rem"}
              borderRadius={"0.7rem"}
              alignItems={"center"}
            >
              <WarningTwoIcon boxSize={5} color={"white"} ml={"0.5rem"} />
              <Center ml={"1rem"}>
                <Text as={"b"}>등록되었습니다</Text>
              </Center>
            </Flex>
          ),
        });
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Center h={"100px"}>
        <Image boxSize={"2.5rem"} src={puzzle}></Image>
        <Text as={"b"} color={"black.100"} fontSize={"1.5rem"} ml={"0.2rem"}>
          보유 조각 판매
        </Text>
      </Center>
      <Box ml={"2rem"} mr={"2rem"}>
        <Box>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            작품 선택
          </Text>
          <Select placeholder="조각 판매할 작품을 선택해주세요" mt={"0.5rem"}>
            <option value="option1">조각 1</option>
            <option value="option2">조각 2</option>
            <option value="option3">조각 3</option>
          </Select>
        </Box>
        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            보유 조각 수
          </Text>
          <Input
            bgColor={"gray.300"}
            disabled
            placeholder={total.toString()}
            size="md"
          />
        </Box>
        {values.pieceCount === 0 ? (
          <Box mt={"1.5rem"}>
            <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
              판매할 조각 수
            </Text>
            <Input
              type="number"
              placeholder="판매할 조각 수를 적어주세요"
              size="md"
              inputMode="numeric"
              name="pieceCount"
              onChange={handleSetValue}
            />
          </Box>
        ) : (
          <Box mt={"1.5rem"}>
            <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
              판매할 조각 수
            </Text>
            <Input
              type="number"
              placeholder="판매할 조각 수를 적어주세요"
              size="md"
              inputMode="numeric"
              name="pieceCount"
              value={values.pieceCount}
              onChange={handleSetValue}
              max={total}
            />
          </Box>
        )}

        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            한 조각당 가격 (아트)
          </Text>

          <Input
            type="number"
            placeholder="판매할 조각의 조각당 가격을 적어주세요"
            size="md"
            inputMode="numeric"
            name="coinPerPiece"
            onChange={handleSetValue}
          />
        </Box>
        <Box mt={"1.5rem"}>
          <Text as={"b"} color={"black.100"} fontSize={"1rem"}>
            총 판매 가격 (아트)
          </Text>
          <Input
            bgColor={"gray.300"}
            disabled
            placeholder={`${values.totalCoin.toString()} 아트`}
            size="md"
          />
        </Box>
        <input type="number" inputMode="numeric" />
      </Box>
      {isFilled ? (
        <BottomButtonNavbar
          text="판매"
          category="goingOn"
          hanldeButton={onSubmitButton}
        />
      ) : (
        <BottomButtonNavbar
          text="판매"
          category="complete"
          hanldeButton={() => {}}
        />
      )}
    </>
  );
}
