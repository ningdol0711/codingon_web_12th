const express = require('express');
const router = express.Router();

const controller = require('../controller/Cvisitors');

router.get('/', controller.main);
router.get('/visitor', controller.visitor);

module.exports = router;