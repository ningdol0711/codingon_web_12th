const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

console.log('routes > user.js');

router.get('/', controller.user);

module.exports = router;