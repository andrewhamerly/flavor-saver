const express = require('express');
const router = express.Router();
const { Recipe, Like } = require('../../models');
const withAuth = require('../../utils/auth');

// Endpoint to like a recipe
router.post('/:recipeId/like', withAuth, async (req, res) => {
    try {
        const { recipeId } = req.params;
        const userId = req.session.user_id; // Is session management in place(if we need)???

        // Check if the user has already liked the recipe
        const existingLike = await Like.findOne({ where: { recipeId, userId } });

        if (existingLike) {
            return res.status(400).json({ message: 'You have already liked this recipe' });
        }

        // Create a new like
        await Like.create({ recipeId, userId });

        // Increment the likes count on the recipe
        await Recipe.increment('likesCount', { by: 1, where: { id: recipeId } });

        res.status(200).json({ message: 'Recipe liked' });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;