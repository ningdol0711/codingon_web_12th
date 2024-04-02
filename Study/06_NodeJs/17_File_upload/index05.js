const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const path = require('path');
const upload = multer({dest: 'uploads/'});

const uploadDetail = multer({
  storage: upload.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname); // 확장자 추출
      path.basename(file.originalname, ext); // 파일 이름만 출력
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 파일 크기 제한 5MB
  }
})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/uploads', express.static('/uploads'));

app.get('/', (req, res) => {
  res.render('index05');
})

app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'}, {name: 'userfile2'}]), (req, res) => {
  res.send('fields upload')
})

app.post('/dynamic', uploadDetail.single('dynamicFile'), (req, res) => {
  res.send({file: req.file, title: req.body.title})
})

app.listen(PORT, (req, res) => {
  console.log('server is running');
})