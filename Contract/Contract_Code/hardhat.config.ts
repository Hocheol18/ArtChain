require("@nomiclabs/hardhat-waffle");

const privateKey = 'b4c1f0efd30a4bac98df9a4d9ab1d6545f528c5d55e49d9ef751daf7a5e8980a';

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/fcf1b848b122474ba6b758aec7c7f725',
      accounts: [privateKey],
      
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      } 
    }
  }
};
