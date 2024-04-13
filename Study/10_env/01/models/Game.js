const gameModel = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    'Game', {
      GameID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  )
  return Game;
}
module.exports = gameModel;