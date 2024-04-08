const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt',
})

exports.visitors = (cb) => {
  console.log('/model/Visitors.js.visitors');
  const sql = 'select * from visitor';
  connect.query(sql, (err, rows) => {
    if(err) throw err;
    console.log('visitors success');
    cb(rows);
  })
}

exports.get_visitors = (id, cb) => {
  console.log('/model/Visitors.get_visitors');
  const sql = 'select * from visitor where id = ?';
  connect.query(sql, [id], (err, rows, fields) => {
    if(err) throw err;
    console.log('get_visitors success');
    cb(rows[0]);
  })
}

exports.post_visitors = (data, cb) => {
  console.log('/model/Visitors.post_visitors');
  const sql = 'insert into visitor (name, comment) value (?, ?)';
  const values = [data.name, data.comment];
  connect.query(sql, values, (err, rows, fields) => {
    if(err) throw err;
    console.log('post_visitors success');
    cb(rows.insertId);
  })
}

exports.patch_visitors = (data, cb) => {
  console.log('/model/Visitors.patch_visitors');
  const sql = 'update visitor set name = ?, comment = ? where id = ?';
  const values = [data.name, data.comment, data.id];
  connect.query(sql, values, (err, rows, fields) => {
    if(err) throw err;
    console.log('patch_visitors success');
    cb(rows);
  })  
}

exports.delete_visitors = (id, cb) => {
  console.log('/model/Visitors.delete_visitors');
  const sql = 'delete from visitor where id = ?';
  connect.query(sql, [id], (err, rows, fields) => {
    if(err) throw err;
    console.log('delete_visitors success');
    cb(rows);
  }) 
}