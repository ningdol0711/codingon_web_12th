const express= require('express')
const app= express()
const multer = require('multer')
app.set('view engine','ejs');
app.set('views','./views')
app.use('/download', express.static('download'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const abc = multer({ dest:'download/'})
const example = multer({
storage: multer.diskStorage({
          destination(req,file,done) {
            done(null, 'download/')
          },
          filename(req,file,done) {
            // 한글이름처리
            file.originalname= Buffer.from(file.originalname,'latin1').toString('utf-8')
            done(null, file.originalname)
          }
})
})
app.get('/', (req,res)=>{
  res.render('index')
})
app.post('/upload2',example.single('demo') , (req,res)=>{
  console.log('req.file ==>', req.file);
  console.log("req.file.filename", req.file.filename)
  res.render('result', { file : req.file})
})
app.listen(8000, ()=>{
  console.log('8000 서버 실행 중')
})