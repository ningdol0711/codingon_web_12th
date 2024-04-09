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
  
}

// 로그인 요청
exports.postSignin = (req, res) => {

}

// 회원정보 수정
exports.postProfile = (req, res) => {

}

// 회원정보 삭제
exports.editProfile = (req, res) => {

}

exports.deleteProfile = (req, res) => {

}