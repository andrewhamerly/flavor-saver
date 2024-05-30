const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Recipes',
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'ingredients',
  timestamps: true
});

module.exports = Ingredient;
