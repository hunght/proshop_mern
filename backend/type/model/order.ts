import { Document } from 'mongoose';
import { IProduct } from './product';
import { IUser } from './user';

type IOrderItem = {
    name: string;
    qty: number;
    image: string;
    price: number;
    product: IProduct['_id'];
};

type IShippingAdress = {
    address: string;
    city: string;
    postalCode: string;
    country: string;
};

export interface IOrder extends Document {
    user: IUser['_id'];

    orderItems: [IOrderItem];
    shippingAddress: IShippingAdress;

    paymentMethod: {
        type: string;
        required: true;
    };

    paymentResult: {
        id: string;
        status: string;
        update_time: string;
        email_address: string;
    };

    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    paidAt: number;

    isDelivered: boolean;
    deliveredAt: number;
}
