const fs = require('fs');

const input = fs.createReadStream('../other/text.txt', 'utf-8');
const output = fs.createWriteStream('../other/textNew.txt');

input.pipe(output);
input.once('data', part => {
  output.write(part);
});

