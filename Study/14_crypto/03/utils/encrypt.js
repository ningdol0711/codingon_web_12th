const bcrypt = require('bcrypt');
const saltRounds = 11;

const bcryptPassword = (password) => {
  return bcrypt.hash(password, saltRounds);
}

const comparePassword = (password, dbPassword) => {
  return bcrypt.compare(password, dbPassword);
}

module.exports = {
  bcryptPassword,
  comparePassword,
}