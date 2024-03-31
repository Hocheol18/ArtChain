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
import { getMarketMyToken, postMarketEnroll } from "../api/market";
import { useEffect, useState } from "react";
import {
  getMarketMyTokenInterface,
  postMarketEnrollInterface,
} from "../type/market.interface";
import { useNavigate, useParams } from "react-router-dom";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import { WarningTwoIcon } from "@chakra-ui/icons";
import Web3 from "web3";
import useUserInfo from "../store/useUserInfo";
import { convertToInteger } from "../components/Common/convertToInteger";
import TokenMarketPlaceABI from "../Contract/TokenMarketplace.json";
import IERC20ABI from "../Contract/IERC20.json";


export default function MarketEnroll() {
  const id = useParams() as { id: string };
  const total = 880;
  const {userInfo} = useUserInfo();
  const toast = useToast();
  const navigate = useNavigate();
  const [values, setValues] = useState<postMarketEnrollInterface>({
    fundingId: Number(id.id),
    contractAddress: "0x77A6C65AD9530482fBC59751545Fd9E7cabfCD75", // 마켓 컨트랙트 주소
    pieceCount: 0,
    totalCoin: 0,
    coinPerPiece: 0,
  });
  const [tokens, setTokens] = useState<getMarketMyTokenInterface[]>([]);

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
    console.log(tokens);
  }, [tokens]);

  useEffect(() => {
    getMarketMyToken()
      .then((res) => setTokens(res.data.data))
      .catch((err) => console.log(err));
  }, []);

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

  const optionComponent = (id: number, value: string, contents: string) => {
    return (
      <option value={value} key={id}>
        {contents}
      </option>
    );
  };

  const addTradePost = async (newTradePostData: {
    metamaskwallet : string;
    tokenAddress: string;
    tokenAmount: string;
    price: string;
  }) => {
    const web3 = new Web3((window as any).ethereum);
    try {
      const marketplaceContract = new web3.eth.Contract(
        TokenMarketPlaceABI.abi,
        "0x77A6C65AD9530482fBC59751545Fd9E7cabfCD75"
      );
      const { metamaskwallet, tokenAddress, tokenAmount, price } = newTradePostData;
  
      // 사용자가 입력한 값을 그대로 사용
      const integerPrice = price;
      const integerTokenAmount = tokenAmount;
  
      // 토큰 컨트랙트 생성
      const tokenContract = new web3.eth.Contract(IERC20ABI.abi, tokenAddress);
  
      // 거래 게시글 추가 전에 사용자가 특정 양의 토큰을 스마트 계약에 대해 승인하도록 요청
      const approveTx = await tokenContract.methods
        .approve(
          "0x77A6C65AD9530482fBC59751545Fd9E7cabfCD75",
          convertToInteger(integerTokenAmount)
        )
        .send({ from: metamaskwallet });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(
        approveTx.transactionHash
      );
      if (!approveTxReceipt.status) {
        
        return;
      } else {
        console.log(
          `토큰 승인에 성공하였습니다. ${approveTxReceipt.transactionHash}`
        );
      }
      // 거래 게시글 추가
      await marketplaceContract.methods
        .addTradePost(tokenAddress, integerTokenAmount, integerPrice)
        .send({ from: metamaskwallet });
    } catch (error) {
      console.error("거래 게시글을 추가하는 중 오류가 발생했습니다.", error);
    }
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
            {tokens.length >= 1
              ? tokens.map((data) =>
                  optionComponent(data.id, data.name, data.name)
                )
              : "보유 조각이 없습니다."}
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
          hanldeButton={() => {
            addTradePost({
              metamaskwallet : userInfo.metamask,
              tokenAddress: "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB",
              tokenAmount: "10",
              price: "10",
            })
            ;
          }}
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
