const express = require('express');
const { 
  getRecipes, 
  getRecipeById, 
  uploadRecipe, 
  saveRecipe, 
  getSavedRecipes, 
  createRecipe, 
  updateRecipe 
} = require('../controllers/recipeController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Route for getting all recipes
router.get('/', getRecipes);

// Route for getting a recipe by its ID
router.get('/:id', getRecipeById);

// Route for uploading a new recipe
router.post('/upload', protect, uploadRecipe);

// Route for saving a recipe to the user's saved recipes list
router.post('/save/:id', protect, saveRecipe);

// Route for getting all saved recipes of the logged-in user
router.get('/saved/all', protect, getSavedRecipes);

// Route for creating a new recipe (with image upload)
router.post('/', protect, upload.single('image'), createRecipe);

// Route for updating a recipe (with image upload)
router.put('/:id', protect, upload.single('image'), updateRecipe);

// Export the router using CommonJS
module.exports = router;
