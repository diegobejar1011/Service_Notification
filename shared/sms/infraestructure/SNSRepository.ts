import { MessageRepository } from '../domain/repositories/MessageRepository';
import { Message } from "../domain/entities/Message";
import AWS from 'aws-sdk';
import { CredentialsOptions } from "aws-sdk/lib/credentials";

export class SNSRepository implements MessageRepository {
    createService(): any {
        const credentials : CredentialsOptions = {
            accessKeyId: process.env.ACCESS_KEY || 'ASIA2UC3FCEJQESUAYGW',
            secretAccessKey: process.env.SECRET_KEY || 'k9hXc0eR14R5blWx4/LmSca4ZUSX4n1nNoLTIILS',
        }

        AWS.config.update({ region: "us-east-1" });

        const sns = new AWS.SNS({
            credentials: credentials,
            apiVersion: '2010-03-31'
        });

        return sns;
    }

    async sendSMS(message: Message, topic: string): Promise<void> {
        try {
            const sns : AWS.SNS = this.createService();
            
            const params = {
                Message: message.content,
                Subject: message.subject,
                TopicArn: topic
            }
            await sns.publish(params).promise();
        } catch (error : any) {
            console.log('Aqui' + error);
            throw new Error(error);
        }
    }
}