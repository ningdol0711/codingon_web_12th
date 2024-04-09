// TODO: User 모델 정의
const user = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'user', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, {
      tableName: 'user2',
      timestamps: false,
    }
  );
  return model;
}

module.exports = user;