# 🧩블록체인 기반 공연·전시·영화 조각투자 서비스, ArtChain

<img src="./Assets/pic/header.jpg"/>

<hr>

## 목차

- [📌 서비스 소개](#-서비스-소개)
- [⏱ 개발 기간](#-개발-기간)
- [👥 팀 소개](#-팀-소개)
- [🛠️ 기술 스택](#️-기술-스택)
- [💡 주요 기능](#-주요-기능)
- [🌐 포팅 매뉴얼](#-포팅-매뉴얼)
- [💻 서비스 화면](#-서비스-화면)
- [📄 설계 문서](#-설계-문서)

### 📌 서비스 소개

##### 블록체인 기술을 이용한 투명한 투자

- 투명하고 조작 불가능하게 블록체인 컨트랙트를 사용하여 투자합니다.

##### 소액으로도 즐기는 조각투자

- ArtChain 자체 토큰인 ArtCoin과 현금을 매칭하여 담보금을 보증합니다.

##### 투자자 간 P2P 마켓 거래

- 서로 다른 종류의 ERC-20 토큰을 교환할 수 있으며 거래 시 발생하는 모든 트랜잭션을 투명하게 확인할 수 있습니다.

### ⏱ 개발 기간

- 2024.02.19 ~ 2024.04.05 (6주)

### 👥 팀 소개

<table align="center">
  <tr>
    <tr align="center">
        <td style="min-width: 250px;">
            <a href="https://github.com/JHyeon-a">
              <b>정현아</b>
            </a> 
        </td>
        <td style="min-width: 250px;">
            <a href="https://github.com/Hocheol18">
              <b>박호철</b>
            </a>
        </td>
        <td style="min-width: 250px;">
            <a href="https://github.com/KuMMii">
              <b>김지은</b>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td style="min-width: 250px;">
              <img src="https://avatars.githubusercontent.com/u/139304856?v=4cd575a38-8fc4-4470-889b-b920862f2e30" width="100">
        </td>
        <td style="min-width: 250px;">
              <img src="https://avatars.githubusercontent.com/u/74571069?v=4" width="100">
        </td>
        <td style="min-width: 250px;">
              <img src="https://avatars.githubusercontent.com/u/128502524?v=4" width="100">
        </td>
    </tr>
    <tr align="center">
        <td>
        <b>Leader, Frontend, PM</b><br>UI/UX 및 목업 제작<br/>
메인/투자/충전, 환전/마이(나의 조각)/기업 페이지<br/>
Axios 생성 및 연결
        <br/>
        </td>
        <td>
        <b>Frontend, Contract</b><br>메인페이지/마켓/회원가입/로그인/관리자/나의투자<br/>
로그인 , 회원가입, 관리자 페이지<br/>
아트코인 민팅/투자 컨트랙트<br/>
프론트 컨트랙트 연결<br/>
Axios 생성 및 연결
        <br/>
        </td>
        <td>
        <b>CI&CD, Front</b><br> Nginx 설정<br/>Frontend Blue/Green 무중단 배포<br/>카카오페이 PortOne API 연결<br/> Axios 생성<br/> 피그마 제작
        <br/>
        </td>
    </tr>
  </tr>
  <tr>
    <tr align="center">
        <td style="min-width: 250px;">
            <a href="https://github.com/YoungUk0126">
              <b>김영욱</b>
            </a>
        </td>
        <td style="min-width: 250px;">
            <a href="https://github.com/ComelyU">
              <b>허준혁</b>
            </a>
        </td>
        <td style="min-width: 250px;">
            <a href="https://github.com/DeveloperYard">
              <b>김승우</b>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td style="min-width: 250px;">
              <img src="https://avatars.githubusercontent.com/u/70872187?v=4" width="100">
        </td>
        <td style="min-width: 250px;">
              <img src="https://avatars.githubusercontent.com/u/31150286?v=4" width="100">
        </td>
        <td style="min-width: 250px;">
              <img src="https://avatars.githubusercontent.com/u/59395755?v=4" width="100">
        </td>
    </tr>
    <tr align="center">
        <td>
        <b>Backend</b><br>마켓/멤버/환전,충전/OAuth API<br/>
Spring Security, JWT 토큰 구현
        <br/>
        </td>
        <td>
        <b>Backend</b><br> 펀딩/투자/조각 코인 소유자/정산 API 구현<br/>
Scheduler & SSE 구현<br/>UCC 담당
        <br/>
        </td>
        <td>
        <b>Contract, CI&CD</b><br> Docker 설정<br/> 마켓/펀딩/투자/분배/정산/아트코인 민팅 및 환전 컨트랙트 작성<br/>frontend 컨트랙트 연결<br/>UCC 담당
        <br/>
        </td>
    </tr>
  </tr>

</table>

### 🛠️ 기술 스택

##### 📱 Frontend

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" width="auto" height="25">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black" width="auto" height="25">
<img src="https://img.shields.io/badge/chakra ui-319795?style=for-the-badge&logo=chakraui&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/zustand-A33035?style=for-the-badge&logoColor=white" width="auto" height="25">

##### 💻 Backend

<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" width="auto" height="25"> 
<img src="https://img.shields.io/badge/SPRING DATA JPA-6DB33F?style=for-the-badge&logoColor=white" width="auto" height="25"> 
<img src="https://img.shields.io/badge/SPRING SECURITY-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/jwt-000000?style=for-the-badge&logo=jwt&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white" width="auto" height="25">

##### 📃 Contract

<img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" width="auto" height="25"> 
<img src="https://img.shields.io/badge/openzeppelin-4E5EE4?style=for-the-badge&logo=openzeppelin&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/hardhat-FFF100?style=for-the-badge&logoColor=white" width="auto" height="25"> 
<img src="https://img.shields.io/badge/moralis-1FA6F5?style=for-the-badge&logoColor=white" width="auto" height="25">

##### 🚀 Infrastructure

<img  src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazon aws&logoColor=white" width="auto" height="25" />
<img  src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=amazon s3&logoColor=white" width="auto" height="25" />
<img  src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white" width="auto" height="25" />
<img  src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" width="auto" height="25" />
<img  src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" width="auto" height="25" />
<img  src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" width="auto" height="25" />

##### ⚙️ Management Tools

<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&amp;logoColor=white" width="auto" height="25" />
<img src="https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" width="auto" height="25" />
<img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" width="auto" height="25" />
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" width="auto" height="25" />
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" width="auto" height="25" />

##### 🖥️ IDE

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white" width="auto" height="25"/>
<img src="https://img.shields.io/badge/IntelliJ-000000?style=for-the-badge&logo=intellij&logoColor=white"  width="auto" height="25"/>

### 💡 주요 기능

#### 1. 자체 토큰인 ArtCoin 구매 가능

- Ethereum 기반 테스트넷인 Sepolia에서 자체 ERC-20 토큰인 ArtCoin 발행
- 카카오페이를 통해 코인 구매

#### 2. ArtCoin으로 조각 투자

- 투자기간 동안 ArtCoin으로 자체 ERC-20 토큰인 "조각"을 구매 가능
- 투자 시 발생하는 트랜잭션 가스비는 테스트 Ethereum으로 지불
- 실시간 블록체인 컨트랙트 메서드 호출을 위해 Server Sent Event(SSE) 사용해 투자 성공 시 조각 배분 및 정산 시 ArtCoin 배분

#### 3. 구매한 조각으로 마켓에서 투자자 간 거래

- 투자기간 이후 정산 되기 전 투자한 "조각"을 마켓에서 ArtCoin으로 거래 가능
- 거래 시 트랜잭션 가스비는 테스트 Ethereum으로 지불

### 🌐 포팅 매뉴얼

[포팅 매뉴얼 보러가기](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22A708/-/blob/master/exec/Porting%20Manual.md?ref_type=heads)

### 💻 서비스 화면

#### [메인 페이지]

<img src="./Assets/pic/메인페이지.gif" height=500px/>

- 모집 기간 임박 순으로 투자 상품 정렬
- 조각 판매글 순으로 마켓 상품 정렬

#### [로그인]

<img src="./Assets/pic/[일반] 로그인.gif" height=500px/>

#### [투자 페이지]

##### 투자리스트 보기

<img src="./Assets/pic/투자리스트.gif" height=500px/>

##### 투자 상품 상세보기

<img src="./Assets/pic/투자 상세보기.gif" height=500px/>

##### 투자 상품 상세보기

<img src="./Assets/pic/투자하기.gif" height=500px/>

- 전체, 공연, 전시, 영화로 필터
- 전체, 진행중, 모집종료, 정산완료로 필터
- 투자 진행 중일 때 총 발행 조각에서 남은 개수만큼 구매 가능
- 투자 완료 후 Etherscan에서 확인 가능
- 펀딩 스마트 컨트랙트에 투자 가능
- 투자 시 컨트랙트에 투자된 아트 토큰이 쌓임
    - 이후 성공, 실패 여부에 따라 각각 조각 토큰 분배 및 기업으로의 투자된 아트 토큰 이동, 투자자들의 아트 토큰 환불 진행

#### [마켓 페이지]

##### 마켓리스트 조회

<img src="./Assets/pic/마켓조회.gif" height=500px/>

##### 마켓 거래 등록

<img src="./Assets/pic/마켓거래등록.gif" height=500px/>

##### 마켓 조각 구매

<img src="./Assets/pic/마켓조각구매.gif" height=500px/>

- 메타마스크와 연동해 마켓에서 조각 구매
- 로그인 시 보유 조각 판매글 등록 가능
- 투자 모집 종료 성공 후 받은 조각 토큰을 다른 사람들에게 판매할 수 있음
- 판매 가격은 자신이 정하며, 판매 글을 올리면 마켓플레이스 스마트 컨트랙트에 토큰이 이동됨
    - 판매될 시 구매자의 아트 토큰을 판매자로 이동
    - 판매 취소 시 스마트 컨트랙트에서 글을 올렸던 판매자에게로 다시 이동

#### [코인 구매/환전 페이지]

##### ArtCoin 충전

<img src="./Assets/pic/아트코인 충전.gif" height=500px/>

##### ArtCoin 카카오페이 결제

<img src="./Assets/pic/충전-카카오페이(폰).gif" height=500px/>

##### ArtCoin 환전

<img src="./Assets/pic/아트코인 환전.gif" height=500px/>

- 카카오페이로 ArtCoin 구매
- 메타마스크와 연동해 토큰 민팅

#### 마이페이지

##### 나의 투자
<img src="./Assets//pic/마이-나의투자.gif" height=500px/>

- 사용자가 보유 중인 있는 아트코인 및 조각 조회 가능
- 투자 내역 확인 가능


##### 나의 거래
<img src="./Assets//pic/마이-나의거래.gif" height=500px>

- 사용자 거래 내역을 확인할 수 있음
- 이더스캔 조회 기능 탑재


#### [기업 페이지]

##### 기업 회원가입

<img src="./Assets/pic/[기업] 회원가입.gif" height=500px/>

##### 기업 로그인

<img src="./Assets/pic/[기업] 로그인.gif" height=500px/>

##### 기업 프로젝트 등록 신청

<img src="./Assets/pic/[기업] 프로젝트 등록 신청.gif" height=500px/>

##### 기업 프로젝트 정산 신청

<img src="./Assets/pic/[기업] 프로젝트 정산 신청.gif" height=500px/>

- 등록한 프로젝트 조회 및 등록 신청
- 정산 완료 신청

#### [관리자 페이지]

##### 기업 승인/반려

<img src="./Assets/pic/기업 승인, 반려.gif" height=500px/>

##### 프로젝트 승인/반려

<img src="./Assets/pic/프로젝트 승인.gif" height=500px/>

##### 프로젝트 조각 분배

<img src="./Assets/pic/프로젝트 조각 분배.gif" height=500px/>

##### 프로젝트 조각 분배 트랜잭션 내역

<img src="./Assets/pic/분배 트잭 내역.PNG" width=800px/>

##### 프로젝트 정산

<img src="./Assets/pic/프로젝트 정산.gif" height=500px/>

##### 프로젝트 정산 Etherscan 기록

<img src="./Assets/pic/정산 캡처.PNG" width=800px/>

- 프로젝트 펀딩 승인
    - 승인 시 스마트 컨트랙트 생성 및 투자를 받을 수 있음
    - 일정 기간이 지날 시 80% 이상, 미만 여부에 따라 각각 성공, 실패 여부 결정
    - 성공 시 해당 작품에 대한 조각 분배 및 펀딩을 오픈한 기업에게 모인 아트 토큰 전달, 실패 시 투자한 아트 토큰에 대한 환불 진행
- 프로젝트 정산
    - 정산일에 도달했을 때 (투자 원금 토큰) * (이율) / 100 계산 후 분배될 토큰 계산
    - 투자자들에게 계산된 토큰 별로 분배 진행

### 📄 설계 문서

#### 1. ERD

<img src="./Assets/pic/ArtChain ERD.png" width="1000px"/>

#### 2. 아키텍처

<img src="./Assets/pic/ArtChain Architecture.png" width="1000px"/>

#### [3. Mockup](https://www.figma.com/file/mcMwnFn8rZjF5tIEO6KAAX/Artchain?type=design&node-id=103%3A224&mode=design&t=sOngQjOWEk0p3Tty-1)
![image-1.png](./image-1.png)


#### [4. 요구 사항 명세서](https://trapezoidal-salsa-0b2.notion.site/0065f39dba1a43fba787cbb9b9def18f?pvs=4)

#### [5. API 명세서](https://trapezoidal-salsa-0b2.notion.site/API-67b6402e91494eae8ef749d89f4c8cd3?pvs=4)
