const http = require('http');
const websocket = require('ws');


const server = http.createServer((req, res) => {
  res.end('I am connected');
});

// wss - websocket server
const wss = new websocket.WebSocketServer({ server });

// access headers before they are processed by the server
// wss.on('headers', (headers, req) => {
//   console.log(headers);
// })

// connection event emiited once handshake is complete
wss.on('connection', (ws, req) => {
  ws.send('Welcome to the WebSocket server!!!');
});

server.listen('3000', () => {
  console.log('server is running on port 3000')
});
