const router = express.Router();
const { Recipe } = require('../../models');

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
        res.status(200).json(recipeData);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const recipeData = await Recipe.create({
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        imageUrl: req.body.imageUrl,
        allergens: req.body.allergens,
        username: req.body.username,
      });
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Recipe.update(
          {
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            imageUrl: req.body.imageUrl,
            allergens: req.body.allergens,
            username: req.body.username,
          },
          {
            where: { id: req.params.id },
          }
        );

        if (updated) {
          const updatedRecipe = await Recipe.findByPk(req.params.id);
          res.status(200).json(updatedRecipe);
      } else {
          res.status(404).json({ message: 'No recipe found with this id!' });
      }
  } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const recipeData = await Recipe.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!recipeData) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }
  
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
