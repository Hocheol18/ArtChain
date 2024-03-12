require("@nomiclabs/hardhat-waffle");

task("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSigners();
  const contract = "0x2DBB09E5A2e3b527449aac94740752e82CabDaCD";
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
  ];

  // const abi = [
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_targetAmount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_time",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "nonpayable",
  //     "type": "constructor"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "distributeFunds",
  //     "outputs": [],
  //     "stateMutability": "payable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "donations",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "finishTime",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "owner",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "raisedAmount",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "targetAmount",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "stateMutability": "payable",
  //     "type": "receive"
  //   }
  // ];
  const fundrasing = new ethers.Contract(contract, abi, deployer);
  await fundrasing.burnTokens(100);
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
