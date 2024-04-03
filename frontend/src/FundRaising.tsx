import Web3 from "web3";
import ReceiveArtCoinContractABI from "./Contract/ReceiveArtCoinContract.json"; // 스마트 계약 ABI 파일
import IERC20ABI from "./Contract/IERC20.json";

interface Props {
  account: string;
  tokenAmount: string;
  coinContractAddress: string;
}

export const FundRaisingPage = async ({
  account,
  tokenAmount,
  coinContractAddress,
}: Props) => {
  //account: 구매하는 (개인) 계정
  // const [account, setAccount] = useState<string>("");

  //tokenAmount: 토큰의 양
  // const [tokenAmount, setTokenAmount] = useState<string>("");

  // 투자했을 때 리턴값
  // const [transactionHash, setTransactionHash] = useState<string>("");

  // 성공 실패 유무
  // const [status, setStatus] = useState<string>("");

  const web3 = new Web3((window as any).ethereum);

  // 투자를 하고자하는 펀딩의 주소 (컨트랙트 주소) (임시)
  const ReceviceArtCoinContractAddress = coinContractAddress;

  // 아트코인의 주소(안 변함)
  const artTokenContractAddress = process.env.ART_COIN_CONTRACT_ADDRESS;

  // 로그인 할 때 확인해야하는 부분
  // useEffect(() => {
  //   // MetaMask 계정 연결 확인
  //   if ((window as any).ethereum) {
  //     (window as any).ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((accounts: string[]) => {
  //         if (accounts.length > 0) {
  //           setAccount(accounts[0]);
  //         }
  //       })
  //       .catch((error: any) => {
  //         // 사용자가 거절할 경우 또는 오류가 발생한 경우 처리
  //         console.error("MetaMask 계정 연결 요청에 실패했습니다.", error);
  //       });
  //   }
  // }, []);

  // // MetaMask와 연결
  // const connectWallet = async () => {
  //   if ((window as any).ethereum) {
  //     try {
  //       const accounts: string[] = await (window as any).ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setAccount(accounts[0]);
  //     } catch (error) {
  //       console.error("연결에 실패했습니다.", error);
  //     }
  //   } else {
  //     alert("MetaMask를 설치해주세요!");
  //   }
  // };

  try {
    // 펀딩할 때 이용할 FundRaisingContract 연결!
    // 그 속에 있는 메서드가 정의된 ABI를 이용하기 위함이다.
    const fundingContract = new web3.eth.Contract(
      ReceiveArtCoinContractABI.abi,
      ReceviceArtCoinContractAddress
    );

    console.log("여긴가?1");
    // 아트 토큰 컨트랙트에 있는 기능을 이용하기 위해 선언
    // IERC의 ABI를 쓰는 이유는 ART 토큰이 IERC20을 상속해서 구현되었기 때문이다.
    const artTokenContract = new web3.eth.Contract(
      IERC20ABI.abi,
      artTokenContractAddress
    );
    console.log("여긴가?2");
    // const tokenContract = new web3.eth.Contract(IERC20ABI.abi, tokenAddress);

    // 투자할 때 지불할 ART 토큰에 대해 approve 과정을 거친다.
    // 지불할 곳인 FundRaising 컨트랙트의 주소와
    // 지불할 토큰의 양에 (10**18)을 하여 호출한다.
    const approveTx = await artTokenContract.methods
      .approve(ReceviceArtCoinContractAddress, convertToInteger(tokenAmount))
      .send({ from: account });
    console.log("여긴가?3");

    // approve 과정이 성공적으로 수행되면 그 결과를 받아온다.
    const approveTxReceipt = await web3.eth.getTransactionReceipt(
      approveTx.transactionHash
    );
    console.log("여긴가?4");
    // 만약 결과가 true이면 승인이 된 것이다.
    if (approveTxReceipt.status) {
      console.log("토큰 승인 완료");
      // 토큰이 승인되었다면 이제 fundRaising 컨트랙트의 메서드를 호출해서
      // fund를 진행한다.
      // 내가 지불할 양에 (10**18)을 곱해서 정수로 맞춰준 후 펀딩을 진행한다.
      console.log(
        `tokenAmount type : ${typeof tokenAmount} val : ${tokenAmount}`
      );
      console.log(`account type : ${typeof account} val : ${account}`);
      const investTx = await fundingContract.methods
        .fundToken(tokenAmount)
        .send({ from: account });
      console.log("토큰 투자 성공", investTx);
      return investTx.transactionHash;
      // setStatus("토큰 투자 성공");
      // setTransactionHash(investTx.transactionHash);
    } else {
      console.error("토큰 승인 실패");
    }
  } catch (error) {
    console.error("거래 처리 중 오류가 발생했습니다.", error);
  }
};

// 가격과 토큰의 양을 정수로 변환하는 함수
export const convertToInteger = (value: string) => {
  // 부동 소수점 수로 변환
  const floatValue = parseFloat(value);
  // 10^18을 곱하여 처리
  const integerValue = Math.floor(floatValue * 10 ** 18).toString();
  return integerValue;
};
