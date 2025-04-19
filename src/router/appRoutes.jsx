import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecipePage from '../pages/RecipePage';
import UploadRecipe from '../pages/UploadRecipe';
import SavedRecipes from '../pages/SavedRecipes';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
      <Route path="/upload" element={<ProtectedRoute><UploadRecipe /></ProtectedRoute>} />
      <Route path="/saved" element={<ProtectedRoute><SavedRecipes /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
