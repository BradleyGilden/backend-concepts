const { createReadStream } = require('fs');

// const stream = createReadStream(`${__dirname}/txt/big_file.txt`);
// set buffer size to 90kb
const stream = createReadStream(`${__dirname}/txt/big_file.txt`, { highWaterMark: 90000, encoding: 'utf8' });

stream.on('data', (result) => {
  console.log(result);
});

// catch any errors from reading stream
stream.on('error', (err) => {
  console.log(err);
});
