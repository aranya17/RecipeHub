import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import RecipeSlider from "../components/RecipeSlider";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100">
      <Navbar />

      <motion.div
        className="text-center pt-24 px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          Discover Recipes from Around the World 
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Search, explore, and save your favorite meals based on ingredients, diet, or mood!
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <SearchBar />
      </motion.div>

      <section className="mt-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Recipes</h2>
        <RecipeSlider />
      </section>
    </div>
  );
};

export default Home;
