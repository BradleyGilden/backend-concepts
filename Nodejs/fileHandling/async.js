const fs = require('fs');

// asynchronous functions allow the main program to continue executing commands if the function takes
// too long to return a value or do an action

// asynchronous reading
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
	console.log('read data:', data);
});
console.log('after read data');
