const userInfo = require('../model/Cuser');
exports.userInfo = (req, res) => {
  res.render('user', {userInfo: userInfo.userInfo()});
}