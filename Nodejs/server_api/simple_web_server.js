const {readFile, writeFile} = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
	res.write('Welcome to the Home Page')
	res.end()
});

server.listen(5500, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
