const User = require('./user');
const Recipe = require('./recipe');
const Favorite = require('./favorite');
const Like = require('./like');
const Allergen = require('./allergen');
const RecipeAllergen = require('./recipeAllergen');
const Ingredient = require('./ingredient');

User.hasMany(Recipe, { 
    foreignKey: 'userId',
});

Recipe.belongsTo(User, { 
    foreignKey: 'userId',
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
    through: 'RecipeAllergen', 
    foreignKey: 'recipeId' 
});
Allergen.belongsToMany(Recipe, { 
    through: 'RecipeAllergen', 
    foreignKey: 'allergenId' 
});

Recipe.hasMany(Ingredient, { 
    foreignKey: 'recipeId',
    onDelete: 'CASCADE'
});
Ingredient.belongsTo(Recipe, { 
    foreignKey: 'recipeId'
});

module.exports = { User, Recipe, Favorite, Like, Allergen, RecipeAllergen, Ingredient };