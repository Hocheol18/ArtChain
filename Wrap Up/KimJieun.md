# Wrap up

## 20240404

### 오늘 한 것

- 발표날!
- 시연 매뉴얼 작성 후 시연 도움

## 20240403

### 오늘 한 것

- PPT 제작
- `.env`파일 docker container에 추가

### 어려웠던 점

- `.env`를 젠킨스에서 만들고 파일까지 생성하는데, 도커에 들어가지 않았다.
  - `.dockerignore`에 env파일이 들어있었음!!

### 새로 알게 된 점

- 프론트 컨테이너 들어가는 법

  - `docker exec -it artchain_frontend_b /bin/sh`

- `.env`파일 추가하기
  [https://velog.io/@votogether2023/AWS-EC2-배포-시-env-파일-설정feat.젠킨스](https://velog.io/@votogether2023/AWS-EC2-%EB%B0%B0%ED%8F%AC-%EC%8B%9C-env-%ED%8C%8C%EC%9D%BC-%EC%84%A4%EC%A0%95feat.%EC%A0%A0%ED%82%A8%EC%8A%A4)

  - `Dockerfile` 에서 `.env` 복사
    - `.dockerignore` 에서 `.env` 삭제
    - Dockerfile 내용
    ```bash
    FROM node:21-alpine
    WORKDIR /app
    COPY package*.json .
    RUN npm install
    COPY .env .
    COPY . .
    EXPOSE 3000
    CMD [ "npm", "run", "dev" ]
    ```
  - 추가 부분

  ```bash
  stage('Image Build & DockerHub Push') {
              steps {
                  // '/frontend' 디렉토리로 이동
                  dir('frontend') {
                      script {

                          sh '''
                          touch .env
                          echo 'VITE_ART_COIN_CONTRACT_ADDRESS=0xE5856017Db7b4023383c867Ea65bc178B7F023C1' >> .env
                          echo 'VITE_MARKET_CONTRACT_ADDRESS=0x538F17DB8FdB2bba76D14E420161412e9d0Bd2CA' >> .env
                          '''
                          // Docker Hub에 로그인 (Docker Hub Access Token이 필요)
                          docker.withRegistry('', registryCredential) {
                              sh "docker buildx create --use --name mybuilder"
                              sh "docker buildx build --platform linux/amd64,linux/arm64 -t $imageName:$BUILD_NUMBER --push ."
                              sh "docker buildx build --platform linux/amd64,linux/arm64 -t $imageName:latest --push ."
                          }

                      }
                  }
              }
          }
  ```

### 내일 할 것

- PPT 만들기

## 20240402

### 오늘 한 것

- 파비콘 추가
- docker에서 기존의 image가 삭제 되지 않아 jenkins script에 삭제 커맨드 추가

### 어려웠던 점

- 기존 이미지 삭제하는 것을 처음에는 `docker rmi $(docker images -f "dangling=true" -q)` 했는데, jenkins script에서는 변수가 되지 않았다.

### 새로 알게 된 점

- 사용하지 않는 이미지를 삭제하기 위해서는 `docker image prune -f`을 해야한다.
- SSE를 사용하기 위해서는 SSE 허가 설정을 NginX에서 해야한다.

### 내일 할 것

- PPT 만들기

## 20240401

### 오늘 한 것

- axios 생성
- 크롬창 너비 500보다 더 작게 만드는 방법 찾기

### 어려웠던 점

- 사진과 dto를 함께 첨부하는 axios가 정말 힘들었다

### 새로 알게 된 점

- 사진과 dto를 함께 첨부할 때 formData에 append를 해야 하는데, dto를 JSON으로 변환해서 그냥 append를 하면 안된다. blob로 변환해서 append를 해야함

### 내일 할 것

- 포팅메뉴얼 작성

## 20240331

### 오늘 한 것

- axios 생성

### 어려웠던 점

- 사진과 dto를 함께 첨부하는 axios가 어려움ㅠ

### 내일 할 것

- axios 완료

## 20240329

### 오늘 한 것

- 개인/기업 마이페이지 백 메서드 생성 후 이미 있던 거라 삭제ㅠ
- axios 생성

### 어려웠던 점

- axios를 처음 하는거라 처음에는 조금 어려웠다

### 내일 할 것

- axios 완료

## 20240328

### 오늘 한 것

- 메타마스크-모바일 웹 연동
- 코인 민팅 함수 호출

### 어려웠던 점

- dApp이 뭔지 몰라 아주 바닥부터 시작했다ㅎㅎ
- 그리고 connectWallet을 해야하는지 몰라서 삽질 했음
- 연동 완료 후, 코인 민팅을 할 때 리액트와 타입스크립트를 몰라서 완성된 함수를 import하는 게 어려웠다.
- 메타마스크- 모바일 웹 연동

[https://velog.io/@rjc1704/메타마스크-지갑-연결-데스크탑-모바일](https://velog.io/@rjc1704/%EB%A9%94%ED%83%80%EB%A7%88%EC%8A%A4%ED%81%AC-%EC%A7%80%EA%B0%91-%EC%97%B0%EA%B2%B0-%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91-%EB%AA%A8%EB%B0%94%EC%9D%BC)

- dApp이 무엇인지
  - 블록체인 플랫폼을 뜻함
  - https://upbitcare.com/academy/education/blockchain/239
- connectWallet 버튼을 생성해야함
- 연결 확인을 해야함
- https://metamask.github.io/metamask-deeplinks/ 에서 디앱 링크 생성
- 모바일 웹으로 그 링크로 입장
- 메타마스크 앱이 있어야함. 앱 내 브라우저에서 우리 웹사이트 보면 됨

### 내일 할 것

- 포트원 끝내기
- 더미 데이터 넣기

## 20240327

### 오늘 한 것

- Nginx 업로드 용량 수정
- PortOne 카카오페이 테스트 결제 성공

### 어려웠던 점

- 타입스크립트를 하나도 모르는 상태로 포트원을 하는 게 처음에 정말 막막했다.
- 그리고 카카오페이 결제 페이지에서 `mInfo:1 Failed to launch 'intent://kakaopay/pg?url=' because the scheme does not have a registered handler.`에러가 떠서 너무 슬펐다. 이유가 개발자 모드 자체 지원이 안된다는 말을 보고는 가슴이 찢어질 것 같았다.
- 인증 결제 흐름 : [https://github.com/iamport/iamport-manual/blob/master/인증결제/background.md](https://github.com/iamport/iamport-manual/blob/master/%EC%9D%B8%EC%A6%9D%EA%B2%B0%EC%A0%9C/background.md)
- 포트원 결제 연동

1. 포트원 계정 생성
2. 결제 연동
   - 결제 연동 과정
     1. `결제연동-채널추가`
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fdbd9918-5257-4331-b015-8f6b32e7c1a5/b486d462-7a06-475b-b44f-b5f9968aee35/Untitled.png)
     1. 꼭 `테스트`선택
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fdbd9918-5257-4331-b015-8f6b32e7c1a5/1858f0d5-fc42-4af6-b5be-a9cef1c5b4a1/Untitled.png)
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fdbd9918-5257-4331-b015-8f6b32e7c1a5/49d81375-99cb-4504-9233-18e4c2589098/Untitled.png)
3. 가맹점 식별코드 확인
   - 확인 과정
     1. 상점관리 클릭
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fdbd9918-5257-4331-b015-8f6b32e7c1a5/716cae5c-bbde-46e0-943f-9d1919bfbd4b/Untitled.png)
     1. `내 식별코드 / API Keys` 누르기
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fdbd9918-5257-4331-b015-8f6b32e7c1a5/2e1f27b2-294b-4c84-a98c-d2fbf090bd5a/Untitled.png)
4. 프론트 코드 작성(v2는 테스트가 안되는것 같아서 v1으로 진행)

   - 코드

     - 포트원 라이브러리 추가(나는 index.html에 추가함)

     ```bash
     <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
     ```

     - 결제 요청 코드 추가
     - 은평쿤의 블로그 : [https://velog.io/@jep1995/포트원portone을-이용한-결제payment](https://velog.io/@jep1995/%ED%8F%AC%ED%8A%B8%EC%9B%90portone%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B2%B0%EC%A0%9Cpayment)
     - 공홈 : https://developers.portone.io/docs/ko/auth/guide/2?v=v1

       ```bash
       // 충전하기 버튼 클릭 핸들러
         const handleCharge = async () => {
           if (!window.IMP) return;
           const { IMP } = window;
           IMP.init("imp53764281");

           // 선택된 아이템 찾기
           const selectedItem = artCoinArr.find((item) => item.art === value);
           // 선택된 아이템의 money 값을 숫자로 변환
           const price = selectedItem
             ? parseInt(selectedItem.money.replace(/,/g, ""), 10)
             : 0;

           IMP.request_pay(
             {
               pg: "kakaopay.TC0ONETIME",
               pay_method: "card", // 생략가
               merchant_uid: `ORD${new Date().getUTCMilliseconds()}`, // 상점에서 생성한 고유 주문번호
               name: "Artchain 아트 구매",
               amount: price,
               buyer_email: "4pjttest@gmail.com",
               buyer_name: "구매자이름",
               m_redirect_url: "http://j10a708.p.ssafy.io:3000/charge",
             },
             async function (rsp) {
               // callback
               if (rsp.success) {
                 // 결제 성공시
                 // 1. 컨트랙트 실행해야함
                 // 2. axios 날려서 db에 저장해야함
                 alert("결제 완료!");
                 window.location.reload();
                 console.log(rsp);

                 if (rsp.status == 200) {
                   // DB저장 성공시
                   alert("결제 완료!");
                   window.location.reload();
                 } else {
                   // 결제완료 후 DB저장 실패시
                   alert(
                     `error:[${rsp.status}]\n결제요청이 승인된 경우 관리자에게 문의바랍니다.`
                   );
                   // DB저장 실패시 status에 따라 추가적인 작업 가능성
                 }
               } else if (rsp.success == false) {
                 // 결제 실패시
                 alert(rsp.error_msg);
               }
             }
           );
       ```

- `mInfo:1 Failed to launch 'intent://kakaopay/pg?url=' because the scheme does not have a registered handler.` 에러 해결
  - 에러 원인
    - 개발자 모드에서 모바일 화면을 봤는데, 카카오페이는 그 화면이 지원이 안된다고 한다.
    - https://devtalk.kakao.com/t/failed-to-launch-intent/112796
  - 해결 방법
    - 창 자체를 줄이거나, 폰으로 보면 됨

### 내일 할 것

- 컨트랙트로 요청 보내기
- 백으로 axios 보내기
- 관리자 페이지 생성

## 20240326

### 오늘 한 것

- IAM Identity Center에서 SSO 로그인 실행
- S3 버킷 생성
- S3 업로드 Service Class 제작
- 포트폴리오 취업특강

### 어려웠던 점

- IAM Identity Center 에서 만든 계정으로 S3에 Access Key와 Secret Access Key를 넣으면 없다고 오류가 남
  - 그래서 새로운 IAM 계정 만들어서 하니까 성공
- IAM Identity Center란
  - AWS SSO(Single Sign-On)의 후속 서비스로 한 번의 로그인으로 통합 서비스 이용 가능
  - 계정을 만들어서 로그인 → 안전한 루트 계정이라고 생각하면 됨
    - 이 밑에 그룹, IAM 계정 만들어서 로그인
  - https://okms1017.tistory.com/10
- IAM Identity Center 생성
  - https://btcd.tistory.com/1739
  - 주의
    - 리전 먼저 선택하고 생성해야함!! 안그러면 다시 삭제하고 재생성 해야함

### 내일 할 것

- 포트원 연결

## 20240325

### 오늘 한 것

- CORS 해결
- 무중단 배포 성공!!!!

### 어려웠던 점

- 설정한 파일들이 Dockerfile, docker-compose, jenkins pipeline script 이렇게 세개가 있다보니 뭘 건드려야 하는지 헷갈렸다. 머리에서 꼬여서 손으로 적으면서 생각 정리를 했음
- Pipeline Script의 `Groovy`와 그 안의 `sh` 문법이 초면이라 문법에서 오류가 나면 힘들었다.
- Script에서 전역변수 설정
- Nginx가 restart되면 내려가서 reload를 해야했는데, `nginx.service is not active, cannot reload`에러 발생
- 돌아가는 container의 image를 지우면 안된다.
- 한 개의 image로 여러 container을 돌릴 수 있다.
- 무중단 배포 순서
  1. 이미지 build하고 dockerhub에 push
  2. Blue/Green Port 확인 후 Port와 컨테이너명 변경
  3. `docker image pull`받고 위에서 새롭게 지정한 port로 `docker run`
  4. Nginx 포트 변경 후 reload
  5. 연결 체크 후 옛날 컨테이너 삭제
- `Groovy`에서 `'''`는 읽기 전용, 전역 변수를 사용하려면 `"""`를 사용해야함
- 도커 컨테이너 내의 nginx를 Jenkins Script로 reload하려면 `docker exec nginx nginx -s reload`이렇게 하면 됨

### 내일 할 것

- S3 버킷 생성, 소프티어 코테

## 20240322

### 오늘 한 것

- develop-fe 브랜치 자동 배포 설정
- Slack에 pipeline 결과 Webhook 걸기
- 웹소켓 연결 오류 해결
- 무중단 배포 도전

### 어려웠던 점

- 자꾸 `[ERROR] WebSocket connection to ‘wss~’ `라는 에러가 뜨는데 이걸 못보고 그 밑의 hmr을 수정하라는 오류를 보고 그걸 고치느라 오래 걸림. hmr 설정을 하면 무한 새로고침이 됐다.
- 무중단 배포 자체
- Nginx 웹소켓 연결
  - https://blog.naver.com/hsmang/221837039250
  - `nginx default.conf`에서 아래의 내용을 추가함
  ```bash
    #Websocket Setting
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  ```
  - HTTP에서 WebSocket으로 연결을 업그레이드 할 때 업그레이드 및 연결 헤더를 사용함.
  - Nginx는 클라이언트의 Upgrade 요청을 Upgrade하고 Connection 헤더를 Upgrade로 명시적으로 설정하는 것임
  - https://nginxstore.com/blog/nginx/websocket-proxy-%EB%A1%9C-nginx-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/
- 자동배포를 따로 하는 게 아니라 수동 배포에서 GitLab으로 Webhook만 걸면 되는 거였음

### 내일 할 것

- 무중단 배포 성공

## 20240321

### 오늘 한 것

- 어제 에러 해결
- 프론트엔드 수동 배포 완료

### 어려웠던 점

- ## Pipeline script를 작성하는 부분에서 docker hub에 push하기와 service health check에서 계속 에러가 났었다.
- vite 프로젝트용 Dockerfile을 작성했는데, 배포와 build는 잘 되는게 구현이 안됐다.

  - 이유
    - vite는 127.0.0.1:5173 환경으로 디폴트로 세팅하기 때문
  - 해결 방법
    - host를 0.0.0.0으로 설정
  - 최종 `vite.config.ts` 파일

    ```bash
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      server: {
        port: 3000,
        host: "0.0.0.0",
      },
    });

    ```

- 어제 났던 `[ERROR] module not found: error: you attempted to import /app/node_modules/react-refresh/runtime.js which falls outside of the project src/ directory. relative imports outside of src/ are not supported.` 에러 해결

  - 에러 발생 이유 : 위에서 성공한 방법은 `npm dedupe` 를 밑처럼 두개 버전에 같아졌기 때문임. 근데 `.dockerignore` 를 올리면 `node_modules` 가 제외되고 새롭게 npm install을 하는데, 이때는 수정하기 전 버전으로 버전이 다르게 나와서 에러가 뜨는 것임

    ```
    ├─┬ @storybook/preset-create-react-app@4.1.2
    │ └─┬ @pmmmwh/react-refresh-webpack-plugin@0.5.7
    │   └── react-refresh@0.11.0 deduped
    ├─┬ @storybook/react@6.5.7
    │ └── react-refresh@0.11.0
    └─┬ react-scripts@5.0.1
      └── react-refresh@0.11.0 deduped

    ```

- https://github.com/storybookjs/storybook/issues/17049 여기 필수 참고
- **처음에 성공을 한 방법**

  1. Ran `npm ls react-refresh` and it shows a different of `react-refresh` package versions

  ```
  ├─┬ @storybook/preset-create-react-app@4.1.2
  │ └─┬ @pmmmwh/react-refresh-webpack-plugin@0.5.7
  │   └── react-refresh@0.14.0
  ├─┬ @storybook/react@6.5.7
  │ └── react-refresh@0.11.0
  └─┬ react-scripts@5.0.1

  ```

  2. `cd node_modules/react-scripts` and ran `npm dedupe` to de-duplicate multiple versions
  3. https://github.com/facebook/create-react-app/issues/11810
  4. Ran `npm ls react-refresh` to check existing versions for `react-refresh`

  ```
  ├─┬ @storybook/preset-create-react-app@4.1.2
  │ └─┬ @pmmmwh/react-refresh-webpack-plugin@0.5.7
  │   └── react-refresh@0.11.0 deduped
  ├─┬ @storybook/react@6.5.7
  │ └── react-refresh@0.11.0
  └─┬ react-scripts@5.0.1
    └── react-refresh@0.11.0 deduped

  ```

  5. `npm start` compiles & runs successfully

- 그리고 `.dockerignore` 을 만드니까 다시 같은 에러 발생

  - 에러 발생 이유 : 위에서 성공한 방법은 `npm dedupe` 를 밑처럼 두개 버전에 같아졌기 때문임. 근데 `.dockerignore` 를 올리면 `node_modules` 가 제외되고 새롭게 npm install을 하는데, 이때는 수정하기 전 버전으로 버전이 다르게 나와서 에러가 뜨는 것임

    ```
    ├─┬ @storybook/preset-create-react-app@4.1.2
    │ └─┬ @pmmmwh/react-refresh-webpack-plugin@0.5.7
    │   └── react-refresh@0.11.0 deduped
    ├─┬ @storybook/react@6.5.7
    │ └── react-refresh@0.11.0
    └─┬ react-scripts@5.0.1
      └── react-refresh@0.11.0 deduped

    ```

- **해결 방법**(https://github.com/facebook/create-react-app/issues/11810 필수 참고)
  - 여기서 `package.json` 에 버전을 아예 `0.11.0` 으로 만들어버리는 코드를 넣으면 된다고 함
    ```bash
    "overrides": {
      "react-refresh": "0.11.0"
    }
    ```
- 근데 지금까지 했던 게 전부 react 프로젝트 설정값이어서 우리는 vite로 프로젝트 만들어서 다시 함
- 이 Dockerfile로 변경

```bash
FROM node:21-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
```

- `docker buildx build`
  - `buildx` 는 여러 플랫폼 용으로 빌드할 수 있는 기능같은 여러 기능을 포함한 CLI 확장 플러그인이다.
  - `docker buildx build` 는 그래서 buildx로 build를 할 때 쓰는 커맨드이다. 그리고 이걸 할 때는 `Moby/BuildKit` 를 자동으로 사용함
    - 도커 컨테이너에 자동으로 이미지가 있는 것을 확인
  - https://80000coding.oopy.io/54dc871d-30c9-46cb-b609-2e8831541b5e

### 내일 할 것

- docker-compose.yml 작성
- 무중단 배포

## 20240320

### 오늘 한 것

- Jenkins 초기화 성공
- Docker hub repo 생성
- Dockerfile 작성

### 어려웠던 점

- Dockerfile을 작성하고 돌릴 때 `npm start`을 하면 `npm ERR! Missing script: "start"`이 떴고, 그 이후에는 `sh: react-scripts: not found`이 뜨고 처리한 다음에 컨테이너를 돌리니까 밑의 에러가 계속 뜸
  ```
  module not found: error: you attempted to import /app/node_modules/react-refresh/runtime.js which falls outside of the project src/ directory. relative imports outside of src/ are not supported. you can either move it inside src/, or add a symlink to it from project's node_modules/.
  ```
- 한번 성공했는데 `.dockerignore`생성 후 다시 에러 발생
- 위에서 마지막 에러를 제외하고 오류가 났던 이유는, create-react-app으로 프로젝트를 만들면 필요한 react-scripts가 없어서 연결이 안됐음.

1. `npm ERR! Missing script: "start"` 에러 발생

   1. `package.json` 에 start script가 없어서 그런거임

      1. 추가해줌

      ```bash
        "scripts": {
          "start": "react-scripts start",
          "dev": "vite",
          "build": "tsc && vite build",
          "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
          "preview": "vite preview"
        },
      ```

      2. 그리고 `node_modules`랑 `package-lock.json` 삭제 후 `npm install` , `npm install react-scripts` 함

2. `sh: react-scripts: not found`
   1. 찾아보니 타입스크립트 버전 5.x이상이면 뜨는 듯
   2. 그래서 `"typescript": "^4.9.5",` 로 변경 후 `npm install react-scripts` 하고 다시 이미지 생성 후 컨테이너 돌림
   3. https://github.com/remix-run/react-router/issues/10233
3. 이번에는 `index.html`이 `public` 폴더에 없다고 뜨고 `index.js`가 `src` 폴더에 없다고 뜸
   1. `index.html`은 복사해서 넣어주고 `index.js`는 `main.tsx를 index.tsx`로 이름 바꿔서 돌리니까 됨

### 내일 할 것

- 에러 해결
- 프론트엔드 배포

## 20240319

### 오늘 한 것

- Jenkins 설치 후 오류났던 nginx 해결
- Jenkins 재설치
  - Plugin 설치, Credintial 추가, GitLab Webhook 걸기

### 어려웠던 점

- Jenkins 컨테이너 내리고 재실행해도 화면은 뜨는데 자꾸 403이 떴다. 그리고 컨테이너와 이미지를 내리고 돌려도 초기화가 되지 않음
- Nginx-Jenkins 연결
  1. 처음에는 잘 몰라서 EC2내의 nginx의 기본 링크를 젠킨스페이지(8081포트)로 연결시키고, Docker내의 nginx에서는 기본 링크를 3000포트로 연결시켜서 충돌이 났던 것임.
     1. EC2내의 nginx설정을 지우고, nginx 기본 링크를 젠킨스 페이지로 연결하니 무한로딩되던 페이지가 빠르게 에러페이지 나오는 걸로 발전함
  2. 에러페이지는 `no resolver defined to resolve` 가 났음
     1. 찾아보니 `proxy_pass` 를 변수로 받으면 nginx의 기본 built-in resolver로 연결을 하는데, 여기서 문제가 생긴 것임.
     2. `resolver 1.1.1.1;` 를 추가하니 해결
     3. https://stackoverflow.com/questions/57937222/502-bad-gateway-nginx-no-resolver-defined-to-resolve
- Jenkins 로그인 없이 대시보드 들어가기
  1. `config.xml`에 들어간다
  ```bash
  docker exec -it jenkins /bin/bash
  ```
  ```bash
  vim /var/jenkins_home/config.xml
  ```
  2. ***<useSecurity> true </useSecurity>를*  *<useSecurity> false </useSecurity>로* 변경**
  3. 그리고 재시작

### 내일 할 것

- Jenkins 초기화
- FE pipeline 연결하기

## 20240318

### 오늘 한 것

- nginx reverse proxy 설정 완료
- Jenkins-GitLab 연동

### 어려웠던 점

- 분명히 리버스 프록시 설정할 때까지만 해도 엔진엑스가 멀쩡하게 돌아갔는데, 젠킨스를 연결한 후로 연결자체가 안된다

```bash
 location / {
        proxy_pass http://j10a708.p.ssafy.io:3000;
        root   /usr/share/nginx/html;
        proxy_redirect off;
        #index  index.html index.htm;
        charset utf-8;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

  }
```

에서 `proxy_pass http://j10a708.p.ssafy.io:8081;`(젠킨스 경로)로 바꾸니까 연결은 잘됨; 아무튼 내일 더 해봐야겠음

- 리버스 프록시를 설정하면서 nginx의 역할에 대해 더 자세히 알게 됐다.
- `vim /etc/nginx/conf.d/default.conf` 설정

  ```bash
  	location / {
  		# docker inspect haryeom-fe <check gateway>
  		# proxy_pass http://172.17.0.1:3000;
  		proxy_pass http://도메인:3000;
  		# root
  		/usr/share/nginx/html;
  		# index index.html index.htm;
  		proxy_redirect off;
  		charset utf-8;

  		proxy_set_header Host $host;
  		proxy_set_header X-Real-IP $remote_addr;
  		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  		proxy_set_header X-Forwarded-Proto scheme;
  	}
  ```

  - `proxy_set_header Host $host;`
    - https://nginx.org/en/docs/http/ngx_http_proxy_module.html?&_ga=2.100551192.744080884.1710735769-341819009.1710465492#proxy_set_header
    - 헤더에 요청 들어온 Host값으로 설정해줌
  - `proxy_redirect off;`
    - 백엔드 서버에 의해 촉발된 리다이렉션에 대해 로케이션 HTTP 헤더에 나타나는 URL을 재작성합니다.
    - https://12bme.tistory.com/367
  - `proxy_set_header X-Forwarded-For`
    - 프록시나 로드 밸런서를 통해 들어온 요청에서 클라이언트의 원 IP주소를 확인하기 위해 사용하는 헤더값
    - nginx에서 X-Forwarded-For 헤더값을 설정해서 Client IP를 확인할 수 있음
  - `proxy_set_header X-Real-IP`
    - 애플리케이션에서 Client IP를 확인하기 위해 사용하는 헤더값
    - X-Forwarded-For과 다르게 헤더값을 변조할 수 없음
    - https://sg-choi.tistory.com/540
  - `proxy_set_header X-Forwarded-Proto`
    - **X-Forwarded-Proto(XFP)**
      - 클라이언트가 프록시 또는 로드 밸런서에 접속하는데에 사용했던 프로토콜(HTTP/HTTPS)이 무엇인지 확인하는 사실상의 표준 헤더
      - AWS로 Elastic Load Balancer(ELB)로 Instance 인프라를 구성 할 경우, 클라이언트와 로드밸런서 간의 사용된 프로토콜을 확인하기 위해서 Apache/Nginx 에서 X-Forwarded-Proto으로 리디렉션(Redirection)를 설정해줘야 한다.
      - https://linked2ev.github.io/devlog/2019/07/21/WEB-What-is-X-Forwarded-Proto/

### 내일 할 것

- nginx 살리기
- 이후 나머지 젠킨스 작업

## 20240315

- 발표 경청

## 20240314

- docker compose 설치
- nginx 설치
- FreeSSL로 ssl받아서 https 연결 성공

## 20240313

- 피그마 제작 완료

## 20240312

- 피그마 제작 중(70%)

## 20240311

- 피그마 제작 중

## 20240308

- 와이어프레임 완성
- 테마색 지정

## 20240307

- 서비스명 확정(아트체인)
- 유즈다이어그램 작성완료
- 와이어프레임 제작(70% 완성)

## 20240306

- 전문가 아이디어 상담
  - 많은 도움이 되었다
- 화면 정의서 작성(20% 완성)
- 유스케이스 다이어그램(60% 완성)

## 20240305

- 기능 명세서 작성
- 디자인 컨셉 회의

## 20240304

- 화면 설계 회의
- 화면 설계 작성
