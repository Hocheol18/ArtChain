import {
  Box,
  Center,
  Image,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import puzzle from "../assets/puzzle.svg";
import { getMarketMyToken, postMarketEnroll } from "../api/market";
import { useEffect, useState } from "react";
import {
  getMarketMyTokenInterface,
  postMarketEnrollInterface,
} from "../type/market.interface";
import { useNavigate } from "react-router-dom";
import { BottomButtonNavbar } from "../components/Common/Navigation/BottomButtonNavbar";
import Web3 from "web3";
import useUserInfo from "../store/useUserInfo";
import { convertToInteger } from "../components/Common/convertToInteger";
import TokenMarketPlaceABI from "../Contract/TokenMarketplace.json";
import IERC20ABI from "../Contract/IERC20.json";
import { useCustomToast } from "../components/Common/Toast";
import MetamaskValidation from "../components/Common/MetamaskValidation";
import { LoadingModal } from "../components/Common/LoadingModal";

export default function MarketEnroll() {
  const [total, setTotal] = useState<number>(0);
  const { userInfo } = useUserInfo();
  const toastFunction = useCustomToast();
  const navigate = useNavigate();
  const [values, setValues] = useState<postMarketEnrollInterface>({
    fundingId: undefined,
    contractAddress: "", // 성공 트잭 해쉬
    pieceCount: 0,
    totalCoin: 0,
    coinPerPiece: 0,
    transactionHash: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tokens, setTokens] = useState<getMarketMyTokenInterface[]>([]);
  const [isFilled, setisFilled] = useState(false);
  const [tokensIndex, setTokenIndex] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [url, setUrl] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "pieceCount") {
      const numValue = Math.min(Math.trunc(Number(value)), total);

      setValues((prev) => ({
        ...prev,
        [name]: numValue,
      }));
    } else if (name === "coinPerPiece") {
      setValues((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    getMarketMyToken()
      .then((res) => setTokens(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (
      values.pieceCount >= 1 &&
      values.coinPerPiece >= 1 &&
      values.fundingId
    ) {
      setisFilled(true);
    }
  }, [values.coinPerPiece, values.pieceCount]);

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      ["totalCoin"]: values.coinPerPiece * values.pieceCount,
    }));
  }, [values.coinPerPiece, values.pieceCount]);

  const optionComponent = (id: number, value: string, contents: string) => {
    return (
      <option value={value} key={id}>
        {contents}
      </option>
    );
  };

  const Validation = async () => {
    const res = await MetamaskValidation(userInfo.metamask);
    if (res === "메마오류") {
      toastFunction("처음 등록한 계정으로 연결해주세요", false);
    } else {
      onOpen();
      addTradePost({
        metamaskwallet: userInfo.metamask,
        tokenAmount: values.pieceCount.toString(),
      });
    }
  };

  const successList = (res: any, integerTokenAmount: number) => {
    const tmp: postMarketEnrollInterface = values;
    tmp.transactionHash = res.transactionHash;
    setValue(integerTokenAmount);
    setUrl(`https://sepolia.etherscan.io/tx/${res.transactionHash}`);
    setIsSuccess(true);

    postMarketEnroll(tmp)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const selectSetValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      contractAddress: tokens[tokensIndex].contractAddress,
      coinPerPiece: 0,
      pieceCount: 0,
      [name]: Number(value),
      totalCoin: 0,
      transactionHash: "",
    }));
    setisFilled(false);

    // 인덱스 찾는 함수
    const index = tokens.findIndex((res) => res.fundingId === Number(value));
    setTokenIndex(index);

    // 펀딩아이디 매칭
    tokens.forEach((res) => {
      if (res.fundingId === Number(value)) {
        setTotal(res.pieceCount);
      }
    });
  };

  const addTradePost = async (newTradePostData: {
    metamaskwallet: string;
    tokenAmount: string;
  }) => {
    const web3 = new Web3((window as any).ethereum);
    try {
      const marketplaceContract = new web3.eth.Contract(
        TokenMarketPlaceABI.abi,
        "0x749d167DC58e496CA017cAafD1FBc12C2c394527" // 마켓 컨트랙트 주소
      );
      const { metamaskwallet, tokenAmount } = newTradePostData;

      // 사용자가 입력한 값을 그대로 사용
      const integerTokenAmount = tokenAmount;

      // 토큰 컨트랙트 생성
      const tokenContract = new web3.eth.Contract(
        IERC20ABI.abi,
        tokens[tokensIndex].contractAddress
      );

      // 거래 게시글 추가 전에 사용자가 특정 양의 토큰을 스마트 계약에 대해 승인하도록 요청
      const approveTx = await tokenContract.methods
        .approve(
          "0x749d167DC58e496CA017cAafD1FBc12C2c394527", // 마켓 컨트랙트 주소
          convertToInteger(integerTokenAmount)
        )
        .send({ from: metamaskwallet });
      const approveTxReceipt = await web3.eth.getTransactionReceipt(
        approveTx.transactionHash
      );
      if (!approveTxReceipt.status) {
        toastFunction("토큰 승인에 실패하였습니다 다시 시도해주세요", false);
        return;
      } else {
        toastFunction("토큰 승인에 성공했습니다", true);
      }
      // 거래 게시글 추가
      await marketplaceContract.methods
        .addTradePost(tokens[tokensIndex].contractAddress, integerTokenAmount)
        .send({ from: metamaskwallet })
        .then((res) => successList(res, Number(integerTokenAmount)));
    } catch (error) {
      toastFunction("실패했습니다 다시 시도해주세요", false);
    }
  };

  const handleGo = () => {
    navigate(-1);
    onClose();
  };

  return (
    <>
      <LoadingModal
        headerText="등록 완료"
        successNum={value}
        successText="조각"
        isSuccess={isSuccess}
        isOpen={isOpen}
        onClose={onClose}
        url={url}
        handleGoWhere={() => {
          handleGo();
        }}
      />
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
          <Select
            placeholder="조각 판매할 작품을 선택해주세요"
            mt={"0.5rem"}
            name="fundingId"
            onChange={selectSetValue}
          >
            {tokens.length >= 1
              ? tokens.map((data) =>
                  optionComponent(data.id, data.fundingId.toString(), data.name)
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
            value={values.pieceCount || ""}
            onChange={handleSetValue}
            max={total}
          />
        </Box>

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
            value={values.coinPerPiece || ""}
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
            Validation();
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
