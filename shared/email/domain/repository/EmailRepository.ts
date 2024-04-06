import { Email } from "../entities/Email"

export interface EmailRepository {
    createPostMan(): any;
    sendMail(email: Email): Promise<void>;
}