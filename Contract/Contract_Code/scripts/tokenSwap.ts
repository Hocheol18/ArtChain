async function main1() {
  const [owner] = await ethers.getSigners();

  const contractAddress = '0x76dfAC531050Ebd33D760Bd1CceB3DA6237D2Ed7'; // 배포된 컨트랙트의 주소를 여기에 입력하세요.
  const ContractFactory = await ethers.getContractFactory('TokenSwap'); // 컨트랙트 이름을 여기에 입력하세요.
  const contract = ContractFactory.attach(contractAddress);

  // 토큰 교환 
  await contract.swap("0x8c568b58C1D07A9C02137f481a1e0DD91dcE6ae2", 200);

}

main1()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function useState() {
  throw new Error("Function not implemented.");
}
