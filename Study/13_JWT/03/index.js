const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqVdfjfsahf';
const userInfo = {name: 'YHS', birth: '0307', id: '1234', pw: '1234'};

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/token', (req, res) => {
  if(req.headers.authorization) {
    const authorization = req.headers.authorization.split(' ');
    const token = authorization[1];
    try {
      const result = jwt.verify(token, SECRET);
      if(result.id === userInfo.id) {
        res.send({isVerify: true, name: userInfo.name});
      }
      else {
        res.send({isVerify: false, msg: 'Wrong access'});
      }
    }
    catch(err) {
      res.send({isLogin: false, msg: 'You cant access page'});
    }
  }
  else {
    res.redirect('/login');
  }
})

app.post('/login', (req, res) => {
  try{
    const {id, pw} = req.body;
    const {id: realID, pw: realPW} = userInfo;
    if(id == realID && pw == realPW) {
      const token = jwt.sign({id: id}, SECRET);
      res.send({isLogin: true, token});
    }
    else {
      res.send({isLogin: false, msg: 'Please check your ID, PW'});
    }
  }
  catch(err) {
    console.log(err);
  }
})

app.listen(8000, () => {
  console.log('Server is running at 8000....');
})