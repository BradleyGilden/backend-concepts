const socket = io('http://localhost:5500'); // rout '/' name space
const adminSocket = io('http://localhost:5500/admin') // admin name space

socket.on('connect', () => {
  console.log('socket', socket?.id,'is connected from the root namespace');

  socket.emit('messageFromClient', { data: 'hello from the client in root namespace'});
});

socket.on('messageFromServer', (message) => {
  console.log(message?.data)
});

adminSocket.on('connect', () => {
  console.log('socket', socket?.id, 'is connected from the admin namespace');

  socket.emit('messageFromClient', { data: 'hello from the client in admin namespace'});
});

adminSocket.on('messageFromServer', (message) => {
  console.log(message?.data)
});
