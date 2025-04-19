import { useEffect, useState } from 'react';
import { useRecipe } from '../../context/RecipeContext';

const useRecommendations = () => {
  const { allRecipes, savedRecipes } = useRecipe();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const getRecommendations = () => {
      if (savedRecipes.length === 0) return allRecipes.slice(0, 5);

      const keywords = new Set();
      savedRecipes.forEach((recipe) => {
        recipe.ingredients.forEach((ing) => keywords.add(ing.toLowerCase()));
        keywords.add(recipe.cuisine.toLowerCase());
        keywords.add(recipe.dishType?.toLowerCase());
      });

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

    setRecommendations(getRecommendations());
  }, [allRecipes, savedRecipes]);

  return recommendations;
};

export default useRecommendations;
