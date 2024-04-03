# 포팅 매뉴얼

# 1. 버전 정리

---

| name             | version     |
| ---------------- | ----------- |
| Ubuntu           | 20.04.6 LTS |
| Docker           | 25.0.4      |
| Docker Compose   | 1.29.2      |
|                  |             |
| JVM              | 17          |
| Spring Boot      | 3.2.3       |
| Spring Security  | 6.2.2       |
| Spring Cloud aws | 2.2.6       |
| JPA              | 3.2.3       |
| MariaDB          | 11.3.2      |
| Solidity         | 0.8.20      |
| OpenZeppelin     | 5.0.2       |
| Web3             | 4.6.0       |
| Hardhat          | 2.21.0      |
| hardhat-waffle   | 2.0.6       |
|                  |             |
| NodeJS           | 21.7.1      |
| npm              | 10.2        |
| Vite             | 5.1.6       |
| React.js         | 18.2.0      |
| Typescript       | 5.2.2       |
| ChakraUI         | 2.8.2       |
| Zustand          | 4.5.2       |

# 2. 배포 포트

---

## Proxy

- **Proxy Server**
  - `80:80`
- **Proxy Server(SSL)**
  - `443:443`

## Backend

- **백엔드 서버**
  - Spring Boot Application : `8000:8000`

## Frontend

- **프론트엔드 서버**
  - Blue : `3000:3000`
  - Green : `3001:3000`

## Server

- **Jenkins**
  - `8081:8080`
- **MariaDB**
  - `3306:3306`

## 방화벽 정보

- `sudo ufw status` 를 통해 나오는 정보

```bash
To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere
8989                       ALLOW       Anywhere
443                        ALLOW       Anywhere
80                         ALLOW       Anywhere
3306                       ALLOW       Anywhere
8081                       ALLOW       Anywhere
3000                       ALLOW       Anywhere
8080                       ALLOW       Anywhere
8082                       ALLOW       Anywhere
3001                       ALLOW       Anywhere
22 (v6)                    ALLOW       Anywhere (v6)
8989 (v6)                  ALLOW       Anywhere (v6)
443 (v6)                   ALLOW       Anywhere (v6)
80 (v6)                    ALLOW       Anywhere (v6)
3306 (v6)                  ALLOW       Anywhere (v6)
8081 (v6)                  ALLOW       Anywhere (v6)
3000 (v6)                  ALLOW       Anywhere (v6)
8080 (v6)                  ALLOW       Anywhere (v6)
8082 (v6)                  ALLOW       Anywhere (v6)
3001 (v6)                  ALLOW       Anywhere (v6)
```

# 3. 배포 환경 구축 (CI / CD)

---

<aside>
💡 Jenkins를 통해 배포환경 자동화를 구현하였으며, develop-be, develop-fe 브랜치에 머지가 되면 웹훅을 받아 배포된다.

</aside>

## 1. Docker 설치

### Docker 설치 전 필요한 패키지 설치

```bash
sudo apt-get -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### Docker Repository 등록

```bash
// AMD64 계열
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
// ARM64
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

### 패키지 리스트 갱신 후 Docker 패키지 설치

```bash
sudo apt-get -y update
sudo apt-get -y install docker-ce docker-ce-cli containerd.io
```

### Docker 일반 유저에게 권한 부여 후 서비스 재시작

```bash
sudo usermod -aG docker ubuntu
sudo service docker restart
exit
```

### Docker Compose 설치 및 권한 변경

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

## Docker-compose.yml

- root 디렉터리에 위치시킨다.

```yaml
version: "3.9"

services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    restart: always
    volumes:
      - ./data/nginx/pki-validation:/usr/share/nginx/html/.well-known/pki-validation
      - ./data/nginx/ssl:/etc/ssl/j10a708.p.ssafy.io
      - ./data/nginx/conf.d:/etc/nginx/conf.d
    container_name: nginx
```

