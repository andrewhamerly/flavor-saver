const { Model } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model {}

Like.init({}, { 
    sequelize, 
    modelName: 'Like' 
});

module.exports = Like;
