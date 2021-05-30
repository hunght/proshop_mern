import { Request } from 'express';
import { IUser } from '../type/model/user';

export interface ICreateUserRequest extends Request {
    body: Partial<IUser>;
}
