import { Request } from 'express';
import { IUser } from '../type/model/user';

export interface CreateLinkReq extends Request {
    body: Partial<IUser>;
}
