## 실시간 채팅 웹 소켓 모듈

### 이 모듈은 Nest.js와 Socket.IO를 사용하여 실시간 채팅 기능을 구현합니다. 사용자들이 실시간으로 메시지를 주고받을 수 있는 채팅방을 제공하며, 효율적이고 반응성 높은 웹 애플리케이션을 구축하는 데 중점을 두고 있습니다.

### 각 기능마다 토글 클릭 시 테스트 화면이 나타납니다.

## 주요 기능
<details>
  <summary>메인화면</summary>
  <img src="https://github.com/dlalstlr12/nestProject/assets/101045853/88644b03-a7a4-4ceb-84b1-ba6271c66df4">   
</details>

  - 채팅방 목록이 보여지며 join 버튼을 통해 방 입장이 가능합니다.
  - 메시지를 입력하여 전송버튼을 누르면 채팅 밑에 메시지가 표시됩니다.
  - 방 생성, 방 입장 시 공지로 표시됩니다.

<details>
  <summary>접속 시 닉네임 입력 화면</summary>
  <img src="https://github.com/dlalstlr12/nestProject/assets/101045853/e1d5f1c2-b493-4b2b-b8de-dd5e31500128">   

</details>

- 최초 접속 시 닉네임 입력 팝업이 나타납니다.

<details>
  <summary>방 생성 화면</summary>
  <img src="https://github.com/dlalstlr12/nestProject/assets/101045853/8cc93f92-7d97-467a-ba6c-c2940cc2c9e9">   

</details>

- 방 생성하기 버튼 클릭 시 방 생성 메시지가 표시됩니다.

<details>
  <summary>방 입장 후 채팅 화면</summary>
  <img src="https://github.com/dlalstlr12/nestProject/assets/101045853/e363df51-33f5-4527-8938-0118deb22b73">   

</details>

- 방 입장 후 채팅을 입력하면 채팅이 표시됩니다.



## 기술 스택
- Backend : Nest.js, Socket.IO
- Frontend : 기본 HTML 인터페이스 ( 필요시 추가 확장 가능 )
- Database : MongoDB 또는 선택 가능한 데이터베이스

## 개발 환경
    cd chat-websocket

    npm install

    npm run start
