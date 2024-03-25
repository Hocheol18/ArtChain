require("@nomiclabs/hardhat-waffle");
import ArtcoinAbi from "./artifacts/contracts/ArtCoin.sol/ArtcoinContract.json"
import ReceiveArtcoinAbi from "./artifacts/contracts/ReceiveArtCoin.sol/ReceiveArtCoinContract.json"

task("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSigners();
  // const contract = "0xB1EE6a825c7c555D37ce5877763ad540947e1983";
  const ArtCoinContract = "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"
  const ArtcoinABI = ArtcoinAbi.abi
  const ReceiveArtcoinABI = ReceiveArtcoinAbi.abi

  const fundraising = new ethers.Contract(ArtCoinContract, ArtcoinABI, deployer)
  const Artcoin = new ethers.Contract(ArtCoinContract, ArtcoinABI, deployer)
  // const fundraising = new ethers.Contract(contract, ReceiveArtcoinABI, deployer)

  await fundraising.transferToken("0x8c568b58C1D07A9C02137f481a1e0DD91dcE6ae2", 1000)
  // await fundraising.initialSupply().then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  // await fundraising.raisedAmount().then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  // await fundraising.newCoins("0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3").then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  // await fundraising.refunds("").then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  // await fundraising.listOfContributors(0).then((res : any) => console.log(res)).catch((err : any) => console.log(err))
  // await fundraising.approve("0xB1EE6a825c7c555D37ce5877763ad540947e1983", 100)
  // await fundraising.transferFrom("0xB1EE6a825c7c555D37ce5877763ad540947e1983", "0xfB4CDcfb555459a886C1987E3Da3a4e7F7474CD3", 10)
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
  "62ca506c3fb90c1e1e1ea9121f55975a0c839be1f2b62b29ad370b1317e17ce1";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/5065fe39d7a24c22bbfb031ac09fa56e",
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
