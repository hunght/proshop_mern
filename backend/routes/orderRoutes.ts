import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
} from '../controllers/orderController';
import { protect, admin } from '../middleware/authMiddleware';

router
    .route('/')
    .post(asyncHandler(protect), asyncHandler(addOrderItems))
    .get(asyncHandler(protect), admin, asyncHandler(getOrders));
router.route('/myorders').get(asyncHandler(protect), getMyOrders);
router.route('/:id').get(asyncHandler(protect), asyncHandler(getOrderById));
router.route('/:id/pay').put(asyncHandler(protect), asyncHandler(updateOrderToPaid));
router.route('/:id/deliver').put(asyncHandler(protect), admin, asyncHandler(updateOrderToDelivered));

export default router;
