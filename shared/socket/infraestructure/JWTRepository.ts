import { TokenRepository } from "../domain/repositories/TokenRepository";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export class JWTRepository implements TokenRepository {
    createToken(id_user: number) : string {
        const token = jwt.sign({ userId: id_user }, 'Authentication', {
            expiresIn: 31536000
        });
        return token;
    }
}