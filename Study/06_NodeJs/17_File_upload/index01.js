const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const upload = multer({dest: 'download/'});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
})

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/upload', upload.single('demo'), (req, res) => {
  console.log(req.file.originalname);
  res.send('upload success');
})