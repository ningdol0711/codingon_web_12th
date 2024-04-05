exports.database = () => {
  const mysql = require('mysql2');
  const sql = 'select * from customer';
  let data = [];

  const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'kdt',
  })

  connect.query(sql, (err, rows, fields) => {
    if(err) {
      console.log('Interal error detected');
    }
    else {
      console.log('Connect success');
      return rows;
    }
  })
}