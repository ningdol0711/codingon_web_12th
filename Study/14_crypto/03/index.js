const express = require('express');
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const db = require('./models/index');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieparser());
app.use(session({
  secret: 'mySession',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000,
  }
}))

const userRouter = require('./routes/index');
app.get('/', userRouter);
app.get('/register', userRouter);
app.get('/login', userRouter);
app.get('/users', userRouter);
app.get('profile', userRouter);

app.post('/login', userRouter);
app.post('/register', userRouter);

app.patch('/profile/edit', userRouter);

app.delete('/destroy', userRouter);

app.get('*', (req, res) => {
  res.render('404');
})

db.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}....`);
  })
})