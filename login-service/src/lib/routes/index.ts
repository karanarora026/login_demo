import { Router } from 'express';
import { login } from '@lib/controller';
import { body, checkSchema } from 'express-validator';

export default Router()
    .post('/login', checkSchema({
        username: {
            exists: true,
            in: ['body'],
            errorMessage: "invalid username"
        },
        password: {
            exists: true,
            in: ['body'],
            isLength: {
                options: { min: 8 }
            },
            errorMessage: "invalid password"
        }
    }), login)
