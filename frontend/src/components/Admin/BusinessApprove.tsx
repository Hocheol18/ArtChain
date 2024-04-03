import { Button, Center, Flex } from "@chakra-ui/react";
import Web3 from "web3";
import ReceiveArtCoinContractABI from "../../Contract/ReceiveArtCoinContract.json";
import useDistributeInfo from "../../store/useDistributeInfo";

export default function BusinessApprove() {
  const web3 = new Web3((window as any).ethereum);
  const { distributeInfo } = useDistributeInfo();
  const MW = "0xDaBD9681C6fA9C2675f883FB67a1485038087DD3";

  const distribute = async () => {
    try {
      // 펀딩할 때 이용할 FundRaisingContract 연결!
      // 그 속에 있는 메서드가 정의된 ABI를 이용하기 위함이다.
      const fundingContract = new web3.eth.Contract(
        ReceiveArtCoinContractABI.abi,
        distributeInfo.fundingContractAddress
      );

      const tx = fundingContract.methods.distributeFund().send({ from: MW });
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
      {distributeInfo.isRecruitSuccess ? (
        <>
          <Flex justifyContent={"space-between"} p={"1rem"}>
            <Flex>{distributeInfo.fundingContractAddress.substring(0,10)}...</Flex>
            <Flex>
              <Button
              bgSize={"0.5rem"}
                onClick={() => {
                  distribute();
                }}
              >
                승인
              </Button>
            </Flex>
          </Flex>
        </>
      ) : (
        <Center as="b" fontSize={"1.5rem"} h={"600px"}>
          데이터가 없습니다
        </Center>
      )}
    </>
  );
}
