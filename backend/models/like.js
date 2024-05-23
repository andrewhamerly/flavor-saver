const { Model } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Recipe = require('./recipe');

class Like extends Model {}

Like.init({}, { 
    sequelize, 
    modelName: 'Like' 
});

module.exports = Like;
