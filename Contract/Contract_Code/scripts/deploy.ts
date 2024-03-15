
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ArtchainERC20Factory = await ethers.getContractFactory("ReceiveArtCoinContract");
  // const contract = await ArtchainERC20Factory.deploy();
  const contract = await ArtchainERC20Factory.deploy("TokenMint", "TM", 1000, 200, "0xB80a551604E49a912590bBd1fb79Bb1dE27A263E");
  // const initialSupply = ethers.utils.parseUnits("100000", "ether");
  // const contract = await ArtchainERC20Factory.deploy(10, 100, "0x2DBB09E5A2e3b527449aac94740752e82CabDaCD");

  console.log("NewContractAddress address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
