const {user} = require('../models');
const {bcryptPassword, comparePassword} = require('../utils/encrypt');

exports.index = (req, res) => {
  res.render('index', {data: req.session.userInfo, title: 'Main'});
}

exports.getRegister = (req, res) => {
  res.render('register', {title: 'Register'});
}

exports.getLogin = (req, res) => {
  res.render('login', {title: 'Login'});
}

exports.getUser = async (req, res) => {
  if(req.session.userInfo) {
    const result = await user.findAll();
    res.render('users', {name: req.session.userInfo.name, users: result, title: 'Users'});
  }
  else {
    res.redirect('/login');
  }
}

exports.getProfile = async (req, res) => {
  const result = await user.findOne({
    where: {id: req.session.userInfo.id},
  })
  res.render('profile', {data: result, title: 'Profile'});
}

exports.postRegister = async (req, res) => {
  try {
    const {pw, name} = req.body;
    const hash = await bcryptPassword(pw);
    console.log(hash);
    console.log(req.body);
    await user.create({pw: hash, name, userid: req.body.userId});
    res.json({ result: true });
  } 
  catch (err) {
    console.error(err);
    res.send('Internal Server Error');
  }
}

exports.postLogin = async (req, res) => {
  try {
    const {userId, pw} = req.body;
    const User = await user.findOne({
      where: {userId},
    });
    if (User) {
      const result = await comparePassword(pw, User.pw); // true or false
      if (result) {
        req.session.userInfo = { name: User.name, id: User.id }; // 세션 생성
        res.json({result: true, data: User});
      } else {
        res.json({result: false, message: '비밀번호가 틀렸습니다.'});
      }
    } else {
      res.json({result: false, message: '존재하는 사용자가 없습니다'});
    }
  } 
  catch (err) {
    console.error(err);
    res.send('Internal Server Error');
  }
}

exports.patchProfile = async (req, res) => {
  try {
    const {name, pw, id} = req.body;
    await user.update({name, pw}, {where: {id}});
    res.json({result: true});
  } 
  catch (err) {
    console.error(err);
    res.send('Internal Sever Error');
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const {id} = req.body;
    await user.destroy({
      where: {id},
    });
    res.clearCookie('testCookie');
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.send('Internal Server Error');
      }
      res.json({result: true});
    }); // 세션 삭제
  } 
  catch(err){
    console.error(err);
    res.send('Internal Sever Error');
  }
}