import { Email } from "../../domain/entities/Email";
import { EmailRepository } from "../../domain/repository/EmailRepository";
import nodemailer from 'nodemailer';

export class NodemailerRepository implements EmailRepository {
    createPostMan(): any {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host:'smtp.gmail.com',
            port: 465,
            auth: {
                user: "repchecksoftware@gmail.com",
                pass: "cwft punm dhna bbek"
            }
        });
        return transporter;
    }

    async sendMail(email: Email): Promise<void> {
        try {
            const transporter = this.createPostMan();
            const info = await transporter.sendMail({
                from: 'Repcheck <repchecksoftware@gmail.com>',
                ...email
            });
            console.log("messageId: " + info.messageId); 
        } catch (error: any ) {
            throw new Error(error);
        }
    }
}