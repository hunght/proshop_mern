import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', asyncHandler(authUser));
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser);

export default router;
