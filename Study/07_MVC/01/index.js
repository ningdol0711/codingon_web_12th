const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/user', (req, res) => {
  res.render('user');
})

// 404페이지는 항상 마지막에 처리
// app.get('*', (req, res) => {
//   res.render('404');
// })

app.use('*', (req, res) => {
  res.status('404').render('404');
})

app.listen(8000, () => {
  console.log('Server is running at 8000....');
})