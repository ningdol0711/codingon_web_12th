const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const harddisk = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('disk storage');
    cb(null, 'download/')
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);; // file 확장자.
    cb(null, file.originalname, ext);
  },
})

const example = multer({storage: harddisk});

app.listen(8000, (req, res) => {
  console.log('server is running at port 8000');
})

app.get('/', (req, res) => {
  res.render('index02')
})

app.post('/upload2', example.single('demo'), (req, res) => {
  res.send('file uploaded');
})