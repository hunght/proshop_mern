import { Document } from 'mongoose';
import { IUser } from './user';

export interface IReview extends Document {
    name: string;
    rating: number;
    comment: string;
    user: IUser['_id'];
}
export interface IProduct extends Document {
    user: IUser['_id'];
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    reviews: [IReview];
    rating: number;
    numReviews: number;
    price: number;
    countInStock: number;
}
