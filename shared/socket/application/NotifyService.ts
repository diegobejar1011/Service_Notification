import { SocketRepository } from "../domain/repositories/SocketRepository";
import { Notification } from "../../../notification/domain/entites/Notification";
import { Events } from "../domain/entities/Events";
export class NotifyService {
    constructor(private readonly socketRepository: SocketRepository) {}
    async execute(parameters: object): Promise<void> {
        try {
            const Notification : Notification = {
                parameters: parameters,
                date: new Date()
            }
            await this.socketRepository.notify(Events.SEND_DATA, Notification);
        } catch (error : any) {
            throw new Error(error);
        }
    }
}