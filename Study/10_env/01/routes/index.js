const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/players', controller.getAllPlayers);

module.exports = router;