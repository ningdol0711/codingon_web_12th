const express = require('express');
const route = express.Router();

const controller = require('../controller/login');

route.get('/', controller.main);

route.get('/login', controller.login);

module.exports = route;