// scripts/deploy.js

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ArtchainERC20Factory = await ethers.getContractFactory("ArtchainERC20MintBurnable");
  const initialSupply = ethers.utils.parseUnits("1000000", "ether");
  const contract = await ArtchainERC20Factory.deploy(initialSupply);

  console.log("NewContractAddress address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
