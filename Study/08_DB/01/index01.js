const express = require('express');
const app = express();

const mysql = require('mysql2');

app.set('view engine', 'ejs');
app.set('views', 'views');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt',
})

let sql = 'select * from customer';
connection.query(sql, (err, rows, fields) => {
  if(err) {console.log(err.message)}
  else {
    console.log('Connect success');
    console.log(rows[0]);
    console.log(fields);
  }
})
connection.end;

app.listen(8000, () => {
  console.log('Server is running at 8000');
})