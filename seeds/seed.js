const sequelize = require('../config/connection');
const { User, Recipe, Ingredient, Like } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const ingredientData = require('./ingredientData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const recipe of recipeData) {
      const createdRecipe = await Recipe.create({
        recipe,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });

      const recipeIngredients = ingredientData.filter(
        (ingredient) => ingredient.recipe_id === recipe.id
      );

      for (const ingredient of recipeIngredients) {
        await Ingredient.create({
          ingredient,
          recipe_id: createdRecipe.id,
        });
      }
    }

    console.log('Database seeded successfully!');
    process.exit(0); // Exit the process after seeding
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1); // Exit with an error code if something goes wrong
  }
};

seedDatabase();