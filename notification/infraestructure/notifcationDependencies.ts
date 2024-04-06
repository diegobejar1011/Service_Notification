import { NodemailerRepository } from "../../shared/email/infraestructure/ports/NodemailerRepository";
import { SocketIORepository } from "../../shared/socket/infraestructure/SocketIORepository";
import { MySQLRepository } from "../../shared/email/infraestructure/ports/MySQLRepository";
//SNS
import { SNSRepository } from "../../shared/sms/infraestructure/SNSRepository";

import { SendEmailService } from "../../shared/email/application/SendEmailService";
import { SendNotificationService } from "../../shared/socket/application/SendNotificationService";
//SNS
import { SendMessageService } from "../../shared/sms/application/SendMessageService";

import { NotifyService } from "../application/services/notifyService";

import { NotifyController } from "./controllers/NotifyController";

const nodemailerRepository = new NodemailerRepository();
const socketIORepository = new SocketIORepository('...');
const mysqlRepository = new MySQLRepository();
const snsRepository = new SNSRepository();

const sendNotificationService = new SendNotificationService(socketIORepository);
const sendEmailService = new SendEmailService(nodemailerRepository,mysqlRepository);
const sendMessageService = new SendMessageService(snsRepository);

const notifyService = new NotifyService(sendEmailService, sendNotificationService, sendMessageService);

export const notifyController = new NotifyController(notifyService);
