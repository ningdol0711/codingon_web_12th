const teamGameModel = (sequelize, DataTypes) => {
  const teamGame = sequelize.define(
    'teamgame', {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      freezeTableName: true,
    }
  )
  return teamGame;
}
module.exports = teamGameModel;