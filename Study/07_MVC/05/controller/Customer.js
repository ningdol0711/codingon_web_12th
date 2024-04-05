exports.cust = (req, res) => {
  const database = require('../model/customer');
  database((err, custdata) => {
    res.render('index', {custdata: custdata});
  })
}