const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'id' });
    }
  }

  Department.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};