## 2. NginX 실행

- `/home/ubuntu/data/nginx/conf.d/` 폴더 생성

### default.conf

```bash
server {
    listen       80;
    listen  [::]:80;
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name  j10a708.p.ssafy.io;

    # SSL setting
    ssl_certificate /etc/ssl/j10a708.p.ssafy.io/certificate.crt;
    ssl_certificate_key /etc/ssl/j10a708.p.ssafy.io/private.key;

    # redirect HTTP request to HTTPS request
    if ($scheme = http) {
        return 301 https://$server_name$request_uri;
    }

    access_log  /var/log/nginx/access.log  main;
    error_log /var/log/nginx/error.log;

    location /.well-known/pki-validation/ {
        alias /usr/share/nginx/html/.well-known/pki-validation/;
    }

    include /etc/nginx/conf.d/service-url.inc;

    # file upload
    client_max_body_size 10M;

    location /jenkins {
        proxy_pass http://j10a708.p.ssafy.io:8081;
        proxy_redirect off;
        charset utf-8;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

	#Websocket Setting
	proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

    }

    location / {
        resolver 1.1.1.1;
        proxy_pass $service_url;
        proxy_redirect off;
        charset utf-8;

	#Websocket Setting
	proxy_http_version 1.1;
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection "upgrade";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

    }

    location /api {

        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, DELETE, PATCH, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
            add_header 'Access-Control-Allow-Credentials' 'true';
            return 204;

        }
        proxy_pass http://j10a708.p.ssafy.io:8080;
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Origin' 'http://localhost:3000' always;
        proxy_redirect off;
        charset utf-8;

	proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
	proxy_set_header Origin "";
    }

	location /api/sse {
		proxy_pass http://j10a708.p.ssafy.io:8080;
                proxy_set_header Connection '';
		proxy_http_version 1.1;
                proxy_set_header Cache-Control 'no-cache';
                proxy_set_header X-Accel-Buffering 'no';
                proxy_set_header Content-Type 'text/event-stream';
                proxy_buffering off;
                chunked_transfer_encoding on;
                proxy_read_timeout 86400s;
	}

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

### service-url.inc

- Blue/Green 포트에 맞게 변할 예정

```bash
set $service_url http://j10a708.p.ssafy.io:3000;
```

### NginX 실행

```bash
docker-compose up -d
```

## 3. Jenkins 실행

### Jenkins image pull & container 실행

```jsx
docker pull jenkins/jenkins:jdk17
```

```jsx
docker run -d --env JENKINS_OPTS=--httpPort=8080 -v /etc/localtime:/etc/localtime:ro -e TZ=Asia/Seoul -p 8081:8080 -v /jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose --name jenkins -u root jenkins/jenkins:jdk17
```

### Docker Repository 등록 및 Docker-ce 패키지 설치

```jsx
docker exec -it jenkins /bin/bash
```

```jsx
apt-get update && apt-get -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common && curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") $(lsb_release -cs) stable" && apt-get update && apt-get -y install docker-ce
```

### Docker Jenkins에서 Host Docker 접근권한 부여

```bash
docker exec -it jenkins /bin/bash
```

```bash
groupadd -f docker
```

```bash
usermod -aG docker jenkins
```

### Docker Compose 다운로드

```bash
docker exec -it jenkins /bin/bash
```

```bash
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### /usr/local/bin/docker-compose 권한 변경

```jsx
chmod + x / usr / local / bin / docker - compose;
```

# 4. 파일 빌드 및 배포 방법

---

## 프론트엔드

### Dockerfile

```docker
FROM node:21-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY .env .
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
```

### Jenkins Pipeline

