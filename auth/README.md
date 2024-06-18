## OAuth 회원가입 모듈

### 이 모듈은 Nest.js를 사용하여 OAuth를 통한 회원가입 기능을 구현합니다. 다양한 OAuth 제공자(Google, Facebook 등)를 통해 사용자가 쉽게 회원가입할 수 있도록 설계되었습니다.

## 주요 기능
- OAuth 인증 : Google의 OAuth 제공자를 통한 인증
- 사용자 정보 저장 : 인증 후 사용자 정보를 데이터베이스에 저장
- JWT 발급 : 인증이 완료되면 JWT를 발급하여 사용자를 인증된 상태로 유지

## 기술 스택
- Backend : Nest.js, Passport.js, TypeORM
- database : MySQL

## 환경 변수 설정
.env 파일을 생성하고 환경 변수를 설정해 줍니다.

GOOGLE_CLIENT_ID={자신의 구글 클라이언트 ID}

GOOGLE_CLIENT_SECRET={자신의 구글 클라이언트SECRET}

## 개발 환경
     cd auth
     
     npm install
     
     npm run start
* * *

