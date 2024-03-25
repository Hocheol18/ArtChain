async function main2() {
    const [owner] = await ethers.getSigners();
  
    const contractAddress = '0x832c4d1ec46F32e30aaf73fE974f64e3EFbD3df1'; // 배포된 컨트랙트의 주소를 여기에 입력하세요.
    const ContractFactory = await ethers.getContractFactory('Marketplace'); // 컨트랙트 이름을 여기에 입력하세요.
    const contract = ContractFactory.attach(contractAddress);
  
    // 거래 생성
    await contract.createTrade("0x2dFD90cd4cFA75CE1dbF31947d7322305dcC099A", // 조각 컨트랙트
                                100,
                                "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB", // 아트 코인 컨트랙트
                                1000)
    // await contract.mintTokens(1000);
    console.log('done')

    await contract.executeTrade(0).then((res:any) => console.log(res)).catch((e:any) => console.log(e));

    console.log('execute trade completed!!!!!');

    console.log(await contract.getAllTrades().then((res : any) => console.log(res)));
  }
  
  main2()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
