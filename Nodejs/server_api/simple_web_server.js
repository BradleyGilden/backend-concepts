const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const pathName = req.url;
	if (pathName === '/' || pathName === '/overview') {
		res.end('<h1>This is the overview </h1>');
	} else if (pathName === '/product') {
		res.end('<h1>This is the product </h1>');
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
