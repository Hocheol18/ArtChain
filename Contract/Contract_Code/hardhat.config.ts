require("@nomiclabs/hardhat-waffle");
import ArtcoinAbi from "./artifacts/contracts/ArtCoin.sol/ArtcoinContract.json"
import ReceiveArtcoinAbi from "./artifacts/contracts/ReceiveArtCoin.sol/ReceiveArtCoinContract.json"

task("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSigners();
  const contract = "0xB1EE6a825c7c555D37ce5877763ad540947e1983";
  const ArtCoinContract = "0xB80a551604E49a912590bBd1fb79Bb1dE27A263E"
  const ArtcoinABI = ArtcoinAbi.abi
  const ReceiveArtcoinABI = ReceiveArtcoinAbi.abi

  //const fundraising = new ethers.Contract(contract, ArtcoinABI, deployer)
  const Artcoin = new ethers.Contract(ArtCoinContract, ArtcoinABI, deployer)
  const fundraising = new ethers.Contract(contract, ReceiveArtcoinABI, deployer)

  // wait fundraising.transferToken("0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3", 500)
  // await fundraising.initialSupply().then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  await fundraising.raisedAmount().then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  await fundraising.newCoins("0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3").then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  // await fundraising.refunds("").then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  await fundraising.listOfContributors(0).then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  await fundraising.approve("0xB1EE6a825c7c555D37ce5877763ad540947e1983", 100)
  await fundraising.transferFrom("0xB1EE6a825c7c555D37ce5877763ad540947e1983", "0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3", 10)
  //await fundraising.approve("0xB1EE6a825c7c555D37ce5877763ad540947e1983", 10).then(fundraising.transferFrom("0xB1EE6a825c7c555D37ce5877763ad540947e1983", "0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3", 10))
  // await Artcoin.transferFrom("0xB1EE6a825c7c555D37ce5877763ad540947e1983", "0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3", 10).then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  
  // await fundrasing.distributeFunds()
  // await fundrasing.mintTokens(100);
  // await fundrasing.transferToken(
  //   "0xa98152DE411B3C2ecBccAA199A7f1F855e7c8E90",
  //   100
  // );
  // await fundrasing.distributeFunds().then((datass : any) => console.log(datass) ).catch((err : any) => console.log(err))
  // console.log(await fundrasing.targetAmount(), await fundrasing.raisedAmount(), await fundrasing.finishTime());
});

const privateKey =
  "b4c1f0efd30a4bac98df9a4d9ab1d6545f528c5d55e49d9ef751daf7a5e8980a";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/fcf1b848b122474ba6b758aec7c7f725",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
