import { EmailRepository } from "../domain/repository/EmailRepository";
import { DatabaseRepository } from "../domain/repository/databaseRepository";
import { Email } from "../domain/entities/Email";
import { Notification } from "../../../notification/domain/entites/Notification";

export class SendEmailService { 
    constructor(private readonly emailRepository: EmailRepository, private readonly databaseRepository: DatabaseRepository) {}
    async execute(notification: Notification) : Promise<void>{
        try {
            const to = await this.databaseRepository.getUser(notification.id_habitat);
            const email: Email = {
                to: `${to}`,
                subject: `Notification del habitat ${notification.id_habitat}`,
                text: `Datos registrados 
                    Calificacion de la temperatura: ${notification.noteTemperature}
                    Calificacion de la humedad: ${notification.noteHumidity}
                    ¿Hubo movimiento? ${notification.movement}
                    Calificacion del habitat ${notification.note}
                `
            }
            
            this.emailRepository.sendMail(email);
        } catch (error : any) {
            throw new Error(error);
        }
    }
}