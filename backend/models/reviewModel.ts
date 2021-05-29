import mongoose from 'mongoose';
import { IReview } from '../type/model/product';

export const reviewSchema = new mongoose.Schema<IReview>(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    },
);
const Review = mongoose.model<IReview>('Review', reviewSchema);
export default Review;
