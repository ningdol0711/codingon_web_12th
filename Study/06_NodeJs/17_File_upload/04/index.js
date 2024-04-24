const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

const folder = multer({
  dest: 'download/'
})

const fileDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'download/');
    },
    filename(req, file, cb) {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
      cb(null, file.originalname);
    }
  })
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/download', express.static('download'));

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/upload', fileDetail.single('profile'), (req, res) => {
  res.render('result', {filename: req.file.filename});
})

app.listen(8000, () => {
  console.log('Server is running at 8000');
})