```bash
def releasePort
def containerName

pipeline{
    agent any

    environment {
        imageName = "kummii/artchain-frontend" // docker hub의 이미지 이름
        registryCredential = 'docker-kummii' // docker hub access token
        dockerImage = ''

        releaseServerAccount = 'ubuntu' // ssh 연결 시 사용할 user
        releaseServerUri = 'j10a708.p.ssafy.io' // 서비스 url
        containerPort = '3000' // 컨테이너 포트
        bluePort = '3000' // blue포트
        greenPort = '3001' // green포트
    }

    stages {
        stage('Git Clone') {
            steps {
                git branch: 'develop-fe',
                    credentialsId: 'seungwoojenkins',
                    url: 'https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22A708.git'
            }
        }

        stage('Image Build & DockerHub Push') {
            steps {
                // '/frontend' 디렉토리로 이동
                dir('frontend') {
                    script {

                        sh '''
                        touch .env
                        echo 'VITE_ART_COIN_CONTRACT_ADDRESS=0xE5856017Db7b4023383c867Ea65bc178B7F023C1' > .env
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

        stage('Blue/Green Port Check') { // 서비스 중단 전 기존 컨테이너 및 이미지 삭제
            steps {
                script {
                    // curl 명령어의 결과를 확인하여 포트 번호를 결정합니다.
                    def isBlueUp = sh(script: "curl -s --fail http://${releaseServerUri}:${bluePort}", returnStatus: true) == 0
                    if (isBlueUp) {
                        releasePort = greenPort
                        containerName = 'artchain_frontend_g'
                    } else {
                        releasePort = bluePort
                        containerName = 'artchain_frontend_b'
                    }
                    echo "isBlueUp : $isBlueUp, Port selected: $releasePort, container name: $containerName"
                }
            }
        }

        stage('DockerHub Pull') { // docker hub에서 프론트엔드 이미지 pull
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    sh "ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri 'sudo docker pull $imageName:latest'"
                }
            }
        }

        stage('Service Start') { // pull된 이미지 이용하여 docker 컨테이너 실행
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    sh """
                    echo "port : ${releasePort}, container : ${containerName}"
                        ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri "sudo docker run -i -e TZ=Asia/Seoul --name ${containerName} -p ${releasePort}:${containerPort} -d ${imageName}:latest"
                    """
                }
            }
        }

        stage('Switch Nginx Port & docker-compose up') { //NginX Port 변경
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no root@$releaseServerUri "echo 'set \\\$service_url http://${releaseServerUri}:${releasePort};' > /home/ubuntu/data/nginx/conf.d/service-url.inc && docker exec nginx nginx -s reload"
                    echo "Switch the reverse proxy direction of nginx to ${releasePort} 🔄"
                    """
                }
            }
        }


        stage('Service Check & Kill the Old Container') { // 연결 체크 & 예전 컨테이너 삭제
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    script {
                        def retry_count = 0
                        for (retry_count = 0; retry_count < 20; retry_count++) {
                            def isRunning = sh(script: "curl -s --fail http://${releaseServerUri}:${releasePort}/", returnStatus: true) == 0
                            if (isRunning) {
                                if(releasePort==bluePort){
                                    sh "ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri 'docker rm artchain_frontend_g -f'"
                                }else{
                                    sh "ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri 'docker rm artchain_frontend_b -f'"
                                }
                                echo "Killed the process on the opposite server."
                                sh "ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri 'docker image prune -f'"
                                break
                            } else {
                                if (retry_count == 19) {
                                    error("The server is not alive after 20 attempts. Exiting...")
                                }
                                echo "The server is not alive yet. Retry health check in 5 seconds..."
                                sleep 5
                            }
                        }
                    }
                }
            }
        }





    }

    post {
        success {
            slackSend (
                channel: '#jenkins-webhook',
                color: '#00FF00',
                message: "✅SUCCESSFUL\n📌Job : '${JOB_NAME} [${BUILD_NUMBER}]'\n🔗URL : ${BUILD_URL}" /// 성공 메시지
            )
        }
        failure {
            slackSend (
                channel: '#jenkins-webhook',           // 예: '#deploy-notifications'
                color: '#FF0000',                        // 실패 메시지 색상: 빨간색
                message: "❌FAILED\n📌Job : '${JOB_NAME} [${BUILD_NUMBER}]'\n🔗URL : ${BUILD_URL}" // 실패 메시지
            )
        }
    }
}

```

