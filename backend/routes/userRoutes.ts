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
} from '../controllers/userController';
import { protect, admin } from '../middleware/authMiddleware';

router.route('/').post(registerUser).get(asyncHandler(protect), admin, asyncHandler(getUsers));
router.post('/login', asyncHandler(asyncHandler(authUser)));
router
    .route('/profile')
    .get(asyncHandler(protect), asyncHandler(getUserProfile))
    .put(asyncHandler(protect), asyncHandler(updateUserProfile));
router
    .route('/:id')
    .delete(asyncHandler(protect), admin, asyncHandler(deleteUser))
    .get(asyncHandler(protect), admin, asyncHandler(getUserById))
    .put(asyncHandler(protect), admin, asyncHandler(updateUser));

export default router;
