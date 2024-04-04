const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

const mainRouter = require('./routes/index');
app.use('/', mainRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.use('*', (req, res) => {
  res.status('404').render('404');
})

app.listen(8000, () => {
  console.log('Server is running at 8000');
})