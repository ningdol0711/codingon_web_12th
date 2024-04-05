const database = require('../model/customer');
const custdata = database.database();

exports.cust = (req, res) => {
  console.log(custdata);
  res.render('index', {custdata: custdata});
}