import React from "react";

const FilterBar = ({ filters, onChange }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow rounded-lg">
      <select className="p-2 border rounded" onChange={onChange}>
        <option value="">All Cuisines</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
      </select>

      <select className="p-2 border rounded" onChange={onChange}>
        <option value="">All Diets</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </select>
    </div>
  );
};

export default FilterBar;
