module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'main',
    {
      pid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'pid',
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'createdAt',
      },
    },
    {
      tableName: 'main',
    }
  );
};
