import axios from 'axios';

const ML_BASE_URL = 'http://localhost:5001'; // Example ML backend

export const getRecommendations = async (userId) => {
  const res = await axios.post(`${ML_BASE_URL}/recommend`, { userId });
  return res.data;
};
