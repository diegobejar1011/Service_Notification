import { Message } from '../entities/Message';

export interface MessageRepository {
    createService(): any;
    sendSMS(message: Message, topic: string): Promise<void>;
}