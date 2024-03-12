require("@nomiclabs/hardhat-waffle");
require("hardhat")

tasks("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSingers();
  const contract = "0x36a90556F14b099A06767f0a0Ce1f1f47164Cf45";
  const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "donations",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "targetAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const fundrasing = new ethers.Contract(contract, abi, deployer);
  console.log(fundrasing.targetAmount(), fundrasing.raisedAmount());
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
function tasks(arg0: string, arg1: string, arg2: () => Promise<void>) {
  throw new Error("Function not implemented.");
}
