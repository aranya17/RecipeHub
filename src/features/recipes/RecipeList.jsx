import { useRecipe } from '../../context/RecipeContext';
import RecipeCard from '../../components/RecipeCard';

const RecipeList = () => {
  const { filteredRecipes, loading } = useRecipe();

  if (loading) return <p className="text-center">Loading recipes...</p>;
  if (!filteredRecipes.length) return <p className="text-center">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
