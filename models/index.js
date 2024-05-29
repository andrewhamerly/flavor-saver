const User = require('./user');
const Recipe = require('./recipe');
const Favorite = require('./favorite');
const Like = require('./like');
const Allergen = require('./allergen');

User.hasMany(Recipe, { 
    foreignKey: 'userId', 
    as: 'recipes' 
});

Recipe.belongsTo(User, { 
    foreignKey: 'userId', 
    as: 'author' 
});

User.hasMany(Favorite, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
Favorite.belongsTo(User, { 
    foreignKey: 'userId' 
});

Recipe.hasMany(Favorite, {
    foreignKey: 'recipeId',
    onDelete: 'CASCADE'
  });
Favorite.belongsTo(Recipe, { 
    foreignKey: 'recipeId' 
});

User.hasMany(Like, { 
    foreignKey: 'userId' 
});
Like.belongsTo(User, { 
    foreignKey: 'userId' 
});

Recipe.hasMany(Like, { 
    foreignKey: 'recipeId' 
});
Like.belongsTo(Recipe, { 
    foreignKey: 'recipeId' 
});

Recipe.belongsToMany(Allergen, { 
    through: 'RecipeAllergens', 
    foreignKey: 'recipeId' 
});
Allergen.belongsToMany(Recipe, { 
    through: 'RecipeAllergens', 
    foreignKey: 'allergenId' 
});

module.exports = { User, Recipe, Favorite, Like, Allergen };