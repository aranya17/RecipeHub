import React from "react";
import RecipeCard from "../components/RecipeCard";

const RecipePage = () => {
  const dummyRecipes = new Array(8).fill({
    title: "Grilled Chicken",
    image: "https://source.unsplash.com/400x300/?grilled-chicken",
    cuisine: "American",
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
