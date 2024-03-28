async function main1() {
  const [owner] = await ethers.getSigners();

  const contractAddress = '0x25856AE0f0E2ABcD4ea28175b85eC00B68559C11'; // 배포된 컨트랙트의 주소를 여기에 입력하세요.
  const ContractFactory = await ethers.getContractFactory('ArtchainERC20MintBurnable'); // 컨트랙트 이름을 여기에 입력하세요.
  const contract = ContractFactory.attach(contractAddress);

  // 토큰 소각
  const burnToken = ethers.utils.parseUnits("10000", "ether");
  await contract.burnTokens(burnToken);

  // 토큰 전송
  await contract.transferToken("0x8c568b58C1D07A9C02137f481a1e0DD91dcE6ae2", burnToken)
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
