const { expand } = require('braces');
const express = require('express');
const app = express();
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(express.static('download/'));
app.use('/download', express.static('download'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const example = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, 'download/');
    },
    filename: (req, file, done) => {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8'); // 파일 한글이름 가능하게
      done(null, file.originalname);
    }
  })
})

app.listen(8000, (req, res) => {
  console.log('server is running at port 8000');
})

app.get('/', (req, res) => {
  res.render('index03');
})

app.post('/upload3', example.array('demo'), (req, res) => {
  console.log(req.files);
  console.log(req.files[0].filename); // 여러개의 파일중 찻번째 파일
  res.render('result', {filecount: req.files.length, filenames: req.files});
})