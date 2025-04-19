import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({});

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => setFilters({});

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, filters, updateFilters, clearFilters }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);