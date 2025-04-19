import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecipePage from "./pages/RecipePage";
import UploadRecipe from "./pages/UploadRecipe";
import SavedRecipes from "./pages/SavedRecipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/protectedroute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/upload" element={
          <ProtectedRoute>
            <UploadRecipe />
          </ProtectedRoute>
        } />
        <Route path="/saved" element={
          <ProtectedRoute>
            <SavedRecipes />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
