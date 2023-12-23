const http = require('http');
const server = http.createServer((req, res) => {
	res.end('Hello from the web server');
});

server.listen(8000, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
