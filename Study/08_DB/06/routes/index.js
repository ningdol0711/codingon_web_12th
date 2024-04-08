const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitor');

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/visitors', controller.main);

router.post('/addVisitor', controller.addVisitor);

router.delete('/deleteVisitor', controller.deleteVisitor);

module.exports = router;