const mysql = require('mysql2');
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt'
});

exports.visitors = (cb) => {
  connect.query('select * from visitor', (err, rows, fields) => {
    console.log('Cvisitor require Visitor.visitors.js at model');
    cb(rows);
  })
}