import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts,
} from '../controllers/productController';

import { protect, admin } from '../middleware/authMiddleware';

router.route('/').get(asyncHandler(getProducts)).post(asyncHandler(protect), admin, asyncHandler(createProduct));

router.route('/:id/reviews').post(asyncHandler(protect), asyncHandler(createProductReview));

router.get('/top', asyncHandler(getTopProducts));

router
    .route('/:id')
    .get(asyncHandler(getProductById))
    .delete(asyncHandler(protect), admin, asyncHandler(deleteProduct))
    .put(asyncHandler(protect), admin, asyncHandler(updateProduct));

export default router;
