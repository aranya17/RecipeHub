import React from "react";

const dummyRecipes = [
  { id: 1, name: "Sushi", image: "https://source.unsplash.com/400x300/?sushi" },
  { id: 2, name: "Pasta", image: "https://source.unsplash.com/400x300/?pasta" },
  { id: 3, name: "Biryani", image: "https://source.unsplash.com/400x300/?biryani" },
  { id: 4, name: "Tacos", image: "https://source.unsplash.com/400x300/?tacos" },
];

const RecipeSlider = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-4">
      {dummyRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="inline-block bg-white rounded-xl shadow-md w-64 mr-4 transform hover:scale-105 transition-transform"
        >
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-40 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{recipe.name}</h3>
            <p className="text-sm text-gray-500">World Cuisine</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeSlider;
