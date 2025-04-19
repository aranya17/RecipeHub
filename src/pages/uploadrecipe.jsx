import React, { useState } from 'react';
import axios from 'axios';

const UploadRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    cuisine: '',
    diet: '',
    mealType: '',
    dishType: '',
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const token = localStorage.getItem('token'); // adjust if you're using context
      const response = await axios.post('http://localhost:5000/api/recipes', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Recipe uploaded:', response.data);
      alert('Recipe uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 p-4">
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="cuisine" placeholder="Cuisine" onChange={handleChange} required />
      <input name="diet" placeholder="Diet" onChange={handleChange} />
      <input name="mealType" placeholder="Meal Type" onChange={handleChange} />
      <input name="dishType" placeholder="Dish Type" onChange={handleChange} />
      <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} required />
      <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
      <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      <button type="submit" className="bg-yellow-400 p-2 rounded">Upload Recipe</button>
    </form>
  );
};

export default UploadRecipe;
