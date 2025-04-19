import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
};

// -----------------------------
// routes/userRoutes.js
// -----------------------------
import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);

export default router;