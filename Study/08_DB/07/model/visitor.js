const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  password: '1234',
  user: 'root',
  database: 'kdt',
})

exports.allVisitors = (cb) => {
  conn.query('select * from visitor', (err, rows) => {
    cb(rows);
  })
}

exports.postAddVisitor = (data, cb) => {
  const sql = 'insert into visitor (name, comment) values (?, ?)';
  const vals = [data.name, data.comment];

  conn.query(sql, vals, (err, rows) => {
    cb(rows.insertId);
  })
}

exports.getVisitor = (id, cb) => {
  const sql = 'select * from visitor where id = ?';

  conn.query(sql, id, (err, rows) => {
    if(err) throw (err);
    cb(rows);
  })
}

exports.postContent = (data, cd) => {
  const sql = 'update visitor set name = ? comment = ?';
  const vals = [data.name, data.comment];

  conn.query(sql, vals, (err, rows) => {
    cb(rows);
  })
}

exports.delVisitor = (id, cb) => {
  const sql = 'delete from visitor where id = ?';

  conn.query(sql, id, (err, rows) => {
    cb(rows);
  })
}