const express = require('express');
const app = express();

const mysql = require('mysql2');
let sql = 'select * from customer';

app.set('view engine', 'ejs');
app.set('views', 'views');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'kdt',
})

app.get('/', (req, res) => {
  connection.query(sql, (err, rows, fields) => {
    if(err) {
      console.log('Connet Fail');
      res.status(500).send('Internal server error');
    }
    else {
      res.render('index02', {mydata: rows});
    }
  })
})

app.listen(8000, () => {
  console.log('Server is running at 8000');
})