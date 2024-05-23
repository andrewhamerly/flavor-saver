const User = require('./user');
const Recipe = require('./recipe');

Recipe.belongsTo(User, { 
    foreignKey: 'userId', 
    as: 'author' 
});

User.hasMany(Recipe, { 
    foreignKey: 'userId', 
    as: 'recipes' 
});

module.exports = { User, Recipe };