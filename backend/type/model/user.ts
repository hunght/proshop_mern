import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    isAdmin: boolean;
    matchPassword: (pw: string) => Promise<boolean>;
}
