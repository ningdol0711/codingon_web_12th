const user = require('../model/userInfo');

exports.main = (req, res) => {
  res.render('index');
}

exports.login = (req, res) => {
  console.log(user.userInfo());
  res.render('login', {user: user.userInfo()});
}