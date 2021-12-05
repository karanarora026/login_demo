import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

const login = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const { username, password } = request.body;
        const isValidUsername = username === 'username';
        const isValidPassword = password === 'password';
        if (isValidUsername && isValidPassword) {
            response.status(200).json({ status: "success" });
        }
        else {
            response.status(401).json({ status: 'failed' })
        }
    }
    catch (err) {
        console.log(err)
        next(err)
    }
};


export {
    login
};