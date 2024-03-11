const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('socket', socket?.id,'is connected');

  socket.emit('messageFromClient', { data: 'hello from the client'});
});
// make sure  it's outside the 'connect', so it does not register extra listeners
// upon reconnect
socket.on('messageFromServer', (message) => {
  console.log(message?.data)
});

socket.on('Greetings', (message) => {
  console.log(message);
})
