import { SocketRepository } from "../domain/repositories/SocketRepository";
import { Notification } from "../../../notification/domain/entites/Notification";
import { Events } from "../domain/entities/Events";
import { DatabaseRepository } from "../domain/repositories/SDatabaseRepository";
import { TokenRepository } from "../domain/repositories/TokenRepository";

export class SendNotificationService {
    constructor(private readonly socketRepository: SocketRepository, private readonly databaseRepository: DatabaseRepository, private readonly tokenRepository : TokenRepository) {}
    async execute(notification: Notification): Promise<void> {
        try {
            const id_user : number = await this.databaseRepository.getUser(notification.id_habitat);
            const token : string = this.tokenRepository.createToken(id_user);
            await this.socketRepository.notify(Events.SEND_DATA, notification, token);
        } catch (error : any) {
            throw new Error(error);
        }
    }
}