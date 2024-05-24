const { Model } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Recipe = require('./recipe');

class Favorite extends Model {}

Favorite.init({}, { 
    sequelize, 
    modelName: 'Favorite' 
});

module.exports = Favorite;