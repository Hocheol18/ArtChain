async function main10() {
    const [owner] = await ethers.getSigners();
  
    const contractAddress = '0x0097AB14Ed735ad7D15127E02EBC51647f3ebE84';
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
