const {Sq} = require('sequelize');
const {Player, Profile, Team, TeamGame, Game} = require('../models');

exports.main = (req, res) => {
  res.render('index');
}