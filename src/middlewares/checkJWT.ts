import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';

class JsonWebToken {

    generateNewToken = (user: any) => {
        let userID = user.id;
        let email = user.email;
        const newToken = jwt.sign({userID, email}, JWT_SECRET, {
            expiresIn: "2h"
        })
        return newToken;
    }
}

export default JsonWebToken;