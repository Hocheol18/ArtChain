# Wrap up

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

### 새로 알게 된 점

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
