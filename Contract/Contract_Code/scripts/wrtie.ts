// scripts/write.js
const { ethers } = require("ethers");

async function main3() {
  const [owner] = await ethers.getSigners();

  const contractAddress = "0xC0E771f6413E4139a175fB75f91A1e0508e2F34C"; // 배포된 컨트랙트의 주소를 여기에 입력하세요.
  const ContractFactory = await ethers.getContractFactory(
    "ArtworkInvestmentContract"
  ); // 컨트랙트 이름을 여기에 입력하세요.
  const contract = ContractFactory.attach(contractAddress);

  //작품 추가
  await contract.addArtwork(
    10, // artworkId
    "photo", // photo
    1000, // totalInvestment
    100, // progressRate
    "hochill", // description
    "adererrer", // investmentStructure
    200, // expectedReturn
    "notices", // notices
    "status", // status
    "community", // community
    "riskWarning", // riskWarning
    "marketplaceStatus" // marketplaceStatus
  );
}

main3()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
