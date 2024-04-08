const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  database: 'kdt',
  password: '1234',
})

exports.main = (cb) => {
  const sql = 'select * from visitor';
  connect.query(sql, (err, rows) => {
    console.log('/model/Visitor.main');
    cb(rows);
  })
}

exports.add = (data, cb) => {
  const sql = 'insert into visitor (name, comment) value (?, ?)';
  const value = [data.name, data.comment];
  connect.query(sql, value, (err, rows) => {
    console.log('/model/Visitor.add');
    cb(rows.insertId);
  })
}

exports.del = (id, cb) => {
  const sql = 'delete from visitor where id = (?)';
  console.log(id);
  connect.query(sql, id, (err, rows) => {
    console.log('/model/Visitor.del');
    cb(rows);
  })
}