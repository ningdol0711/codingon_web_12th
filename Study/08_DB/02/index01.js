const express = require('express');
const db = express();

db.set('view engine', 'ejs');
db.set('views', 'views');

const mysql = require('mysql2');
const sql = 'select * from customer';
const connection = mysql.createConnection({
  host: 'localhost',
  password: '1234',
  database: 'kdt',
  user: 'root',
})

db.get('/', (req, res) => {
  connection.query(sql, (err, rows, fields) => {
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