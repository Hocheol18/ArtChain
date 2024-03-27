async function main10() {
    const [owner] = await ethers.getSigners();
    const contractAddress = '0x97a7E9F95D629bC11f4874E7e83CaF72Ffe17d0A';
    const ContractFactory = await ethers.getContractFactory('FundRaisingContract');
    const contract = ContractFactory.attach(contractAddress);
    
    console.log(await contract.callStatic.getAllContributor()); // callStatic을 추가하여 호출
}
main10()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
