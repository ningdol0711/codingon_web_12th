const user = require('../model/userInfo');

exports.main = (req, res) => {
  res.render('index');
}

exports.login = (req, res) => {
  console.log(req.query.id);
  console.log(user.userInfo());
  let logincheck = true;
  for(let i=0;i<user.userInfo().length;i++) {
    if(req.query.id !== user.userInfo()[i].id) {
      logincheck = false;
    }
    else {
      res.render('login', {user : user.userInfo()[i]});
      logincheck = true;
    }
  }
  if(!logincheck) {
    res.render('Fail');
  }
}