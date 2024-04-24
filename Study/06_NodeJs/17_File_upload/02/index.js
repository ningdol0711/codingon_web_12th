const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

const filepath = multer({dest: 'uploads/'});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
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
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/dynamic', uploadDetail.single('dynamicFile'), (req,res)=>{
  res.send({file:req.file, title:req.body.title})
})

app.listen(8000, () => {
  console.log('Server is running at 8000....');
})