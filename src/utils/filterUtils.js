export const filterRecipes = (recipes, filters) => {
    return recipes.filter(recipe => {
      const matchIngredients = filters.ingredients.every((ing) =>
        recipe.ingredients.includes(ing)
      );
      const matchDiet = filters.diet ? recipe.diet === filters.diet : true;
      const matchMealType = filters.mealType ? recipe.mealType === filters.mealType : true;
      const matchDishType = filters.dishType ? recipe.dishType === filters.dishType : true;
  
      return matchIngredients && matchDiet && matchMealType && matchDishType;
    });
  };
  