async function main10() {
    const [owner] = await ethers.getSigners();
    const contractAddress = '0xFd1DC22f86D1F09eaE041FD140544438afe7AF6a';
    const ContractFactory = await ethers.getContractFactory('ReceiveArtCoinContract');
    const contract = ContractFactory.attach(contractAddress);
    
    console.log(await contract.distributeFund()); // callStatic을 추가하여 호출
    // console.log(await contract.getRaisedAmount());
    // console.log(await contract.getInitialSupply());
}
main10()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
