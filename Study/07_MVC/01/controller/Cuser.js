const user = require('../model/Cuser');

exports.user = (req, res) => {
  console.log('Controller > Cuser.js : ');
  res.render('user', {userInfo: user.userInfo()});
}