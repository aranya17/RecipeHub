import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
      <img src={recipe.image} alt={recipe.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{recipe.title}</h3>
        <p className="text-sm text-gray-500">{recipe.cuisine}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
