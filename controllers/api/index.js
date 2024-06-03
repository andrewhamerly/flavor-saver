const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;
