require("@nomiclabs/hardhat-waffle");

task("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSigners();
  const contract = "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB";
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_Supply",
          type: "uint256",
        },
      ],
      name: "mintTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "burnAmount",
          type: "uint256",
        },
      ],
      name: "burnTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "distributeFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
  ];
  const fundrasing = new ethers.Contract(contract, abi, deployer);
  // await fundrasing.distributeFunds()
  await fundrasing.mintTokens(100);
  await fundrasing.transferToken(
    "0x67F07AFaD0f1528391a0CF8C5058370114B262d6",
    100
  );
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
