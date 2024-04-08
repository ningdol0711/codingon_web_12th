const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
})

exports.allVisitorsList = (cb) => {
  connect.query('select * from visitor', (err, rows) => {
    console.log('db callback');
    cb(rows);
  })
}

exports.postAddVisitor = (data, cb) => {
  const sql = 'insert into visitor (name, comment) value (?, ?)';
  const values = [data.name, data.comment];
  connect.query(sql, values ,(err, rows) => {
    console.log('model/Visitors.postAddVisitor');
    cb(rows.insertId);
  })
}

exports.getShowVisitor = (id, cb) => {
  const sql = 'SELECT * FROM kdt.visitor where id=?';
  connect.query(sql, id, (err, rows) => {
    if (err) throw err;
    cb(rows[0]);
  })
}

exports.patchContent = (data, cb)=>{
  console.log('changeContent : ', data)
  const sql ="UPDATE visitor SET name =? , comment =? WHERE = ?";
  const values=[data.name, data.comment, data.id]
  connect.query(sql, values, (err, rows)=>{
     console.log('update > ', rows);
     cb(rows)
  })
}

exports.deletedb = (id, cb) => {

}