import express from 'express';
import socketio from 'socket.io';
import { join } from 'path';

const app = express();

app.use(express.static(join(__dirname, 'public')));

// initiate server listening
const server = app.listen(3000, () => console.log('Server running on port 3000...'));

// allow socketio to piggy back off the express server
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('socket', socket.id, 'has connected');
  socket.emit('messageFromServer', { data: 'hello from the server!!!' });

  socket.on('messageFromClient', (message) => {
    console.log(message?.data);
  })

  socket.on('disconnect', (reason) => {
    console.log('disconnected', reason);
  })
})
