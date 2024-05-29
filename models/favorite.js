const { Model } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Recipe = require('./recipe');

class Favorite extends Model {}

Favorite.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Favorite',
    indexes: [
      {
        unique: true,
        fields: ['userId', 'recipeId']
      }
    ]
  });
  
  module.exports = Favorite;