import { Events } from "../entities/Events";
import { Notification } from "../../../../notification/domain/entites/Notification";

export interface SocketRepository {
    connect(token: string): Promise<any>;
    notify(event: Events, notification: Notification, token: string): Promise<void>;
}