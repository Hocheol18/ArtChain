async function main10() {
    const [owner] = await ethers.getSigners();
    const contractAddress = '0x304a24F09d13dFe34aDFF767Fa9807111805623b';
    const ContractFactory = await ethers.getContractFactory('ReceiveArtCoinContract');
    const contract = ContractFactory.attach(contractAddress);
    
    // console.log(await contract.distributeFund());
    console.log(await contract.refundContributors());
    // console.log(`투자 받은 금액 : ${await contract.getRaisedAmount()}`);
    // console.log(`모집해야 하는 금액 : ${await contract.getInitialSupply()}`);
}
main10()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
