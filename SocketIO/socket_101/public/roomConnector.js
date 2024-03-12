const socket = io('http://localhost:5500'); // rout '/' name space
const adminSocket = io('http://localhost:5500/admin') // admin name space

socket.on('connect', () => {
  socket.emit('messageFromClient', { data: 'hello from the client in root namespace'});
});

socket.on('messageFromServer', (message) => {
  console.log(message?.data)
});

socket.on('joinedRoom', (message) => {
  console.log(message);
})

// adminSocket.on('connect', () => {
//   console.log('socket', adminSocket?.id, 'is connected from the admin namespace');
// });

// adminSocket.on('messageFromServerAdmin', (message) => {
//   console.log(message?.data)
// });
