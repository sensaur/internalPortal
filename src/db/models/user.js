const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Department, Team }) {
      this.belongsTo(Department, { foreignKey: 'departmentid' });
      this.belongsTo(Team, { foreignKey: 'teamid' });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: DataTypes.STRING,
    teamid: DataTypes.INTEGER,
    departmentid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
