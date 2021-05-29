interface UserJoined {
    email: string;
    name: string;
    password: string;
    isAdmin: boolean;
    _id: string;
}

declare namespace Express {
    export interface Request {
        realIP?: string;
        pageType?: string;
        linkTarget?: string;
        protectedLink?: string;
        token?: string;
        user: UserJoined;
    }
}
