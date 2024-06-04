const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  allergens: {
    type: DataTypes.STRING,
    allowNull: true
  },
  users_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  likesCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Recipe',
  tableName: 'Recipes'
});

module.exports = Recipe;
