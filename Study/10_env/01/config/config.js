require('dotenv').config();

const develop = {
  username: process.env.DB_USERNAME,
  passowrd: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
}

module.exports = {develop};