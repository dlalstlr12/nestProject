const socket = io('http://localhost:3000/chat');
const roomSocket = io('http://localhost:3000/room');
const nickname = prompt('닉네임을 입력해 주세요.');
let currentRoom = '';

socket.on('connect', () => {
  console.log('connected');
});

function sendMessage() {
  const message = $('#message').val();
  $('#chat').append(`<div>나 : ${message}</div>`);
  socket.emit('message', { message, nickname });
}

socket.on('message', (message) => {
  $('#chat').append(`<div>${message}</div>`);
});
socket.on('notice', (data) => {
  console.log(data);
  $('#notice').append(`<div>${data.message}</div>`);
});

function createRoom() {
  const room = prompt('생성하실 방의 이름을 입력해주세요.');
  roomSocket.emit('createRoom', { room, nickname });
  return false;
}
roomSocket.on('rooms', (data) => {
  console.log(data);
  $('#rooms').empty();
  data.forEach((room) => {
    $('#rooms').append(
      `<li>${room} <button onclick="joinRoom('${room}')">join</button></li>`,
    );
  });
});
function joinRoom(room) {
  roomSocket.emit('joinRoom', { room, nickname, toLeaveRoom: currentRoom });
  currentRoom = room;
  return false;
}