## 백엔드

### application.yml

```yaml
spring:
  datasource:
    url: jdbc:mariadb://j10a708.p.ssafy.io:3306/artchain?serverTimezone=UTC&characterEncoding=UTF-8
    driver-class-name: org.mariadb.jdbc.Driver
    username: root
    password: { your-password }

  security:
    oauth2:
      client:
        registration:
          kakao:
            client-id: { your-secret-id } # 앱키 -> REST API 키
            client-secret: { your-secret-key } # 카카오 로그인 -> 보안 -> Client Secret 코드
            authorization-grant-type: authorization_code
            redirect-uri: "http://localhost:8080/login/oauth2/code/kakao" # yml 파일에서 {} 가 spring 특수문자로 인식되게 하기 위해 " " 사용
            client-authentication-method: client_secret_post
            client-name: kakao
            provider: kakao
            scope:
              - profile_nickname
        provider:
          kakao:
            authorization-uri: https://kauth.kakao.com/oauth/authorize # "인가 코드 받기" 항목
            token-uri: https://kauth.kakao.com/oauth/token # "토큰 받기" 항목
            user-info-uri: https://kapi.kakao.com/v2/user/me # "사용자 정보 가져오기" 항목
            user-name-attribute: id # 식별자 . 카카오의 경우 "id" 사용

  jpa:
    hibernate:
      #      create하면 DB계속 날라가니까 DB미리 세팅해두고 validate로 맞는지만 체크
      ddl-auto: validate
    properties:
      hibernate:
        auto_quote_keyword: true
        format_sql: true
        show_sql: true
    #        mariaDB버전 확인하고 수정해야함
    # database-platform: org.hibernate.dialect.MariaDB113Dialect
  # jwt
  jwt:
    secret-key: { your-secret-key }
    expiration: 86400000
    refresh:
      expiration: 604800000

    # 커넥션 풀
    hikari:
      maximum-pool-size: 10
      connection-timeout: 5000
      connection-init-sql: SELECT 1
      validation-timeout: 2000
      minimum-idle: 10
      idle-timeout: 600000
      max-lifetime: 1800000

  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 30MB

# S3
cloud:
  aws:
    s3:
      bucket: artchain-bucket
    credentials:
      access-key: { your-access-key }
      secret-key: { your-secret-key }
    region:
      static: ap-northeast-2
    stack:
      auto: false

# Scheduler 설정
schedule:
  funding:
    progress-status:
      active: true
      #      cron: 0 0/1 * * * * # 매 1분마다 실행
      cron: 0 0 0 * * * # 매일 자정에 실행
    set-recruit-start:
      active: true
      #      cron: 0 0/1 * * * * # 매 1분마다 실행
      cron: 0 0 0 * * * # 매일 자정에 실행
```

### DockerFile

