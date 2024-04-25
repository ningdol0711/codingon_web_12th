const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt',
})

exports.allVisitor = (cb) => {
  const sql = `select * from visitor3`;
  connect.query(sql, (err, rows) => {
    if(err) {throw(err);}
    cb(rows);
  })
}

exports.addVisitor = (data, cb) => {
  const sql = `insert into visitor3 (name, comment) value (?, ?)`;
  const value = [data.name, data.comment];
  connect.query(sql, value, (err, rows) => {
    console.log(rows);
    if(err) {throw(err);}
    cb(rows.insertId);
  })
}

exports.selectVisitor = (id, cb) => {
  const sql = `select * from visitor3 where id = ?`;
  connect.query(sql, id, (err, rows) => {
    if(err) {throw(err);}
    cb(rows);
  })
}

exports.editVisitor = (data, cb) => {
  const sql = `update visitor3 set name = ?, comment = ? where id = ?`;
  const value = [data.name, data.comment, data.id];
  connect.query(sql, value, (err, rows) => {
    if(err) {throw(err);}
    cb(rows);
  })
}

exports.deleteVisitor = (id, cb) => {
  const sql = `delete from visitor3 where id = ?`;
  connect.query(sql, id, (err, rows) => {
    if(err) {throw(err);}
    cb(rows);
  })
}