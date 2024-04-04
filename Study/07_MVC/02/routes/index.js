const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.get('/comments', controller.Comments);

router.get('/comment/:id', controller.Comment);

module.exports = router;