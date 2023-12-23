const http = require('http');
const server = http.createServer((req, res) => {
	res.end('<h1>Hello from the web server</h1>');
});

server.listen(8000, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
