const router = express.Router();
const { Recipe } = require('../../models');

router.get('/recipes', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll();
        res.status(200).json(recipeData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;