```bash
FROM docker
COPY --from=docker/buildx-bin:latest /buildx /usr/libexec/docker/cli-plugins/docker-buildx

FROM openjdk:17-jdk
ADD ./build/libs/artchain-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Jenkins pipeline

```bash
pipeline {
    agent any

    environment {
        imageName = "kummii/artchain-backend" // docker 허브에 등록할 jar파일 이미지 이름
        registryCredential = 'docker-kummii' // docker 허브 credential 키
        dockerImage = ''

        containerName = 'artchain_backend' // 서버에 등록될 container 이름

        releaseServerAccount = 'ubuntu' // ssh로 서버 접속 시 사용 할 사용자 이름
        releaseServerUri = 'https://j10a708.p.ssafy.io' // 서버 도메인
				releaseServerIPAddr = '172.26.14.211' // 서버 ip address
        releasePort = '8080' // container 포트포워딩 정보

    }

    stages {
        stage('Git Clone') { // 프로젝트를 git clone
            steps {
                git branch: 'develop-be',
                credentialsId: 'seungwoojenkins', // GitLab Access Token
                url: 'https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22A708.git' // clone 주소
            }
        }
				stage('application.yml copy') { // 따로 관리 중인 설정 파일을 프로젝트 내로 복사
					steps {
						sh "mkdir -p ./Backend/artchain/src/main/resources" // 경로가 없다면 생성
						sh "cp -f ../env/application.yml ./Backend/artchain/src/main/resources/application.yml"; // 설정파일 복사
					}
				}
        stage('Jar Build') { // 프로젝트 파일 빌드
            steps {
                dir ('Backend/artchain') {
                    sh 'chmod +x ./gradlew'
                    sh './gradlew clean bootJar'
                    // sh './gradlew build'
                }
            }
        }

        stage('Image Build & DockerHub Push') { // 빌드된 파일 도커 이미지화 & 도커허브로 업로드
            steps {
                dir('Backend/artchain') {
                    script {
                        docker.withRegistry('', registryCredential) {
                            sh "docker buildx create --use --name mybuilder"
                            sh "pwd"
                            sh "docker buildx build --platform linux/amd64,linux/arm64 -t $imageName:$BUILD_NUMBER --push ."
                            sh "docker buildx build --platform linux/amd64,linux/arm64 -t $imageName:latest --push ."
                        }
                    }
                }
            }
        }
stage('Before Service Stop') { // 서비스를 다시 컨테이너로 가져오기 전, 기존 컨테이너 삭제
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    sh '''
                    if test "`ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerIPAddr "docker ps -aq --filter ancestor=$imageName:latest"`"; then
                    ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerIPAddr "docker stop $(docker ps -aq --filter ancestor=$imageName:latest)"
                    ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerIPAddr "docker rm -f $(docker ps -aq --filter ancestor=$imageName:latest)"
                    ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerIPAddr "docker rmi $imageName:latest"
                    fi
                    '''
                }
            }
        }
        stage('DockerHub Pull') { // docker 이미지 가져옴
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    // sh "ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri 'sudo docker pull $imageName:latest'"
                    sh "ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerIPAddr 'sudo docker pull $imageName:latest'"
                }
            }
        }
        stage('Service Start') { // docker 컨테이너 만들고 실행
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    // sh '''
                    //     ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerUri "sudo docker run -i -e TZ=Asia/Seoul -e "SPRING_PROFILES_ACTIVE=prod" --name codespeed -p $releasePort:$releasePort -d $imageName:latest"
                    // '''
                     sh '''
                         ssh -o StrictHostKeyChecking=no $releaseServerAccount@$releaseServerIPAddr "sudo docker run -i -e TZ=Asia/Seoul -e "SPRING_PROFILES_ACTIVE=prod" --name $containerName -p $releasePort:8080 -d $imageName:latest"
                     '''
                }
            }
        }
        stage('Service Check') { // 연결 체크
            steps {
                sshagent(credentials: ['SSH-ubuntu']) {
                    sh '''
                        #!/bin/bash

                        for retry_count in \$(seq 20)
                        do
                          if curl -s "http://j10a708.p.ssafy.io:$releasePort" > /dev/null
                          then
                              curl -d '{"text":"Release Complete"}' -H "Content-Type: application/json" -X POST https://meeting.ssafy.com/hooks/6g1qumwh38y3jb17gyasfszcqh
                              break
                          fi

                          if [ $retry_count -eq 20 ]
                          then
                            curl -d '{"text":"Release Fail"}' -H "Content-Type: application/json" -X POST https://hooks.slack.com/services/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
                            exit 1
                          fi

                          echo "The server is not alive yet. Retry health check in 5 seconds..."
                          sleep 5
                        done
                    '''
                }
            }
        }
    }

    post {
        success {
            slackSend (
                channel: '#jenkins-webhook',
                color: '#00FF00',
                message: "✅SUCCESSFUL\n📌Job : '${env.JOB_NAME} [${env.BUILD_NUMBER}]'\n🔗URL : ${env.BUILD_URL}" /// 성공 메시지
            )
        }
        failure {
            slackSend (
                channel: '#jenkins-webhook',           // 예: '#deploy-notifications'
                color: '#FF0000',                        // 실패 메시지 색상: 빨간색
                message: "❌FAILED\n📌Job : '${env.JOB_NAME} [${env.BUILD_NUMBER}]'\n🔗URL : ${env.BUILD_URL}" // 실패 메시지
            )
        }
    }
}
```

# 5. 블록체인

## hardhat 환경 설정

```bash
//기본 환경 세팅 (Node.js)
npm init
//Hardhat 설치
npm install --save -dev hardhat
npm install --save -dev @nomicfoundation/hardhat-toolbox
```

### hardhat.config.ts

```tsx
require("@nomiclabs/hardhat-waffle");
import ArtcoinAbi from "./artifacts/contracts/ArtCoin.sol/ArtcoinContract.json"
import ReceiveArtcoinAbi from "./artifacts/contracts/ReceiveArtCoin.sol/ReceiveArtCoinContract.json"

