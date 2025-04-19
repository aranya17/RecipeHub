import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">RecipeHub</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="/">Home</a>
          <a href="/upload">Upload</a>
          <a href="/saved">Saved</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
