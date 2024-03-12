import express from 'express';
import socketio from 'socket.io';
import { instrument } from '@socket.io/admin-ui'; // to monitor sockets
import { join } from 'path';
import cors from 'cors';
import translate from 'google-translate-api-x';

const app = express(cors({ origin: true, credentials: true}));

app.use(express.static(join(__dirname, 'public')));

const expressServer = app.listen(5500, () => console.log('Server running on port 3000...'));

const io = socketio(expressServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  }
});

// development ui monitoring
instrument(io, {
  auth: false,
  mode: 'development',
});

io.on('connection', (socket) => {
  console.log('socket', socket.id, 'has connected');

  socket.on('messageFromClient', (message) => {
    console.log('this is from client', message?.data);
  })
  socket.emit('messageFromServer', { data: 'hello from the server in root namespace'});
})

io.of('/admin').on('connection', (adminSocket) => {
  console.log('connected to admin namespace', adminSocket.id)

  adminSocket.on('messageFromClientAdmin', (message) => {
    console.log('This is from admin', message?.data);
  })

  io.of('/admin').emit('messageFromServerAdmin', { data: 'hello from the server in admin namespace'});
});
