async function main10() {
    const [owner] = await ethers.getSigners();
    const contractAddress = '0xb1f9b901fd19f0567F0efFF9437ab35f80B7fA90';
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