task("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSigners();
  const ArtCoinContract = "0x39af03C99f8b82602d293737dE6A0eBF5d8f48dB"
  const ArtcoinABI = ArtcoinAbi.abi
  const ReceiveArtcoinABI = ReceiveArtcoinAbi.abi

  const fundraising = new ethers.Contract(ArtCoinContract, ArtcoinABI, deployer)
  const Artcoin = new ethers.Contract(ArtCoinContract, ArtcoinABI, deployer)

const privateKey =
  "your-private-key";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/{your-api}",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

```

> Alchemy Sepolia api key 생성 : [바로가기](https://www.alchemy.com/)

<aside>
💡 Sepolia는 ETH 및 ERC20 전송을 테스트해볼 수 있는 테스트넷이다.
ETH 메인넷을 사용하게 되면 비용이 커 Sepolia 테스트넷으로 정하게 되었다.

</aside>

### Deploy 예시

```bash
// /contracts/ArtCoin.sol
// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// 아트코인 민팅
contract ArtcoinContract is ERC20 {
    // 컨트랙트 생성 > 1개 만들고 이후에 1개 소각
    constructor() ERC20("ArtCoin", "ART") {
        _mint(msg.sender, 1 * 10**18);
    }

    // 토큰 민트
    function mintTokens(uint256 _Supply) public {
        _mint(msg.sender, _Supply * 10**18);
    }

    // 토큰 소각
    function burnTokens(uint256 burnAmount) public {
        _burn(msg.sender, burnAmount * 10 ** 18);
    }

    // 토큰 전송
    function transferToken(address to, uint256 amount) public {
        _transfer(msg.sender, to, amount * 10 ** 18);
    }
}

```

```tsx
// /scripts/deploy.ts

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ArtchainERC20Factory = await ethers.getContractFactory(
    "ArtcoinContract"
  );
  const contract = await ArtchainERC20Factory.deploy();

  console.log("NewContractAddress address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

터미널 실행

```bash
npx hardhat run .\scripts\deploy.ts --network sepolia
```

## 프로젝트 설정

### package.json

```json
{
  "devDependencies": {
    "@nomiclabs/hardhat-waffle": "^2.0.6",
    "hardhat": "^2.21.0",
    "ts-node": "^10.9.2"
  },
  "dependencies": {
    "@openzeppelin/contracts": "^5.0.2",
    "@types/node": "^20.11.26",
    "@types/react": "^18.2.65",
    "@types/react-dom": "^18.2.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.4.2",
    "web3": "^4.6.0"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```
