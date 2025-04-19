import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const useRecipes = () => {
  return useContext(RecipeContext);
};

export default useRecipes;
