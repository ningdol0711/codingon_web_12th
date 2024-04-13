const playerModel = (sequelize, DataTypes) => {
  const player = sequelize.define(
    'Player', {
      player: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  )
  return player;
}

module.exports = playerModel;