'use strict';

const { Sequelize } = require("sequelize");
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};
const sequelize = new Sequelize (
  config.database,
  config.username,
  config.password,
  config
)

const playerModel = require('./Player')(sequelize, Sequelize);
const profileModel = require('./Profile')(sequelize, Sequelize);
const teamModel = require('./Team')(sequelize, Sequelize);
const teamGameModel = require('./TeamGame')(sequelize, Sequelize);
const gameModel = require('./Game')(sequelize, Sequelize);

db.player = playerModel;
db.profile = profileModel;
db.team = teamModel;
db.teamGame = teamGameModel;
db.game = gameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;