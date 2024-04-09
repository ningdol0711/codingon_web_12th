const Sequelize = require('sequelize');
const config = require('../config/config.json')['test'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.visitor = require('./Visitor')(sequelize, Sequelize);
db.user = require('./User')(sequelize, Sequelize);

module.exports = db;