import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // You can trigger filter or API call here
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        placeholder="Search recipes by ingredient, name..."
        className="w-full p-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 rounded-r-xl hover:bg-orange-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
