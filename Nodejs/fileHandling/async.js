const fs = require('fs');

// asynchronous functions allow the main program to continue executing commands if the function takes
// too long to return a value or do an action

// asynchronous reading
const reading = async () => {
	// we can use callbacks as well
	const data = await fs.readFile('./txt/input.txt', 'utf-8');
	console.log(data);
};
console.log('after read data');
