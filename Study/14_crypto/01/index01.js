const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('./demo.txt');

crypto.randomBytes(128, (err, buf) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log('The random data : ', buf.toString('base64'));
})