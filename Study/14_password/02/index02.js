const bcrypt = require('bcrypt');

const originalPW = '1234';
const saltRounds = 10;

function hashPW(password) {
  return bcrypt.hashSync(password, saltRounds);
}

function comparePW(password, hashedPW) {
  return bcrypt.compareSync(password, hashedPW);
}

const hashedPW = hashPW(originalPW);
console.log(hashedPW);

const isMatch = comparePW("1234", hashedPW);
console.log(isMatch);