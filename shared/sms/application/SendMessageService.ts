import { Message } from "../domain/entities/Message";
import { MessageRepository } from "../domain/repositories/MessageRepository";
import { Notification } from "../../../notification/domain/entites/Notification";

export class SendMessageService {
    constructor(private readonly messageRepository: MessageRepository) {}
    async execute(notification: Notification) : Promise<void>{
        try {
            const message : Message = {
                subject: `Notificacion del habitat ${notification.id_habitat}`,
                content: `Datos registrados 
                Calificacion de la temperatura: ${notification.noteTemperature}
                Calificacion de la humedad: ${notification.noteHumidity}
                ¿Hubo movimiento? ${notification.movement ? "Si" : "No"}
                Calificacion del habitat ${notification.note}
            ` }

            // const topic = `${notification.id_habitat}`;
            const topic = `NotificationTopic`;

            
            await this.messageRepository.sendSMS(message, topic);
        } catch (error : any) {
            throw new Error(error);
        }
    }
}