const express = require('express');
const session = require('express-session');
const web = express();

web.set('view engine', 'ejs');
web.set('views', 'views');

web.use(express.urlencoded({extended: true}));
web.use(express.json());

// Session option
// secure : 값을 true로 설정시 https 에서만 세션을 주고 받을 수 있다.
// secret : 세션 발급 키 (공용키)
// resave : 세션에 수정된 사항이 없더라도 주기적으로 저장할지 결정
// saveUninitialized : 세션에 저장할 내용이 없더라도 세션을 생성할지 결정
// httpOnly : 웹서버를 통해서만 쿠키에 접근 가능

web.use(session({
  secret: 'mySession',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000,
  }
}))

web.get('/', (req, res) => {
  res.render('index');
})

web.get('/set', (req, res) => {
  req.session.name = '이준규';
  res.send('session set');
})

web.get('/name', (req, res) => {
  console.log(req.session.name);
  console.log(req.sessionID);
  console.log(req.session);

  res.send({id: req.sessionID, ses: req.session});
})

web.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log('Err');
      res.send(err);
    }
    res.redirect('/name');
  })
})

web.listen(8000, () => {
  console.log('Server is running at 8000....');
})