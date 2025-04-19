import { useParams } from 'react-router-dom';
import { useRecipe } from '../../context/RecipeContext';

const RecipeDetail = () => {
  const { id } = useParams();
  const { allRecipes } = useRecipe();

  const recipe = allRecipes.find((r) => r.id.toString() === id);

  if (!recipe) return <p className="text-center">Recipe not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded" />
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p className="mt-4">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
