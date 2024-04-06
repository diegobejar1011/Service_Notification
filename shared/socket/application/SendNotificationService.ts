import { SocketRepository } from "../domain/repositories/SocketRepository";
import { Notification } from "../../../notification/domain/entites/Notification";
import { Events } from "../domain/entities/Events";
import { NotificationReq } from "../../../notification/domain/entites/NotificationReq";

export class SendNotificationService {
    constructor(private readonly socketRepository: SocketRepository) {}
    async execute(parameters: NotificationReq): Promise<void> {
        try {
            const Notification : Notification = {
                ...parameters,
                date: new Date()
            }
            await this.socketRepository.notify(Events.SEND_DATA, Notification);
        } catch (error : any) {
            throw new Error(error);
        }
    }
}