const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Recipe = require('./recipe');

class Allergen extends Model {}

Allergen.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, 
{ 
    sequelize, 
    modelName: 'Allergen' 

});

module.exports = Allergen;