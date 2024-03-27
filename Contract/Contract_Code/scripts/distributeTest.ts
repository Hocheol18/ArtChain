async function main10() {
    const [owner] = await ethers.getSigners();
    const contractAddress = '0x20C9eA22E9F5D6F2fC1c976f6dBdc605b48a5e9D';
    const ContractFactory = await ethers.getContractFactory('ReceiveArtCoinContract');
    const contract = ContractFactory.attach(contractAddress);
    
    // console.log(await contract.distributeFund());
    console.log(await contract.refundDistribute());
    // console.log(`투자 받은 금액 : ${await contract.getRaisedAmount()}`);
    // console.log(`모집해야 하는 금액 : ${await contract.getInitialSupply()}`);
}
main10()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
