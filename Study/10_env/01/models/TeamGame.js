const teamGameModel = (sequelize, DataTypes) => {
  const teamGame = sequelize.define(
    'TeamGame', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  )
  return teamGame;
}

module.exports = teamGameModel;