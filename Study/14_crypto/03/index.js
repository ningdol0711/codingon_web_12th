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

const userRouter = require('./routes/user');

app.get('/', userRouter);

app.get('*', (req, res) => {
  res.render('404');
})

db.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}....`);
  })
})