const express = require('express');
const router = express.Router();
const { Recipe, Ingredient } = require('../../models');
const withAuth = require('../../utils/auth');
const path = require('path');

router.get('/', async (req, res) => {
  const { user_id } = req.query;
  if (!user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const recipes = await Recipe.findAll({
      where: { users_id: user_id },
      include: [User]
    });
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

router.get('/addNewRecipe', withAuth, (req, res) => {
  console.log('Accessing addNewRecipe route');
  res.render(path.join('recipes', 'addNewRecipe'));
});

router.get('/:id', async (req, res) => {
  try {
      // Get the recipe details by its ID
      const recipeData = await Recipe.findByPk(req.params.id);

      if (!recipeData) {
          res.status(404).json({ message: 'No recipe found with this id!' });
          return;
      }

      // Get the ingredients for the recipe from the Ingredients table
      const ingredientsData = await Ingredient.findAll({
          where: { recipeId: req.params.id }
      });

      // Serialize the data for sending to the client
      const recipe = {
          id: recipeData.id,
          title: recipeData.title,
          description: recipeData.description,
          instructions: recipeData.instructions,
          imageUrl: recipeData.imageUrl,
          allergens: recipeData.allergens,
          ingredients: ingredientsData.map(ingredient => ({
              id: ingredient.id,
              name: ingredient.name,
              quantity: ingredient.quantity,
              unit: ingredient.unit
          }))
      };

      console.log(recipe);

      // Render the recipe details view with the data
      res.render('recipes/recipeDetails', { recipe });
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        imageUrl: req.body.imageUrl,
        allergens: req.body.allergens,
        user_id: req.body.user_id,
      });

      for (const ingredient of req.body.ingredients) {
        await Ingredient.create({
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          recipeId: recipeData.id,
        });
      }

      res.status(200).json(recipeData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  });

  router.post('/addNewRecipe', async (req, res) => {
    try {
      const { title, description, instructions, imageUrl, allergens, users_id, ingredients } = req.body;
  
      if (!title || !description || !instructions || !ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({ error: 'All fields are required, and ingredients must be provided' });
      }
  
      const newRecipe = await Recipe.create({
        title,
        description,
        instructions,
        imageUrl,
        allergens,
        users_id
      });
  
      const ingredientPromises = ingredients.map(ingredient => {
        return Ingredient.create({
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          recipeId: newRecipe.id
        });
      });
  
      await Promise.all(ingredientPromises);
  
      res.status(201).json(newRecipe);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create recipe' });
    }
  });

router.put('/:id', withAuth, async (req, res) => {
    try {
      const recipe = await Recipe.findByPk(req.params.id);

      if (!recipe) {
            res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }

      if (recipe.user_id !== req.session.user_id) {
            res.status(403).json({ message: 'You do not have permission to edit this recipe' });
        return;
      }

        const updatedRecipe = await Recipe.update(
          {
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            imageUrl: req.body.imageUrl,
            allergens: req.body.allergens,
          },
          {
            where: { id: req.params.id },
          }
        );

        res.status(200).json(updatedRecipe);
  } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const recipe = await Recipe.findByPk(req.params.id);

      if (!recipe) {
            res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }

      if (recipe.user_id !== req.session.user_id) {
            res.status(403).json({ message: 'You do not have permission to delete this recipe' });
        return;
      }

      await Recipe.destroy({
        where: {
          id: req.params.id
        }
      });

      res.status(200).json();
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  });

module.exports = router;