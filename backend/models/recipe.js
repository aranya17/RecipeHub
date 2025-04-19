const mongoose = require ('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    ingredients: [String],
    instructions: { type: String },
    cuisine: { type: String },
    mealType: { type: String }, // e.g., breakfast, lunch
    dishType: { type: String }, // e.g., salad, soup
    diet: [String],             // e.g., vegan, gluten-free
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports =  Recipe;
