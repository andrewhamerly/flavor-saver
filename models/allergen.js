const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergen extends Model {}

Allergen.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, 
{ 
    sequelize, 
    modelName: 'Allergen',
    tableName: 'Allergens'
});

module.exports = Allergen;
