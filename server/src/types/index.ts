declare namespace Express {
    interface Request {
        User?: {
            Username: string;
        }
    }
}