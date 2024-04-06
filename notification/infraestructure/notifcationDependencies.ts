import { NodemailerRepository } from "../../shared/email/infraestructure/ports/NodemailerRepository";
import { SocketIORepository } from "../../shared/socket/infraestructure/SocketIORepository";
import { MySQLRepository } from "../../shared/email/infraestructure/ports/MySQLRepository";

import { SendEmailService } from "../../shared/email/application/SendEmailService";
import { SendNotificationService } from "../../shared/socket/application/SendNotificationService";
import { NotifyService } from "../application/services/notifyService";

import { NotifyController } from "./controllers/NotifyController";

const nodemailerRepository = new NodemailerRepository();
const socketIORepository = new SocketIORepository('...');
const mysqlRepository = new MySQLRepository();

const sendNotificationService = new SendNotificationService(socketIORepository);
const sendEmailService = new SendEmailService(nodemailerRepository,mysqlRepository);

const notifyService = new NotifyService(sendEmailService, sendNotificationService);

export const notifyController = new NotifyController(notifyService);
