import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';
import { Handler } from 'express';
import _ from 'lodash';
const protect: Handler = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            const user = await User.findById(_.get(decoded, ['id'])).select('-password');
            if (user) {
                req.user = {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    password: user.password,
                    isAdmin: user.isAdmin,
                };
            }
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
};

const admin: Handler = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

export { protect, admin };
