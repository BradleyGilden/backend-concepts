import express from 'express';
import socketio from 'socket.io';
import { join } from 'path';

const app = express();

app.use(express.static(join(__dirname, 'public')));

// initiate server listening
const expressServer = app.listen(3000, () => console.log('Server running on port 3000...'));

// allow socketio to piggy back off the express server
const io = socketio(expressServer);

// connection event fires when a client connects to the server
io.on('connection', (socket) => {
  console.log('socket', socket.id, 'has connected');

  // global message to all clients
  io.emit('Greetings', 'Hello to all clients')

  // emit to the current connected socket socket
  socket.emit('messageFromServer', { data: `This is a special message to you ${socket.id}!!!` });

  
  socket.on('messageFromClient', (message) => {
    console.log(message?.data);
  })

  socket.on('disconnect', (reason) => {
    console.log('disconnected', reason);
  })
})
