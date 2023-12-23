const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const pathName = req.url;
	if (pathName === '/' || pathName === '/overview') {
		res.end('<h2>This is the overview</h2>');
	} else if (pathName === '/product') {
		res.end('<h1 align="center">This is the product</h1>');
	} else {
		res.writeHead(404);
		res.end('<h1 align="center">404</h1><br/><h1 align="center">Page not found</h1>')
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
