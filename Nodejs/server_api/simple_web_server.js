const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const pathName = req.url;
	res.writeHead(404, {
		'Content-Type': 'text/html'
	});
	if (pathName === '/' || pathName === '/overview') {
		res.end('<h2 align="center">This is the overview</h2>');
	} else if (pathName === '/product') {
		res.end('<h2 align="center">This is the product</h2>');
	} else {
		res.end('<h1 align="center">404</h1><br/><h2 align="center">Page not found</h2>')
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
