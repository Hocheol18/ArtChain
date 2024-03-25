// scripts/deployFundRaisingContract.js

async function main12() {
    const FundRaisingContract = await ethers.getContractFactory("FundRaisingContract");
  
    // 생성자에 전달할 인수를 정의합니다.
    const name = "MyFundRaisingToken"; // 토큰의 이름
    const symbol = "MFT"; // 토큰의 심볼
    const initialSupply = 1000000; // 초기 공급량
    const time = 60; // 분 단위로 마감 시간 설정
  
    // 스마트 계약을 배포합니다.
    const fundRaisingContract = await FundRaisingContract.deploy(name, symbol, initialSupply, time);
    await fundRaisingContract.deployed();
  
    console.log("FundRaisingContract deployed to:", fundRaisingContract.address);
  }
  
  // 스크립트 실행
  main12()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  