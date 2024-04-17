import { NodemailerRepository } from "../../shared/email/infraestructure/ports/NodemailerRepository";
import { SocketIORepository } from "../../shared/socket/infraestructure/SocketIORepository";
import { MySQLRepository } from "../../shared/email/infraestructure/ports/MySQLRepository";
import { SMySQLRepository } from "../../shared/socket/infraestructure/SMySQLRepository";
import { JWTRepository } from "../../shared/socket/infraestructure/JWTRepository";
//SNS
import { SNSRepository } from "../../shared/sms/infraestructure/SNSRepository";

import { SendEmailService } from "../../shared/email/application/SendEmailService";
import { SendNotificationService } from "../../shared/socket/application/SendNotificationService";
//SNS
import { SendMessageService } from "../../shared/sms/application/SendMessageService";

import { NotifyService } from "../application/services/notifyService";

import { NotifyController } from "./controllers/NotifyController";

const nodemailerRepository = new NodemailerRepository();
const socketIORepository = new SocketIORepository("http://44.223.186.80:5000/");
const mysqlRepository = new MySQLRepository();
const snsRepository = new SNSRepository();
const smysqlRepository = new SMySQLRepository();
const jwtRepository = new JWTRepository();

const sendNotificationService = new SendNotificationService(socketIORepository, smysqlRepository, jwtRepository);
const sendEmailService = new SendEmailService(nodemailerRepository,mysqlRepository);
const sendMessageService = new SendMessageService(snsRepository);

const notifyService = new NotifyService(sendEmailService, sendNotificationService, sendMessageService);

export const notifyController = new NotifyController(notifyService);
