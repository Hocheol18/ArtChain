async function main1() {
  const [owner] = await ethers.getSigners();

  const contractAddress = '0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB'; // 배포된 컨트랙트의 주소를 여기에 입력하세요.
  const ContractFactory = await ethers.getContractFactory('ArtcoinContract'); // 컨트랙트 이름을 여기에 입력하세요.
  const contract = ContractFactory.attach(contractAddress);

  // 토큰 민트
  await contract.mintTokens(1000);

  // 토큰 소각
  // const burnToken = ethers.utils.parseUnits("10000", "ether");
  // await contract.burnTokens(burnToken);

  // 토큰 전송
  // await contract.transferToken("0x8c568b58C1D07A9C02137f481a1e0DD91dcE6ae2", burnToken)
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
