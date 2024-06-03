const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');

router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);
// router.use('/favorites', favoriteRoutes); // DO WE NEED This for favorites routes??

module.exports = router;
