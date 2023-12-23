const fs = require('fs');

try {
	const data = fs.readFileSync('./txt/input.txt', 'utf-8');
	console.log(data);
	fs.writeFileSync('./txt/output.txt', 'this is being written to a file')
} catch (err) {
	console.log(err.message);
}
