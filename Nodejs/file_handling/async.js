const fs = require('fs');

// asynchronous functions allow the main program to continue executing commands if the function takes
// too long to return a value or do an action

// asynchronous reading using async and await
const reading = async () => {
	const data = await fs.promises.readFile('./txt/input.txt', 'utf-8');
	console.log(data);
};
reading();
// using promises
fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
	console.log(data);
})
console.log('after read data\n');
