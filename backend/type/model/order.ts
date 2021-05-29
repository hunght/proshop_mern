import { Document } from 'mongoose';
import { IUser } from './user';

export interface IOrder extends Document {
    blackUserId: IUser['_id'];
    whiteUserId: IUser['_id'];
    winner: IUser['_id'];
    startTime: Date;
    endTime: Date;
    fen: string[];
}
