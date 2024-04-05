const express = require('express');
const db = express();

db.set('view engine', 'ejs');
db.set('views', 'views');

const mysql = require('mysql2');
// const sql = 'select * from customer';
const sql = 'insert into customer value(?, ?, ?, ?, ?)';
let vals = ['ningdol', '이준규', '강동구', '01083933730', '2024-04-05'];

const connection = mysql.createConnection({
  host: 'localhost',
  password: '1234',
  database: 'kdt',
  user: 'root',
})

db.get('/', (req, res) => {
  connection.query(sql, vals, (err, rows, fields) => {
    if(err) {
      console.log(err);
      res.status('500').send('Database connection error');
    }
    else {
      console.log('connection success');
      res.render('index', {cust: rows});
    }
  connection.end();
  })
})

db.listen(8000, () => {
  console.log('server is running at 8000');
})