const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// cookie parser is use as middlewere;
app.use(cookieParser('secretKey'));

// cookie에 사용될 내용 선언
const cookieConfig = {
  maxAge : 60 * 1000,
  httpOnly : true,
  signed : true,
}

app.get('/', (req, res) => {
  res.render('cookie');
})

app.get('/setCookie', (req, res) => {
  res.cookie('mycookie', 'cookiegood', cookieConfig);
  res.send('Cookie Changed');
})

app.get('/getCookie', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies)
})

app.get('/delCookie', (req, res) => {
  res.clearCookie('mycookie', 'cookiegood', cookieConfig);
  res.send('Delete cookie');
})

app.listen(8000, () => {
  console.log('Server is running at 8000...');
})

// 암호화 X
// 1. cookie-parser는 미들웨어로 사용
// 2. res.cookie로 쿠키 설정 변경
// 3. req.cookies로 쿠키값 확인
// 4. clearCookie(이름, 값, 옵션)으로 쿠키값 삭제

// 쿠키 암호화
// 1. app.use(cookie-cookieParser(문자열))으로 암호화
// 2. 옵션에 signed: true 사용
// 3. req.signedCookies 객체에서 확인