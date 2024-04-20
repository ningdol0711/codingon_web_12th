const crypto = require('crypto');

const hashPW = (password) => {
  return crypto.createHash('sha512').update(password).digest('base64');
}

console.log(hashPW('YHS'));