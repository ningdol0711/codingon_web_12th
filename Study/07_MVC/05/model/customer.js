const mysql = require('mysql2');
const sql = 'SELECT * FROM customer';

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt',
});

function getcust(cb) {
  connect.query(sql, (err, rows, fields) => {
    if (err) {
      console.log('Internal error detected');
      cb(err, null);
    } else {
      console.log('Connect success');
      cb(null, rows); // 성공했을 때 콜백으로 결과를 전달
    }
  });
}

module.exports = getcust;