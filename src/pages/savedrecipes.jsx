import React from "react";
import RecipeCard from "../components/RecipeCard";

const SavedRecipes = () => {
  const savedRecipes = [
    {
      title: "Paneer Tikka",
      image: "https://source.unsplash.com/400x300/?paneer",
      cuisine: "Indian",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Saved Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {savedRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SavedRecipes;
