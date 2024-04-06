const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt',
})

exports.visitors = (cb) => {
  connect.query('select * from visitor', (err, rows, fields) => {
    cb(rows);
  })
}

exports.get_visitors = (data, cb) => {
  console.log('/model/Visitors.get_visitors');

}

exports.post_visitors = (data, cb) => {
  console.log('/model/Visitors.post_visitors');
  
}

exports.patch_visitors = (data, cb) => {
  console.log('/model/Visitors.patch_visitors');
  
}

exports.delete_visitors = (data, cb) => {
  console.log('/model/Visitors.delete_visitors');
  
}