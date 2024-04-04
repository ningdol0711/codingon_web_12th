const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

console.log('router > index.js');
router.get('/', controller.main);
router.get('/comments', controller.comments);

module.exports = router;