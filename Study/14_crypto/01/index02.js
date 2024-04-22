const crypto = require('crypto');

const salt = crypto.randomBytes(128).toString('base64');
const password = '1234';

const hash = crypto
  .createHash('sha512')
  .update(password+salt)
  .digest('base64');

  console.log(hash);