const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeAllergen extends Model {}

RecipeAllergen.init({
  recipeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Recipe',
      key: 'id'
    }
  },
  allergenId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Allergen',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'RecipeAllergen',
  timestamps: false
});

module.exports = RecipeAllergen;