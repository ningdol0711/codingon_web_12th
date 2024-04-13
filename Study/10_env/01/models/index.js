'use strict';

const { Sequelize } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
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

// join
playerModel.hasOne(profileModel, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  FOREIGNKEYS: 'player_id',
})

profileModel.belongsTo(playerModel, {
  FOREIGNKEYS: 'player_id',
})

// 1 : n
teamModel.hasMany(playerModel, {
  FOREIGNKEYS: 'team_id',
  sourceKey: 'team_id',
})

// playerModel.hasMany(teamModel, {
//   FOREIGNKEYS: 'team_id',
//   sourceKey: 'team_id',
// })

// n : n
teamModel.belongsToMany(gameModel, {
  through: 'teamGameModel',
  FOREIGNKEYS: 'team_id',
})

gameModel.belongsToMany(teamModel, {
  through: 'teamGameModel',
  FOREIGNKEYS: 'team_id',
})

db.player = playerModel;
db.profile = profileModel;
db.team = teamModel;
db.teamGame = teamGameModel;
db.game = gameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;