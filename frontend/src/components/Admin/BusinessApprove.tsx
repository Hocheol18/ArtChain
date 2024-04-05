import { Button, Center, Flex } from "@chakra-ui/react";
import Web3 from "web3";
import ReceiveArtCoinContractABI from "../../Contract/ReceiveArtCoinContract.json";
import useDistributeInfo from "../../store/useDistributeInfo";

export default function BusinessApprove() {
  const web3 = new Web3((window as any).ethereum);
  const MW = import.meta.env.VITE_MAIN_WALLET_ADDRESS;
  const { distributeInfo } = useDistributeInfo()

  const distribute = async () => {
    sessionStorage.setItem("check", "check")
    try {
      // 펀딩할 때 이용할 FundRaisingContract 연결!
      // 그 속에 있는 메서드가 정의된 ABI를 이용하기 위함이다.
      const fundingContract = new web3.eth.Contract(
        ReceiveArtCoinContractABI.abi,
        distributeInfo.fundingContractAddress
      );

      const tx = fundingContract.methods.distributeFundWithoutCondition().send({ from: MW });
      console.log((await tx).transactionHash);
    } catch (error) {
      console.error("거래 처리 중 오류가 발생했습니다.", error);
    }
  };

  // const refund = async () => {
  //   try {
  //     // 펀딩할 때 이용할 FundRaisingContract 연결!
  //     // 그 속에 있는 메서드가 정의된 ABI를 이용하기 위함이다.
  //     const fundingContract = new web3.eth.Contract(
  //       ReceiveArtCoinContractABI.abi,
  //       ReceviceArtCoinContractAddress
  //     );

  //     const tx = fundingContract.methods
  //       .refundContributors()
  //       .send({ from: account });
  //     console.log((await tx).transactionHash);
  //   } catch (error) {
  //     console.error("거래 처리 중 오류가 발생했습니다.", error);
  //   }
  // };

  // handle 기업승인버튼
  // const handleCompany = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   comId: number
  // ) => {
  //   const value = e.target.value;
  //   PutSignUpPermissionAxios({ memberId: comId, permissionFlag: value }).then(
  //     () => {
  //       setCnt(cnt + 1);
  //     }
  //   );
  // };

  // const handleCompany = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   comId: number
  // ) => {
  //   const value = e.target.value;
  //   PutSignUpPermissionAxios({ memberId: comId, permissionFlag: value }).then(
  //     () => {
  //       setCnt(cnt + 1);
  //     }
  //   );
  // };

  return (
    <>
      {sessionStorage.getItem("check") === "check" ? (
        <Center as="b" fontSize={"1.5rem"} h={"600px"}>
          데이터가 없습니다
        </Center>
      ) : (
        <>
          <Flex justifyContent={"space-between"} p={"1rem"}>
            <Flex>
              {"0x8A171dee872BbE271E641197e7879464593ADab3".substring(0, 13)}...
            </Flex>
            <Flex>
              <Button
                size={"sm"}
                borderColor={"blue.400"}
                onClick={() => {
                  distribute();
                }}
              >
                승인
              </Button>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}
