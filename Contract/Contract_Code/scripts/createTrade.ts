async function main2() {
    const [owner] = await ethers.getSigners();
  
    const contractAddress = '0x5f29416D00C34251dfa3B884B2986B091F5e1A9d'; // 배포된 컨트랙트의 주소를 여기에 입력하세요.
    const ContractFactory = await ethers.getContractFactory('Marketplace'); // 컨트랙트 이름을 여기에 입력하세요.
    const contract = ContractFactory.attach(contractAddress);
  
    // // 거래 생성
    // await contract.createTrade("0xC3736770891Fc95ac4F1e59a22c08504260B5152",
    //                             100,
    //                             "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB",
    //                             1000)
    // await contract.mintTokens(1000);
    // console.log('first')
    // await contract.createTrade(
    //     "0x20628AA1596097602B10CE38e2d6F0eBda73E9C8",
    //     30,
    //     "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB",
    //     200
    // )
    // console.log("this")
    await contract.executeTrade(0).then((res:any) => console.log(res)).catch((e:any) => console.log(e));

    console.log('execute trade completed!!!!!');

    console.log(await contract.getAllTrades());
  }
  
  main2()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
