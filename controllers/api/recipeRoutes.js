const express = require('express')
const router = express.Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll();
        res.status(200).json(recipeData);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id);
        if (!recipeData) {
            res.status(404).json({ message: 'No recipe found with this id!'});
            return;
        }

        const recipe = recipeData.get({ plain: true });

        res.render('recipeDetails', {
          title: recipe.title,
          description: recipe.description,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          imageUrl: recipe.imageUrl,
          allergens: recipe.allergens,
          logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients, // !!! Ingredients may have been taken out and made into a seperate table, pleaase double check, then delete this comment. !!!
        instructions: req.body.instructions,
        imageUrl: req.body.imageUrl,
        allergens: req.body.allergens,
        user_id: req.body.user_id,
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    try {
      const recipe = await Recipe.findByPk(req.params.id);

      if (!recipe) {
        res.status(404).json({ message: 'No recipe found with this id!'});
        return;
      }

      if (recipe.user_id !== req.session.user_id) {
        res.status(403).json({ message: 'You do not have permission to edit this recipe'});
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
        res.status(403).json({ message: 'You do not have permission to delete this recipe'});
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
