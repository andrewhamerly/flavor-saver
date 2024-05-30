const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const recipe of recipeData) {
      await Recipe.create({
        ...recipe,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
};

seedDatabase();