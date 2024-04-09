// TODO: visitor 모델 정의
const visitor = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'visitor', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT('medium'),
      },
    }, {
      tableName: 'visitor2',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
}
module.exports = visitor;