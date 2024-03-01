import express from 'express';
import http from 'http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const __dirname = dirname(fileURLToPath(import.meta.url));
process.env.DIRNAME = __dirname;
const PORT = 3000;

const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
});

app.get('/chat', (req, res) => {
  res.sendFile(join(__dirname, 'chat.html'))
});

io.on('connection', (client) => {
  console.log(`Server socket established with client ${client.id} ✅`);

  client.on("sendMessage", (message) => {
    // event will be broadcasted everywehre but the sender
    client.broadcast.emit("sendMessage", message);
    console.log(message);
  });

  // any specific client that disconnects from the socket
  client.on('disconnect', () => {
    console.log(`Client ${client.id} Disconnected ❌`)
  })
})



server.listen(3000, () => {
  console.log('Sever running on port 3000');
})
