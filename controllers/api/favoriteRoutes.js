const express = require('express');
const router = express.Router();
const { User, Recipe, Favorite } = require('../models');
const withAuth = require('../utils/auth');

router.get('/favorites', withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;

    const favorites = await Favorite.findAll({
      where: { userId },
      include: [{ model: Recipe }]
    });

    res.status(200).json(favorites.map(fav => fav.Recipe));
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/favorite', withAuth, async (req, res) => {
  try {
    const { recipeId } = req.body;
    const userId = req.session.user_id;

    const existingFavorite = await Favorite.findOne({ where: { userId, recipeId } });
    if (existingFavorite) {
      return res.status(400).json({ message: 'Recipe already favorited' });
    }

    await Favorite.create({ userId, recipeId });
    res.status(201).json({ message: 'Recipe favorited!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
