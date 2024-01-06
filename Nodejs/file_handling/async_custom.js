// setting up readfile with cusotm promise
const { readFile, writeFile } = require('fs');
const util = require('util');

const readFileAsync = util.promisify(readFile);
const writeFileAsync = util.promisify(writeFile);

const start = async () => {
  try {
    // using __dirname allows us to access the files relative path
    const first = await readFileAsync(`${__dirname}/txt/first.txt`, 'utf-8');
    const second = await readFileAsync(`${__dirname}/txt/second.txt`, 'utf-8');
    await writeFileAsync(`${__dirname}/txt/output.txt`, `THIS IS AWESOME: ${first.trim()} ${second.trim()}`);
    console.log(first.trim(), second.trim());
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = (path) => new Promise((resolve, reject) => {
//   readFile(path, 'utf8', (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });

// getText(`${__dirname}/txt/input.txt`)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
