import { SendEmailService } from "../../../shared/email/application/SendEmailService";
import { SendNotificationService } from "../../../shared/socket/application/SendNotificationService";
import { NotificationReq } from "../../domain/entites/NotificationReq";

export class NotifyService {
    constructor(private readonly sendEmailService: SendEmailService, 
        private readonly sendNotificationService: SendNotificationService
    ) {}
    async execute(parameters: NotificationReq): Promise<void> {
        try {
            await this.sendEmailService.execute(parameters);
            // await this.sendNotificationService.execute(parameters);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}