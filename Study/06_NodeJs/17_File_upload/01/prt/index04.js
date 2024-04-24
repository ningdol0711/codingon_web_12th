const express = require('express');
const app = express();
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/download', express.static('download'));
app.set(express.urlencoded({extended: true}));
app.set(express.json());

const file = multer({
  storage: multer.diskStorage({
    destination: (req, file, dest) => {
      dest(null, 'download/');
    },
    filename: (req, file, name) => {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
      name(null, file.originalname);
    }
  })
})

app.listen(8000, (req, res) => {
  console.log('server is running at port 8000');
})

app.get('/', (req, res) => {
  res.render('index04');
})

app.post('/upload04', file.array('demo'), (req, res) => {
  res.render('result02', {filecount: req.files.length, filenames: req.files});
})