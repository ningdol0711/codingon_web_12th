const models = require('../models/index');
const user = models.user;

exports.getSignup = (req, res) => {
  res.render('signup')
}

exports.getSignin = (req, res) => {
  res.render('signin');
}

// 회원가입 요청
exports.postSignup = (req, res) => {
  console.log('controller > Cuser.bodyjs > post_signup')
  user.bodycreate({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw
  }).then( result =>{
    console.log('Created >', result)
    res.send(result)
  })
}

// 로그인 요청
exports.postSignin = (req, res) => {
  console.log('post방식으로 signin',req.body);
  user.bodyfindOne({
      raw: true,
      where: {
          userid: req.body.userid,
          pw: req.body.pw
      }
  }).then((result) => {
      console.log('findOne', result);
      if (result) {
          res.send({ isLogin: true, userInfo: result });
      } else {
          res.send({ isLogin: false });
      }
  })
}

// 회원정보 수정
exports.postProfile = (req, res) => {
  console.log('post방식으로 profile',req.body);
  user.bodyfindOne({
      where :{ userid: req.body.userid}
  }).then(result =>{
      console.log('findOne :post_profile > ', result)
      if(result)   res.render('profile', {data: result})
  })
}

// 회원정보 삭제
exports.editProfile = (req, res) => {
  console.log('controller > edit_profile' , req.body);
  user.bodyupdate({
      name:req.body.name,
      pw: req.body.pw
  },{
      where : {id:req.body.id}
  }).then( result =>{
      res.send('회원정보수정')}
  )
}

exports.deleteProfile = (req, res) => {
  console.log('controller > delete_profile' , req.body);
  user.bodydestrory({
    where : {id:req.body.id}
  }).then( result =>{
    res.send({deleteId: req.body.id})}
  )
}