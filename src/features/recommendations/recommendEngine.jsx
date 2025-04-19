import { useEffect, useState } from 'react';
import { useRecipe } from '../../context/RecipeContext';
import RecipeCard from '../../components/RecipeCard';

const RecommendationEngine = () => {
  const { allRecipes, savedRecipes } = useRecipe();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const recommend = () => {
      if (savedRecipes.length === 0) {
        // Recommend popular or random if no saved recipes
        return allRecipes.slice(0, 5);
      }

      // Collect keywords from saved recipes
      const keywords = new Set();
      savedRecipes.forEach((recipe) => {
        recipe.ingredients.forEach((ing) => keywords.add(ing.toLowerCase()));
        keywords.add(recipe.cuisine.toLowerCase());
        keywords.add(recipe.dishType?.toLowerCase());
      });

      // Score and recommend
      const scored = allRecipes
        .map((recipe) => {
          let score = 0;
          recipe.ingredients.forEach((ing) => {
            if (keywords.has(ing.toLowerCase())) score += 1;
          });
          if (keywords.has(recipe.cuisine.toLowerCase())) score += 2;
          if (keywords.has(recipe.dishType?.toLowerCase())) score += 2;

          return { recipe, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map((r) => r.recipe);

      return scored;
    };

    setRecommendations(recommend());
  }, [allRecipes, savedRecipes]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Recommended for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendations.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationEngine;
