const Recipe = require('../models/Recipe');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');

// Get all recipes
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({});
  res.json(recipes);
});

// Get recipe by ID
const getRecipeById = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.json(recipe);
});

// Upload a new recipe
const uploadRecipe = asyncHandler(async (req, res) => {
  const { title, image, ingredients, instructions, cuisine, mealType, dishType, diet } = req.body;

  const recipe = new Recipe({
    title,
    image,
    ingredients,
    instructions,
    cuisine,
    mealType,
    dishType,
    diet,
    uploadedBy: req.user._id,
  });

  const saved = await recipe.save();
  res.status(201).json(saved);
});

// Save a recipe for user
const saveRecipe = asyncHandler(async (req, res) => {
  const recipeId = req.params.id;
  const user = req.user;

  if (!user.savedRecipes.includes(recipeId)) {
    user.savedRecipes.push(recipeId);
    await user.save();
  }

  res.json({ message: 'Recipe saved successfully' });
});

// Get saved recipes
const getSavedRecipes = asyncHandler(async (req, res) => {
  const user = await req.user.populate('savedRecipes');
  res.json(user.savedRecipes);
});

// Create a new recipe with an image upload
const createRecipe = asyncHandler(async (req, res) => {
  const { title, ingredients, instructions, cuisine, diet, mealType, dishType } = req.body;

  if (!req.file) {
    res.status(400);
    throw new Error('Image is required');
  }

  const image = `/uploads/${req.file.filename}`;

  const recipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    cuisine,
    diet,
    mealType,
    dishType,
    image,
    user: req.user._id,
  });

  res.status(201).json(recipe);
});

const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) {
    res.status(404);
    throw new Error('Recipe not found');
  }

  if (recipe.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized');
  }

  recipe.title = req.body.title || recipe.title;
  recipe.ingredients = req.body.ingredients || recipe.ingredients;
  recipe.instructions = req.body.instructions || recipe.instructions;
  recipe.cuisine = req.body.cuisine || recipe.cuisine;
  recipe.diet = req.body.diet || recipe.diet;
  recipe.mealType = req.body.mealType || recipe.mealType;
  recipe.dishType = req.body.dishType || recipe.dishType;

  if (req.file) {
    const imagePath = path.join(__dirname, '..', recipe.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath); // Delete old image
    }
    recipe.image = `/uploads/${req.file.filename}`;
  }

  const updated = await recipe.save();
  res.json(updated);
});


module.exports = {
  getRecipes,
  getRecipeById,
  uploadRecipe,
  saveRecipe,
  getSavedRecipes,
  createRecipe,
  updateRecipe, 
};
