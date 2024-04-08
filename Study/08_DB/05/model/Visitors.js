const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
})