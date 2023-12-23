const http = require('http');
http.createServer((req, res) => {
	res.end('Hello from the web server');
});
