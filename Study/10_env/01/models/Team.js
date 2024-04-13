const teamModel = (sequelize, DataTypes) => {
  const team = sequelize.define(
    "Team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  )
  return team;
}

module.exports = teamModel;