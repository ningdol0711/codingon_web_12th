const user = require('../model/Cuser');

exports.user = (req, res) => {
  res.render('user', {userInfo : user.userInfo()});
}