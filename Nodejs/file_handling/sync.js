const fs = require('fs');

try {
  // synchronous reading
  const data = fs.readFileSync('./txt/input.txt', 'utf-8');
  console.log(data);
  // synchronous writing
  fs.writeFileSync('./txt/output.txt', 'this is being written to a file');
  // synchronous appending
  fs.writeFileSync('./txt/output.txt', '\nthis is being appended to the file', {'encoding': 'utf-8', 'flag': 'a'});
} catch (err) {
  console.log(err.message);
}
