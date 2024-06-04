const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model {}

Like.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  recipeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Recipe',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Like',
  tableName: 'Likes'
});

module.exports = Like;
