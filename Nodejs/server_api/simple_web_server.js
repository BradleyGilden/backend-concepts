const {readFile, writeFile} = require('fs');
const http
const server = http.createServer((req, res) => {
	const pathName = req.url;
	if (pathName === '/' || pathName === '/overview') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<h2 align="center">This is the overview</h2>');
	} else if (pathName === '/product') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<h2 align="center">This is the product</h2>');
	} else if(pathName === '/api') {
		fs.readFile('./api_data.json', 'utf-8', (err, data) =>{
			const jsonData = JSON.parse(data);
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(jsonData));
		})
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('<h1 align="center">404</h1><br/><h2 align="center">Page not found</h2>')
	}
});

server.listen(8000, 'localhost', () => {
	console.log('Listening on port on localhost:8000');
})
