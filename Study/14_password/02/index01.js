const crypto = require('crypto')

function saltandPW(password) {
  const iteration = 100;
  const keylen = 64;
  const algorithm = 'sha512';

  const salt = crypto.randomBytes(16).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, iteration, keylen, algorithm).toString('base64');

  return {salt, hash};
}

const password = '1234';
const {salt, hash} = saltandPW(password);
console.log('salt : ', salt, 'hash : ', hash);

// 암호 비교

function checkPW(inputPW, savedSalt, savedHash) {
  const iteration = 100;
  const keylen = 64;
  const algorithm = 'sha512';

  const hash = crypto.pbkdf2Sync(inputPW, savedSalt, iteration, keylen, algorithm).toString('base64');

  return savedHash === hash;
}

const inputPW = '1234';
const isMatch = checkPW(inputPW, salt, hash);

console.log(isMatch);