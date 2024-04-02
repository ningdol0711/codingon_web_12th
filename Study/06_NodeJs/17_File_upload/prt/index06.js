const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
      cb(null, file.basename(path.basename(file.originalname, ext)) + Date.now() + ext);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  }
})

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/uploads', express.static('/uploads'));

app.listen(8000, (req, res) => {
  console.log('server is running at 8000');
})

app.get('/', (req, res) => {
  res.render('index06');
})

app.post('/upload', uploadFile.single('userProfile'),(req, res) => {
  console.log(req.data);
  res.render('index06_result');
})