const { readFile } = require('fs');
// getting readFile from fs.promises.readFile
const { promises: { readFile: promiseReadFile } } = require('fs');

// asynchronous functions allow the main program to continue executing commands
// if the function takes too long to return a value or do an action

// asynchronous reading using async and await
const reading = async () => {
  const data = await promiseReadFile(`${__dirname}/txt/input.txt`, 'utf-8');
  console.log(data);
};
reading();
// using promises
readFile(`${__dirname}/txt/input.txt`, 'utf-8', (err, data) => {
  console.log(data);
});
console.log('after read data\n');
